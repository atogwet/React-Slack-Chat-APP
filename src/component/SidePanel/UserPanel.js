import React from 'react';
import { Grid, Header, Icon, Dropdown, Image, Modal, Input, Button } from 'semantic-ui-react';
import firebase from '../../firebase';
import AvatarEditor from 'react-avatar-editor';

class UserPanel extends React.Component {

    state = {
        user: this.props.currentUser,
        modal: false,
        previewImage: "",
        croppedImage: '',
        blob: ''
    }

    openModal = () => this.setState({ modal: true });

    closeModal = () => this.setState({ modal: false });



    dropDownOptions = () => [
        {
            key: "user",
            text: (
                <span>Signed in as <strong>{this.state.user.displayName}</strong></span>
            ),
            disabled: true
        },
        {
            key: "avatar",
            text: <span onClick={this.openModal} >Change avatar</span>
        },
        {
            key: "signout",
            text: <span onClick={this.handleSignout} >Sign out</span>
        }
    ];

    handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log("SignedOut!"))
    }

    handleChange = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
            reader.addEventListener("load", () => {
                this.setState({ previewImage: reader.result });
            });
        }
    };

    handleCropImage = () => {
        if (this.avatarEditor) {
            this.avatarEditor.getImageScaledToCanvas().toBlob(blob => {
                let imageUrl = URL.createObjectURL(blob);
                this.setState({
                    croppedImage: imageUrl,
                    blob
                });
            });
        }
    }


    render() {
        const { user, modal, previewImage, croppedImage } = this.state;
        console.log(this.props.currentUser)
        return (
            <Grid style={{ background: '#43c4c' }} >
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2rem', margin: 0 }} >
                        {/* App Header */}
                        <Header inverted floated="left" as="h2" >
                            <Icon name="user secret" color="#4c3c4c" size="big" />
                            <Header.Content>SHADOW chat</Header.Content>
                        </Header>

                        {/* User Dropdown */}
                        <Header inverted style={{ padding: '0.2rem' }} as="h4" >
                            <Dropdown trigger={
                                <span>
                                    <Image src={user.photoURL} spaced="right" avatar style={{ width: '50px', height: 'auto' }} />
                                    {user.displayName}
                                </span>}
                                options={this.dropDownOptions()} />
                        </Header>

                    </Grid.Row>
                    <Modal basic open={modal} onClose={this.closeModal} >
                        <Modal.Header> Change Avatar </Modal.Header>
                        <Modal.Content>
                            <Input
                                fluid
                                type="file"
                                label="New Avatar"
                                name="previewImage"
                            />
                            <Grid centered stackable columns={2} >
                                <Grid.Row centered >
                                    <Grid.Column className="ui centered aligned grid" >
                                        {previewImage && (
                                            <AvatarEditor
                                                ref={node => (this.avatarEditor = node)}
                                                image={previewImage}
                                                width={120}
                                                height={120}
                                                border={50}
                                                scale={1.2}
                                            />
                                        )}
                                        {/* Image Preview  */}
                                    </Grid.Column>
                                    <Grid.Column>
                                        {croppedImage && (
                                            <Image
                                                style={{ margin: '3.5em auto' }}
                                                width={100}
                                                height={100}
                                                src={croppedImage}
                                            />
                                        )}
                                        {/* Cropped Image */}
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Modal.Content>
                        <Modal.Actions>
                        {croppedImage &&<Button color="green" inverted  >
                                <Icon name="save" /> Change Avatar
                            </Button>}
                            <Button color="green" inverted onClick={this.handleCropImage} >
                                <Icon name="image" /> Preview
                            </Button>
                            <Button color="red" inverted onClick={this.closeModal} >
                                <Icon name="remove" /> Cancel
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel;