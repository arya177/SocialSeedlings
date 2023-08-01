import Head from 'next/head';
import UserAvatar from './UserAvatar'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomPhotos } from '../../pages/api/posts';
import {useState, useEffect} from 'react'

const FeedRightComponent = () => {
  const dispatch = useDispatch();
  const randomPhotos = useSelector((state) => state.post.randomPhotos);

  useEffect(() => {
    // Call the action function to fetch random photos and user details
    console.log(localStorage, typeof localStorage, localStorage.length)
    // if (localStorage.length===0) {
      // Fetch photos only if they are not available in the Redux state
      dispatch(fetchRandomPhotos());
    // }
  }, []);
  
  return (
    <div>
      {randomPhotos.length>0 ? (
              // Render PostCard components when photos are available
              randomPhotos.map((photoData) => (
                <UserAvatar
                  photo={photoData.photo}
                  userProfileImageUrl={photoData.userProfileImageUrl}
                />
              ))
            ) : (
              // Render a loading state or message when photos are still null
              <p>Loading...</p>
            )}
    </div>
  );
};

export default FeedRightComponent;
