import react from 'react';
import {Grid, Header, Segment, Button, Message, Icon, Form,} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'
import md5 from 'md5'


class Register extends react.Component{

    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        errors:[],
        loading: false,
        userRef: firebase.database().ref("users")
    };

    isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
        return !username.length || !email.length || !password.length || !passwordConfirmation.length;
    }

    isPasswordValid =({ password, passwordConfirmation }) => {
        if(password.length < 6 || passwordConfirmation.length < 6){
            return false
        }else if(password !== passwordConfirmation){
            return false;
        }else{
            return true;
        }
    }

    displayErrors = errors => errors.map((error, i) => <p key={i} >{error.Message}</p> );


    isFormValid = () => {
        let errors = [];
        let error;
        if(this.isFormEmpty(this.state)){
            //throw err
            error = {Message:'fill in all fields'};
            this.setState({ errors: errors.concat(error) });
            return false;
        } else if(!this.isPasswordValid(this.state)){
            //throw err
            error = { Message:'password is not valid' };
            this.setState({ errors: errors.concat(error) });
            return false;
        } else{
            //form is valid 
            return true;
        }
    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    saveUser = createdUser => {
        return this.state.userRef.child(createdUser.user.uid).set({
            name: createdUser.user.displayName,
            avatar: createdUser.user.photoURL
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        if(this.isFormValid()){
        this.setState({ errors: [], loading: true })
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(createdUser => {
              console.log(createdUser);
              createdUser.user.updateProfile({
                  displayName: this.state.username,
                  photoURL: `https://robohash.org/${md5(createdUser.user.email)}?d=identicon`
              })
              .then(()=>{
                this.saveUser(createdUser).then(() => {
                    console.log("user saved");
                })
              })
              .catch(err =>{
                console.error(err);
                this.setState({errors: this.state.errors.concat(err), loading: false})
              })
          })
          .catch(err => {
              console.error(err);
              this.setState({errors: this.state.errors.concat(err), loading: false})
          })
        }  
    }

    // handleInputError = (errors, inputName) => {    //     return errors.some(error => 
    //         error.message.toString().toLowerCase.includes(inputName)) 
    //         ?"error" 
    //         :""
    // }

    render(){
        const {username, 
               email, 
               password, 
               passwordConfirmation, 
               errors, 
               loading} = this.state;
        return(
            <Grid textAlign="center" verticalAlign="middle" className="App">
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h1" icon color="black" textAlign="center">
                        <Icon name="user secret" color="black" />
                        Register for Shadow Chat
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked >
                            <Form.Input fluid 
                            name="username" 
                            icon="user" 
                            iconPosition="left" 
                            placeholder="username"
                            value={username} 
                            onChange={this.handleChange} 
                            type="text" />

                            <Form.Input fluid 
                            name="email" 
                            icon="mail" 
                            iconPosition="left" 
                            placeholder="Email" 
                            value={email}
                            // className ={ this.handleInputError(errors, "email") }
                            onChange={this.handleChange} 
                            type="email" />

                            <Form.Input fluid 
                            name="password" 
                            icon="lock" 
                            iconPosition="left" 
                            placeholder="Password" 
                            value={password}
                            // className ={ this.handleInputError(errors, "password") }
                            onChange={this.handleChange} 
                            type="password" />

                            <Form.Input fluid 
                            name="passwordConfirmation" 
                            icon="repeat" 
                            iconPosition="left" 
                            placeholder="Password Confirmation" 
                            value={passwordConfirmation}
                            // className ={ this.handleInputError(errors, "password") }
                            onChange={this.handleChange} 
                            type="password" />

                            <Button disabled={loading} className={loading ? 'loading': ''} color="black" fluid 
                            size="large" >
                            Submit
                            </Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>ERROR</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message> Already a user? <Link to="/Login" >Login</Link>  </Message>
                </Grid.Column>
            </Grid>
        )
    }
}


export default Register; 