// userActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { REDIRECT_URI } from '../../utils/constants';

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
      // const userPhotos = data.map((photo) => ({
      //   id: photo.id,
      //   title: photo.title,
      //   imageUrl: photo.imageUrl,
      // }));
      localStorage.setItem('userPhotos', JSON.stringify(data));

      return data;
    } catch (error) {
      console.error('Error fetching user photos:', error);
      throw error; // Rethrow the error to let createAsyncThunk handle it
    }
  }
);


