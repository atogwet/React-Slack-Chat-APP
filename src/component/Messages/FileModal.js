import React from 'react';
import {Modal, Icon, Input, Button} from 'semantic-ui-react';
import mime from 'mime-types';

class FileModal extends React.Component{
state = {
    file: null,
    authorized: ['image/jpeg', 'image/png']
  };

  addFile = event => {
      const file = event.target.files[0];
      if(file){
          this.setState({ file });
      }
  }

  sendFile = () => {
      const { file } = this.state;
      const { uploadFile, closeModal } = this.props;

      if(file !== null){
          if(this.isAuthorized(file.name)){
              const metadata = { contentType: mime.lookup(file.name) };
              uploadFile(file,metadata);
              closeModal();
              this.clearFile();
          }
      }
  }

  isAuthorized = filename => this.state.authorized.includes(mime.lookup(filename));

  clearFile = () => this.setState({ file: null })
    render(){
        const {modal, closeModal} = this.props;
        return(
            <Modal basic open={modal} onClose={closeModal}>
                <Modal.Header>Select an image file</Modal.Header>
                <Modal.Content>
                    <Input 
                      fluid
                      label="file Types: JPG, PNG"
                      onChange={this.addFile}
                      name="file"
                      type="file"
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button 
                      color="green"
                      inverted
                      onClick={this.sendFile}
                    >
                        <Icon name={"checkmark"} /> Send
                    </Button>
                    <Button 
                      color="red"
                      inverted
                      onClick={closeModal}
                    >
                        <Icon name={"remove"} /> Cancel
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default FileModal;