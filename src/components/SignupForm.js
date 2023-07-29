// components/SignupForm.js

import React, { useState } from 'react';
import styles from '../styles/signup.module.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/firebaseConfig';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-up logic here, such as API calls and form validation
    // You can use state management libraries like Redux or Next.js built-in useState for managing the form data
    console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className = {styles.localInput}
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <input
        className = {styles.localInput}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className = {styles.localInput}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className={styles.localButton} type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
