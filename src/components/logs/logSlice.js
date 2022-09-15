import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    logGet(state, action) {
      state.logs = action.payload;
      state.loading = false;
    },
    logAdd(state, action) {
      state.logs = [...state.logs, action.payload];
      state.loading = false;
    },
    logDelete(state, action) {
      state.logs = state.logs.filter((log) => log.id !== action.payload);
      state.loading = false;
    },
    logUpdate(state, action) {
      state.logs = state.logs.map((log) =>
        log.id === action.payload.id ? action.payload : log
      );
      state.loading = false;
    },
    logSearch(state, action) {
      state.logs = action.payload;
      state.loading = false;
    },
    logSetCurrent(state, action) {
      state.current = action.payload;
    },
    logClearCurrent(state, action) {
      state.current = null;
    },
    logSetLoading(state, action) {
      state.loading = true;
    },
    logError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  logGet,
  logAdd,
  logDelete,
  logUpdate,
  logSearch,
  logSetCurrent,
  logClearCurrent,
  logSetLoading,
  logError,
} = logSlice.actions;

export default logSlice.reducer;
