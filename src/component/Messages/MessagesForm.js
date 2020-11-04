import React from 'react';
import firebase from '../../firebase';
import randomstring from 'randomstring';
// import FileModal from './FileModal';
import { Segment, Button, Input} from 'semantic-ui-react';
import { Picker, emojiIndex } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css';


class MessagesForm extends React.Component {
    state = {
      storageRef: firebase.storage().ref(),
      uploadTask: null,
      uploadState: '',
      percentUploaded: 0,
      message: "",
      channel: this.props.currentChannel,
      user: this.props.currentUser,
      loading: false,
      errors: [],
      emojiPicker: false
      // modal: false
    };

    handleAddEmoji = emoji =>{
      const oldMessage = this.state.message;
      const newMessage = this.colonToUnicode(` ${oldMessage} ${emoji.colons}`);
      this.setState({ message: newMessage, emojiPicker: false });
      setTimeout(() => this.messageInputRef.focus(), 0);
    }

    colonToUnicode = message => {
      return message.replace(/:[A-Za-z0-9_+-]+:/g, x => {
        x = x.replace(/:/g, "");
        let emoji = emojiIndex.emojis[x];
        if (typeof emoji !== "undefined") {
          let unicode = emoji.native;
          if (typeof unicode !== "undefined") {
            return unicode;
          }
        }
        x = ":" + x + ":";
        return x;
      });
    };

    handleTogglePicker = () => {
      this.setState({ emojiPicker: !this.state.emojiPicker })
    }


    openModal = () => this.setState({ modal: true });

    closeModal = () => this.setState({ modal: false });
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
  createMessage = (fileUrl = null) => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: this.state.user.uid,
        name: this.state.user.displayName,
        avatar: this.state.user.photoURL
      },
    };
    if(fileUrl !== null){
      message['image'] = fileUrl;
    }else {
      message['content'] = this.state.message;
    }
    return message;
  };

  random = () =>{
    randomstring.generate({length: 12,charset: 'alphabetic'});
  } 

  uploadFile = (file, metadata) => {
    // const pathToUpload = this.state.channel.id;
    const ref = this.props.messagesRef;
    const filePath = `chat/public/${file.name}`;

    this.setState({
      uploadState: 'uploading',
      uploadTask: this.state.storageRef.child(filePath).put(file, metadata)
    },
      () =>{
        // progesss function
        this.state.uploadTask.on('state_changed', snap => {
          const percentUploaded = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
          this.setState({ percentUploaded })
        },
          err => {
            //error function
            console.error(err);
            this.setState({
              errors: this.state.errors.concat(err),
              uploadState: 'error',
              uploadTask: null
            })
          },
          () => {
            // on complete upload function, that is waht to do when it has upload to the database  
            this.state.uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl => {
              console.log(downloadUrl);
              this.sendFileMessage(downloadUrl, ref, filePath)
            })
            .catch(err => {
              console.error(err);
              this.setState({
                errors: this.state.errors.concat(err),
                uploadState: 'error',
                uploadTask: null
              })
            })
          }
        )
      }
    )
  }

  sendFileMessage = (fileUrl, ref, pathToUpload) => {
    ref
      .child(pathToUpload)
      .push()
      .set(this.createMessage(fileUrl))
      .then(() => {
        this.setState({ uploadState: "done" });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          errors: this.state.errors.concat(err)
        });
      });
  };
  
    sendMessage = () => {
      const { getMessagesRef } = this.props;
      const { message, channel } = this.state;
  
      if (message) {
        this.setState({ loading: true });
        getMessagesRef()
          .child(channel.id)
          .push()
          .set(this.createMessage())
          .then(() => {
            this.setState({ loading: false, message: "", errors: [] });
          })
          .catch(err => {
            console.error(err);
            this.setState({
              loading: false,
              errors: this.state.errors.concat(err)
            });
          });
      } else {
        this.setState({
          errors: this.state.errors.concat({ message: "Add a message" })
        });
      }
    };
  
    render() {
      const { errors,message, loading, emojiPicker} = this.state;
  
      return (
        <Segment className="message__form">
          {emojiPicker && (
            <Picker
              set="apple"
              onSelect={this.handleAddEmoji}
              className="emojipicker"
              title="pick your emoji"
              emoji="point_up"
            />
          )}
          <Input
            fluid
            name="message"
            onChange={this.handleChange}
            value={message}
            style={{ marginBottom: "0.7em" }}
            label={<Button 
                    icon={emojiPicker ? "close" : "smile outline"}
                    content={emojiPicker ? "Close" : null}
                    onClick={this.handleTogglePicker} 
                  />}
            ref={node => (this.messageInputRef = node)}
            labelPosition="left"
            placeholder="Write your message"
            className={
              errors.some(error => error.message.includes("message"))
                ? "error"
                : ""
            }
          />
          <Button.Group icon widths="2">
            <Button
              onClick={this.sendMessage}
              disabled={loading}
              color="orange"
              content="Add Reply"
              labelPosition="left"
              icon="edit"
            />
            {/* <Button
              color="teal"
              content="Upload Media"
              labelPosition="right"
              icon="cloud upload"
              onClick={this.openModal}
            />
            <FileModal 
              modal={modal} 
              closeModal={this.closeModal} 
              uploadFile={this.uploadFile}
            /> */}
          </Button.Group>
        </Segment>
      );
    }
  }
export default MessagesForm;