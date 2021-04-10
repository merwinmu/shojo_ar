import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDN63n4fPbwMBaebxT09pW_UZDKKajwQWw",
    authDomain: "shojo-ar.firebaseapp.com",
    projectId: "shojo-ar",
    storageBucket: "shojo-ar.appspot.com",
    messagingSenderId: "548554521021",
    appId: "1:548554521021:web:140f35d817af3c8d743ad4",
    measurementId: "G-5VJPVBBPJ8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
