import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_AKaIemdV5rql8HkFuCLyuKTiY_NjOBI",
    authDomain: "mirko-react-app-expensify.firebaseapp.com",
    databaseURL: "https://mirko-react-app-expensify.firebaseio.com",
    projectId: "mirko-react-app-expensify",
    storageBucket: "mirko-react-app-expensify.appspot.com",
    messagingSenderId: "943466037875",
    appId: "1:943466037875:web:759da55e7abdea1dae6006"
}

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Mirko Lecic'
})