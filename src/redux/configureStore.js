import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missions';
import rocketsSlice from './rockets/rockets';
import dragonsSlice from './dragons/dragons';

export default configureStore({
  reducer: {
    rockets: rocketsSlice,
    missions: missionsSlice,
    dragons: dragonsSlice,
  },
});
