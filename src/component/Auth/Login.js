import react from 'react';
import {Grid, Header, Segment, Button, Message, Icon, Form,} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase'


class Login extends react.Component{

    state = {
        email: "",
        password: "",
        errors:[],
        loading: false,
    };

    displayErrors = errors => errors.map((error, i) => <p key={i} >{error.Message}</p> );

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
        if(this.isFormValid(this.state)){
        this.setState({ errors: [], loading: true })
        firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(signedInUser => {
              console.log(signedInUser);
          })
          .catch(err =>{
            console.error(err);
            this.setState({
                errors: this.state.errors.concat(err),
                loading: false
            });
          });
        }  
    }

    isFormValid = ({email, password}) => email && password;

    render(){
        const {email, 
               password, 
               errors, 
               loading} = this.state;
        return(
            <Grid textAlign="center" verticalAlign="middle" className="App">
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h1" icon color="black" textAlign="center">
                        <Icon name="user secret" color="black" />
                        Login to Shadow Chat
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked >

                            <Form.Input fluid 
                            name="email" 
                            icon="mail" 
                            iconPosition="left" 
                            placeholder="Email" 
                            value={email}
                            onChange={this.handleChange} 
                            type="email" />

                            <Form.Input fluid 
                            name="password" 
                            icon="lock" 
                            iconPosition="left" 
                            placeholder="Password" 
                            value={password}
                            onChange={this.handleChange} 
                            type="password" />

                            <Button disabled={loading} className={loading ? 'loading': ''} color="black" fluid 
                            size="large" >
                            Login 
                            </Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>ERROR</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message> Don't have an account? <Link to="/Register" >Register</Link>  </Message>
                </Grid.Column>
            </Grid>
        )
    }
}


export default Login; 