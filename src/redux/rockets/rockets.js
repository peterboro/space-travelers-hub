import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://api.spacexdata.com/v3';

export const fetchRocketsThunk = createAsyncThunk('rockets/fetch', async () => {
  const response = await fetch(`${API_BASE_URL}/rockets`);
  const result = await response.json();

  return result;
});

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },
  reducers: {
    bookRocket: (state, action) => ({
      ...state,
      list: state.list.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: true,
          };
        }

        return rocket;
      }),
    }),
    unbookRocket: (state, action) => ({
      ...state,
      list: state.list.map((rocket) => {
        if (rocket.id === action.payload) {
          return {
            ...rocket,
            reserved: false,
          };
        }

        return rocket;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRocketsThunk.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetchRocketsThunk.fulfilled, (state, action) => (
      {
        ...state,
        loading: false,
        list: action.payload.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          flickrImages: rocket.flickr_images,
          wikipedia: rocket.wikipedia,
          reserved: false,
        })),
      }));
    builder.addCase(fetchRocketsThunk.rejected, (state, action) => (
      { ...state, loading: false, error: action.payload }
    ));
  },
});

export default rocketsSlice.reducer;
export const { bookRocket, unbookRocket } = rocketsSlice.actions;
