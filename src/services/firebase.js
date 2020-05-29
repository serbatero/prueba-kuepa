import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyB6tDY7nJMY8enXAfF81DJ_WrBpEqRm1BU",
  authDomain: "chatprueba-39bd8.firebaseapp.com",
  databaseURL: "https://chatprueba-39bd8.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
