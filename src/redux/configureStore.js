import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rockets';
import dragonsSlice from './dragons/dragons';

export default configureStore({
  reducer: {
    rockets: rocketsSlice,
    dragons: dragonsSlice,
  },
});
