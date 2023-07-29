import {useState, useEffect} from 'react'
import Head from 'next/head';
import styles from '../styles/feeds.module.css';
import Link from 'next/link';
import {ACCESS_KEY,API_URL} from '@/utils/constants'
import PostCard from '@/components/FeedComponents/PostCard';
import FeedRightComponent from '@/components/FeedComponents/FeedRightComponent';


const FeedPage = () => {
  const [photos, setPhotos] = useState([]);
//   useEffect(() => {
//     fetchRandomPhotos();
//   }, []);
  const fetchRandomPhotos = async () => {
    try {
      const response = await fetch(API_URL + `?client_id=${ACCESS_KEY}&count=10`);
      if (!response.ok) {
        throw new Error('Error fetching random photos');
      }
      const data = await response.json();
      setPhotos(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.leftColumnContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.profile}>
              <img className={styles.profileImage} src="data:image/jpeg;base64,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" alt='photo' />
              <div className={styles.profileName}>{'hello'}</div>
            </div>
          </div>
        </div>

        <div className={styles.middleColumnContainer}>
          <div className={styles.middleColumn}>
            {Array.from({ length: 10 }, (_, index) => (
              <PostCard/>
            ))}
          </div>
        </div>

        <div className={styles.rightColumnContainer}>
          <div className={styles.rightColumn}>
            <FeedRightComponent/>
          </div>
        </div>
      </main>
    </div>

  );
};

export default FeedPage;
