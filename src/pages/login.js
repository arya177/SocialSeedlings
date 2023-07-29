// pages/login.tsx

import Head from 'next/head';
import LoginForm from '../components/LoginForm';
import styles from '../styles/login.module.css';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Login to Your Account</h1>
        <LoginForm />
      </main>

      <footer className={styles.footer}>
        <p>Don't have an account?</p>
        <Link href="/signup">
            Sign Up
        </Link>
      </footer>
    </div>
  );
};

export default LoginPage;
