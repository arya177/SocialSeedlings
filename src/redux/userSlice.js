// userSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfile,fetchAndStoreUserPhotos } from '../pages/api/users';

// userSlice.js
const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: null,
    profile: null,
    userPhotos: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      // Save the access token to local storage whenever it changes
      if (typeof window !== 'undefined') {
        // Check if window object is defined (client-side)
        localStorage.setItem('accessToken', action.payload);
      }
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Handle the 'fulfilled' action of the fetchUserProfile async action
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
    builder.addCase(fetchAndStoreUserPhotos.fulfilled, (state,action) => {
      state.userPhotos = action.payload;
    })
  },
});


export const { setAccessToken, setProfile } = userSlice.actions;
export default userSlice.reducer;
