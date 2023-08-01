// userActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { REDIRECT_URI } from '../../utils/constants';
import UserPosts from '@/components/UserProfile/UserPosts';

// Fetch the access token using createAsyncThunk
export const fetchAccessToken = createAsyncThunk(
  'user/fetchAccessToken',
  async (code) => {
    console.log(code)

    try {
      const response = await fetch('https://unsplash.com/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}&client_secret=${process.env.NEXT_PUBLIC_SECRET_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}&grant_type=authorization_code`,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }

      const data = await response.json();
      console.log(data)
      return data.access_token;
    } catch (error) {
      throw error;
    }
  }
);

// Fetch the user's profile using createAsyncThunk
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, { getState }) => {
    const state = getState();
    const accessToken = state.user.accessToken; // Get the access token from the Redux store

    try {
      const response = await fetch('https://api.unsplash.com/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchAndStoreUserPhotos = createAsyncThunk(
  'user/fetchAndStoreUserPhotos',
  async (username) => {
    // Check if data already exists in local storage
    const cachedData = localStorage.getItem('userPhotos');
    const user = localStorage.getItem('userInfo')
    const parseUser = JSON.parse(user);
    const parsedData = JSON.parse(cachedData);
    // console.log(cachedData)
    // console.log(user)
    // if(user){
    //   const parseUser = JSON.parse(user);
    //   console.log(localStorage)
    //   console.log(parseUser.username)
    //   let parsedData
    //   if(cachedData){
    //     parsedData = JSON.parse(cachedData);
    //   }
    //   if (parseUser.username===username && parsedData?.length>0) {
    //     console.log(parsedData)
    //     return parsedData;
    //   }
    // }
    if (parseUser && parseUser.username === username && parsedData?.length > 0) {
      console.log(parsedData);
      return parsedData;
    }
    console.log("hi")
    // If data doesn't exist in local storage, make the API call
    try {
      const response = await fetch(`https://api.unsplash.com/users/${username}/photos`, {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user photos');
      }

      const data = await response.json();
      // Store the fetched data in local storage
      localStorage.setItem('userPhotos', JSON.stringify(data));
      console.log(data, localStorage.getItem('userPhotos'))
      return data;
    } catch (error) {
      console.error('Error fetching user photos:', error);
      throw error;
    }
  }
);

export const fetchUserByUsername = createAsyncThunk(
  'user/fetchUserByUsername',
  async (username) => {

    const cachedData = localStorage.getItem('userInfo');
    if(cachedData){
      const parsedData = JSON.parse(cachedData);
      if (cachedData.username===username) {
      
        console.log(parsedData)
        return parsedData;
      }
    }
    
    const url = `https://api.unsplash.com/users/${username}`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      localStorage.setItem('userInfo', JSON.stringify(data));
      console.log(data);
      console.log(localStorage.getItem('userInfo'))
      return data;
    } catch (error) {
      throw error;
    }
  }
);


