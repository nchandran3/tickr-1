var firebase = require('firebase/app');
var firestore = require('firebase/firestore');

// initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyBTwdb1WlLN1xwhVUnqsIIQuBtWwFDa450",
    authDomain: "tickr-935f7.firebaseapp.com",
    databaseURL: "https://tickr-935f7.firebaseio.com",
    projectId: "tickr-935f7",
    storageBucket: "tickr-935f7.appspot.com",
    messagingSenderId: "583431890824"
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
