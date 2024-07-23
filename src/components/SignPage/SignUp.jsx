import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSuccessfulSignUp = () => {
    setSuccessMessage("Account created successfully!");
    setTimeout(() => {
      navigate("/dashboard"); // Replace with your desired route
    }, 1500); // Redirect after 1.5 seconds
  };

  const signUpWithEmail = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      handleSuccessfulSignUp();
      console.log("Signed up with email:", userCredential.user);
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
      console.error("Email sign-up error:", error);
    }
  };

  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      handleSuccessfulSignUp();
      console.log("Signed up with Google:", result.user);
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage("");
      console.error("Google sign-up error:", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Create Account</h1>
      
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      <form onSubmit={signUpWithEmail} className="sign-up-form">
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
        <button type="submit" className="btn btn-primary">Sign Up with Email</button>
      </form>

      <button onClick={signUpWithGoogle} className="btn btn-google">Sign Up with Google</button>
    </div>
  );
};

export default SignUp;