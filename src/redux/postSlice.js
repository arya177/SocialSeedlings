import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomPhotos } from '../pages/api/posts'; // Import the action function

const postSlice = createSlice({
  name: 'post',
  initialState: {
    randomPhotos: [], // Initialize with an empty array
    loading: false,
    error: null,
  },
  reducers: {}, // You can add additional reducers here if needed
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomPhotos.fulfilled, (state, action) => {
        state.randomPhotos = action.payload; // Set the fetched random photos in the state
        state.loading = false;
      })
      .addCase(fetchRandomPhotos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectRandomPhotos = (state) => state.post.randomPhotos; // Add a selector to access the random photos from the state

export default postSlice.reducer;
