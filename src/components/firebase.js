// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDOQx3rajrPRrfWclUj6gcoAqgYzi7LzE",
  authDomain: "ecobins-ad150.firebaseapp.com",
  projectId: "ecobins-ad150",
  storageBucket: "ecobins-ad150.appspot.com",
  messagingSenderId: "113528886349",
  appId: "1:113528886349:web:bc1b97d56da75e9eb97804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };