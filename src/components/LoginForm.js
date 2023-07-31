import React, { useState } from 'react';
import styles from '../styles/login.module.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/firebaseConfig';
import { useRouter } from 'next/router';
import {fetchAccessToken} from '../pages/api/users'
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // router.push(`https://unsplash.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&redirect_uri=http://localhost:3000/feeds&response_type=code&scope=public+read_user+write_user`)
        router.push(`https://unsplash.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&redirect_uri=https://social-seedlings-two.vercel.app/feeds&response_type=code&scope=public+read_user+write_user`)
        

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
