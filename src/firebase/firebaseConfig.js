// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDjUFqNgTSjk02Qdb8h8-RqD7zP_bL86z8",
    authDomain: "socialseedlings-da8d5.firebaseapp.com",
    projectId: "socialseedlings-da8d5",
    storageBucket: "socialseedlings-da8d5.appspot.com",
    messagingSenderId: "636266420962",
    appId: "1:636266420962:web:4fc8d6c6c53e97801c9cbb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app,auth,provider}