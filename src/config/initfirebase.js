import * as firebase from "firebase/app";
import '@firebase/messaging';


export const initfirebase = () => {
  firebase.initializeApp({
    "apiKey": "AIzaSyA3_X0M3P0CPa6zX1YQ3-1N-RLQv8AnbY8",
    "appId": "1:1036200227238:web:09708c323c808a3c",
    "authDomain": "test-285b5.firebaseapp.com",
    "databaseURL": "https://test-285b5.firebaseio.com",
    "messagingSenderId": "1036200227238",
    "projectId": "test-285b5",
    "storageBucket": "test-285b5.appspot.com"
  });
  console.log('firebase initialised');

  var messaging = firebase.messaging();
  messaging.usePublicVapidKey('BBTg4vQulhTEZIeX6bk-_PvUTcTFj6T9u29n3LXyvM2flRaOPpsBzIyCVuPTN_qd9FXcbf6ckR9fABUTJuNhDZ4');
  console.log('messaging initialised');
}