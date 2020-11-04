import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
import "firebase/database"



var Config = {
    apiKey: "AIzaSyAI9Ua1uVKjM-UPwg7i2VTGRpnaUEUzDyw",
    authDomain: "react-slack-chat-app-95f1c.firebaseapp.com",
    databaseURL: "https://react-slack-chat-app-95f1c.firebaseio.com",
    projectId: "react-slack-chat-app-95f1c",
    storageBucket: "react-slack-chat-app-95f1c.appspot.com",
    messagingSenderId: "876248782759",
    appId: "1:876248782759:web:e6fc7d2278091c9d438882",
    measurementId: "G-V6E7344HBG"
};

firebase.initializeApp(Config);

export default firebase;