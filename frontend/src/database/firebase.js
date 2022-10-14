// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1lvLNwenrAWCav4xABBywdeIKxrfslr8",
  authDomain: "jphacks2022-b2212.firebaseapp.com",
  projectId: "jphacks2022-b2212",
  storageBucket: "jphacks2022-b2212.appspot.com",
  messagingSenderId: "860631021927",
  appId: "1:860631021927:web:ec9cae74075bd51ef897c2",
  measurementId: "G-VNYBL82KNY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

export default db;