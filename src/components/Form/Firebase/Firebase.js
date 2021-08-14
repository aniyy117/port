import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1SZwbkKKtMhTo_WS_0X4B_DfrQZ6zhuk",
  authDomain: "portfolio-555c2.firebaseapp.com",
  projectId: "portfolio-555c2",
  storageBucket: "portfolio-555c2.appspot.com",
  messagingSenderId: "708825909888",
  appId: "1:708825909888:web:d2a5bff5496d59fe08f465",
  measurementId: "G-8PN6YFFLP2",
});

var db = firebaseApp.firestore();

export { db };
