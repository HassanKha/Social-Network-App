// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//import firebase from 'firebase'
//import "firebase/storage"
// import firebase from 'firebase/app';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBOAKCGsAXER8T6bkxZvE9UCskAS9MyD-4",
    authDomain: "facebook-814f9.firebaseapp.com",
    projectId: "facebook-814f9",
    storageBucket: "facebook-814f9.appspot.com",
    messagingSenderId: "409912905220",
    appId: "1:409912905220:web:5110c9a597e4a04d78ef51",
    measurementId: "G-MJVTY7KKFD"
  };
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()
const storage = firebase.storage();

export {db , storage};