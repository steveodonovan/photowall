import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDnWySnD0yfSypGTMrjU3HjDaUc4OdY5jY",
    authDomain: "photowall-fdbb7.firebaseapp.com",
    databaseURL: "https://photowall-fdbb7.firebaseio.com",
    projectId: "photowall-fdbb7",
    storageBucket: "photowall-fdbb7.appspot.com",
    messagingSenderId: "866204126452"
};

firebase.initializeApp(config)

const database = firebase.database()

export {database}
