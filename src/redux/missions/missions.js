import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://api.spacexdata.com/v3';

export const fetchMissionsThunk = createAsyncThunk('missions/fetch', async () => {
  const response = await fetch(`${API_BASE_URL}/missions`);
  const result = await response.json();

  return result;
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    joinMission: (state, action) => ({
      ...state,
      list: state.list.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            reserved: true,
          };
        }

        return mission;
      }),
    }),
    leaveMission: (state, action) => ({
      ...state,
      list: state.list.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            reserved: false,
          };
        }

        return mission;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissionsThunk.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetchMissionsThunk.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        list: action.payload.map((mission) => ({
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          wikipedia: mission.wikipedia,
          reserved: false,
        })),
      }));
    builder.addCase(fetchMissionsThunk.rejected, (state, action) => (
      { ...state, loading: false, error: action.payload }
    ));
  },
});

export default missionsSlice.reducer;
export const { joinMission, leaveMission } = missionsSlice.actions;
