// actions/photoActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
// actions/photoActions.js



const fetchRandomPhotosFromAPI = async () => {
  console.log("hi")
  const response = await fetch('https://api.unsplash.com/photos/random?count=10', {
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch random photos');
  }

  const data = await response.json();
  const photosWithUserDetails = await Promise.all(
    data.map(async (photo) => {
      const userProfileImageUrl = await fetchUserProfileImage(photo.user.username);
      return {
        photo: photo,
        userProfileImageUrl: userProfileImageUrl,
      };
    })
  );
  return photosWithUserDetails;
};

export const fetchRandomPhotos = createAsyncThunk(
  'photo/fetchRandomPhotos',
  async (_, { rejectWithValue, getState }) => {
    try {
      
      // Check if randomPhotos data is already available in the Redux store
      const state = getState();
      console.log(state.photo)
      if (state?.photo?.randomPhotos.length > 0) {
        console.log(state.photo.randomPhotos)
        return state.photo.randomPhotos;
      }

      // Check if randomPhotos data is available in local storage
      const cachedRandomPhotos = JSON.parse(localStorage.getItem('randomPhotos') || '[]');
      console.log(cachedRandomPhotos)
      if (cachedRandomPhotos.length > 0) {
        return cachedRandomPhotos;
      }

      // If data is not available in the Redux store or local storage, fetch from API
      // const data = await fetchRandomPhotosFromAPI();

      // Save the fetched data in local storage for future use
      localStorage.setItem('randomPhotos', JSON.stringify(data));
      console.log(data, localStorage)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const fetchUserProfileImage = async (username) => {
  try {
    const userResponse = await fetch(`https://api.unsplash.com/users/${username}`, {
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData = await userResponse.json();
    return userData.profile_image?.small || '';
  } catch (error) {
    return '';
  }
};