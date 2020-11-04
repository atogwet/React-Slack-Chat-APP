import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import firebase from './firebase';
import {setUser, clearUser} from './actions';

import "semantic-ui-css/semantic.min.css";


import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';

import {createStore} from 'redux';
import { Provider, connect }  from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import Spinner from './Spinner';
import rootReducers from './reducers';

const store = createStore( rootReducers, composeWithDevTools());

class Root extends React.Component{

  componentDidMount(){
    console.log(this.props.isLoading);
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.props.setUser(user);
        this.props.history.push('/');
      } else{
        this.props.history.push('/Login');
        this.props.clearUser();
      }
    })
  }

  render(){
    return this.props.isLoading ? <Spinner /> : (
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
        </Switch>
    );
  }
}

const mapStateFromProps = state => ({
  isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(connect(mapStateFromProps, {setUser, clearUser} )(Root));

ReactDOM.render(
  <React.StrictMode> 
    <Provider store={store}> 
    <Router> 
      <RootWithAuth /> 
    </Router> 
    </Provider>
  </React.StrictMode>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();