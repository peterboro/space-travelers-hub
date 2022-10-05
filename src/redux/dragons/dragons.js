import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_BASE_URL = 'https://api.spacexdata.com/v3/dragons';

export const fetchDragons = createAsyncThunk('dragons/fetch', async () => {
  const response = await fetch(API_BASE_URL);
  const result = await response.json();
  return result;
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    loading: false,
    list: [],
    error: '',
  },

  reducers: {
    bookDragon: (state, action) => ({
      ...state,
      list: state.list.map((dragon) => {
        if (dragon.id === action.payload) {
          return {
            ...dragon,
            reserved: true,
          };
        }
        return dragon;
      }),
    }),
    unbookDragon: (state, action) => ({
      ...state,
      list: state.list.map((dragon) => {
        if (dragon.id === action.payload) {
          return {
            ...dragon,
            reserved: false,
          };
        }
        return dragon;
      }),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.pending, (state) => ({ ...state, loading: true }));
    builder.addCase(fetchDragons.fulfilled, (state, action) => ({
      ...state,
      list: action.payload.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        img: dragon.flickr_images[0],
        wikipedia: dragon.wikipedia,
        reserved: false,
      })),
    }));
    builder.addCase(fetchDragons.rejected, (state, action) => ({
      ...state, loading: false, error: action.payload,
    }));
  },
});

export default dragonsSlice.reducer;
export const { bookDragon, unbookDragon } = dragonsSlice.actions;
