import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postSlice';
import userReducer from './userSlice';
import localStorageSyncMiddleware from '../middleware/localStorageSync';

const customMiddleware = [localStorageSyncMiddleware];

const store = configureStore({
    reducer: {
      post: postReducer,
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
  });
  
export default store;