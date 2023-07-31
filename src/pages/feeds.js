import {useState, useEffect} from 'react'
import Head from 'next/head';
import styles from '../styles/feeds.module.css';
import Link from 'next/link';
import {ACCESS_KEY,API_URL} from '@/utils/constants'
import PostCard from '@/components/FeedComponents/PostCard';
import FeedRightComponent from '@/components/FeedComponents/FeedRightComponent';
import FeedLeftComponent from '@/components/FeedComponents/FeedLeftComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomPhotos } from '../pages/api/posts'; // Import the action function
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import {fetchAccessToken} from './api/users'


const FeedPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const randomPhotos = useSelector((state) => state.post.randomPhotos);
  const code = router.query.code || null;

  useEffect(() => {
    // Call the action function to fetch random photos and user details
    if (randomPhotos.length === 0) {
      // Fetch photos only if they are not available in the Redux state
      dispatch(fetchRandomPhotos());
    }
  }, []);
  
  useEffect(() => {
    // If the code is available, dispatch the action to fetch the access token
    if (code) {
      dispatch(fetchAccessToken(code));
    }}, [code])
  return (
    <>
    <Navbar/>
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.leftColumnContainer}>
          <div className={styles.leftColumn}>
            <FeedLeftComponent/>
          </div>
        </div>

        <div className={styles.middleColumnContainer}>
          <div className={styles.middleColumn}>
          {randomPhotos.length>0 ? (
              // Render PostCard components when photos are available
              randomPhotos.map((photoData) => (
                <PostCard
                  key={photoData.photo.id} // Add a unique key to each PostCard
                  photo={photoData.photo}
                  userProfileImageUrl={photoData.userProfileImageUrl}
                />
              ))
            ) : (
              // Render a loading state or message when photos are still null
              <p>Loading...</p>
            )}
          </div>
        </div>

        <div className={styles.rightColumnContainer}>
          <div className={styles.rightColumn}>
            <FeedRightComponent/>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default FeedPage;
