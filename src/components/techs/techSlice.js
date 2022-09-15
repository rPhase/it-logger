import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

const techSlice = createSlice({
  name: 'tech',
  initialState,
  reducers: {
    techGet(state, action) {
      state.techs = action.payload;
      state.loading = false;
    },
    techAdd(state, action) {
      state.techs = [...state.techs, action.payload];
      state.loading = false;
    },
    techDelete(state, action) {
      state.techs = state.techs.filter((tech) => tech.id !== action.payload);
      state.loading = false;
    },
    techError(state, action) {
      console.error(action.payload);
      state.error = action.payload;
    },
    techLoading(state, action) {
      state.loading = true;
    },
  },
});

export const { techGet, techAdd, techDelete, techError, techLoading } =
  techSlice.actions;

export default techSlice.reducer;
