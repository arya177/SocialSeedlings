// pages/signup.js

import Head from 'next/head';
import SignupForm from '../components/SignupForm';
import styles from '../styles/signup.module.css';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sign Up for an Account</h1>
        <SignupForm />
      </main>

      <footer className={styles.footer}>
        <p>Already have an account? </p>
        <Link href="/login">
            Login
        </Link>
      </footer>
    </div>
  );
};

export default SignupPage;
