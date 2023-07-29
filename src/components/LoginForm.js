import React, { useState } from 'react';
import styles from '../styles/login.module.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/router';


const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here, such as API calls and form validation
    // You can use state management libraries like Redux or Next.js built-in useState for managing the form data
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.push('/feeds');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={styles.localInput}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input className={styles.localInput}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className={styles.localButton} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
