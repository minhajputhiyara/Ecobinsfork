import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../firebase";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSuccessfulSignIn = (userEmail) => {
    setSuccessMessage("Signed in successfully!");
    setTimeout(() => {
      navigate("/profile", { state: { email: userEmail } });
    }, 1500);
  };

  const signInWithEmail = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      handleSuccessfulSignIn(userCredential.user.email);
      console.log("Signed in with email:", userCredential.user);
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
      console.error("Email sign-in error:", error);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      handleSuccessfulSignIn(result.user.email);
      console.log("Signed in with Google:", result.user);
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In to Your Account</h1>
     
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={signInWithEmail} className="sign-in-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Sign In with Email</button>
      </form>
      <button onClick={signInWithGoogle} className="btn btn-google">Sign In with Google</button>
    </div>
  );
};

export default SignIn;