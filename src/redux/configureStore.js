import { configureStore } from '@reduxjs/toolkit';
import missions from './missions/missions';
import rocketsSlice from './rockets/rockets';

export default configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions,
  },
});
