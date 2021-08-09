import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice';
import movieSlice from '../features/movie/movieSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),

});
