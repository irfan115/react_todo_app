// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyBTlGYtzguxTNq1sAIdTUpdtbSwhapBR3A",
    authDomain: "todo-app-cp-e8b5a.firebaseapp.com",
    databaseURL: "https://todo-app-cp-e8b5a.firebaseio.com",
    projectId: "todo-app-cp-e8b5a",
    storageBucket: "todo-app-cp-e8b5a.appspot.com",
    messagingSenderId: "711504322336",
    appId: "1:711504322336:web:cf64473fde288736ad4145",
    measurementId: "G-HG866PCTMB"

});

const db = firebaseApp.firestore();


export default db;