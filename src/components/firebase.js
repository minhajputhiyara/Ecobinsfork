// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9QRVCsUvaDYybN1swPEZg-Mykmj-KVHY",
  authDomain: "ecobins-49d69.firebaseapp.com",
  projectId: "ecobins-49d69",
  storageBucket: "ecobins-49d69.appspot.com",
  messagingSenderId: "712172045623",
  appId: "1:712172045623:web:671d301847115581dfc6b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };