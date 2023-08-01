// components/Navbar.js
import { useState } from 'react';
import styles from '../styles/Navbar.module.css'; // Import the CSS module
import { signOut, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/firebaseConfig'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
 

  const router = useRouter();
  const handleLogout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.clear();
        console.log(localStorage, typeof localStorage, localStorage.length)
        router.push('/login')
    }).catch((error) => {
        // An error happened.
    });
      
      
  }
  return (
    <nav className={styles.navigation}>
      <a href="/" className={styles['brand-name']}>
       Social Seedlings
      </a>
      <button
        className={styles.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? `${styles['navigation-menu']} ${styles.expanded}` : styles['navigation-menu']
        }
      >
        <ul>
          
          <li>
            <Link href='/login' onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
