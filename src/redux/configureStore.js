import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rockets';

export default configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});
