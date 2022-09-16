import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITech {
  id: number,
  firstName: string,
  lastName: string,
}

export interface ITechState {
  techs: ITech[],
  loading: boolean,
  error: string
}

const initialState: ITechState= {
  techs: [],
  loading: false,
  error: '',
};

const techSlice = createSlice({
  name: 'tech',
  initialState,
  reducers: {
    techGet(state, action: PayloadAction<ITech[]>) {
      state.techs = action.payload;
      state.loading = false;
    },
    techAdd(state, action: PayloadAction<ITech>) {
      state.techs = [...state.techs, action.payload];
      state.loading = false;
    },
    techDelete(state, action: PayloadAction<number>) {
      state.techs = state.techs.filter((tech) => tech.id !== action.payload);
      state.loading = false;
    },
    techError(state, action: PayloadAction<string>) {
      console.error(action.payload);
      state.error = action.payload;
    },
    techLoading(state) {
      state.loading = true;
    },
  },
});

export const { techGet, techAdd, techDelete, techError, techLoading } =
  techSlice.actions;

export default techSlice.reducer;
