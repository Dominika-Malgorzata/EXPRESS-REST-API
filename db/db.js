import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA5IT8-Xa1cGdTXpngaKTQJwRhnCJXfrdM",
    authDomain: "teamtailors1.firebaseapp.com",
    databaseURL: "https://teamtailors1.firebaseio.com",
    projectId: "teamtailors1",
    storageBucket: "teamtailors1.appspot.com",
    messagingSenderId: "216965019831",
    appId: "1:216965019831:web:8d667e0d06ea55c6787532"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export default db;
