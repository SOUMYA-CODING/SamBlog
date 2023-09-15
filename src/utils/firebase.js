// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "samblog-d1d83.firebaseapp.com",
    projectId: "samblog-d1d83",
    storageBucket: "samblog-d1d83.appspot.com",
    messagingSenderId: "567153087720",
    appId: "1:567153087720:web:6e4356473cf8303fc6a55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);