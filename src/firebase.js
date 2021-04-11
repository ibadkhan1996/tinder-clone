import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgnzh5E1aooTe4bp55Bw0YIWgJ1x5zQZw",
  authDomain: "tinder-clone-c1303.firebaseapp.com",
  databaseURL: "https://tinder-clone-c1303.firebaseio.com",
  projectId: "tinder-clone-c1303",
  storageBucket: "tinder-clone-c1303.appspot.com",
  messagingSenderId: "274650709119",
  appId: "1:274650709119:web:b33f7be9d23037511b934a",
  measurementId: "G-9MCXEDT3W7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
