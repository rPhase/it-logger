import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ILog {
  id: number,
  message: string,
  tech: string,
  attention: boolean,
  date: string,
}

export interface ILogState {
  logs: ILog[],
  current: ILog | null,
  loading: boolean,
  error: string,
}


const initialState: ILogState = {
  logs: [],
  current: null,
  loading: false,
  error: '',
};

const logSlice = createSlice({
  name: 'log',
  initialState,
  reducers: {
    logGet(state, action: PayloadAction<ILog[]>) {
      state.logs = action.payload;
      state.loading = false;
    },
    logAdd(state, action: PayloadAction<ILog>) {
      state.logs = [...state.logs, action.payload];
      state.loading = false;
    },
    logDelete(state, action: PayloadAction<number>) {
      state.logs = state.logs.filter((log) => log.id !== action.payload);
      state.loading = false;
    },
    logUpdate(state, action: PayloadAction<ILog>) {
      state.logs = state.logs.map((log) =>
        log.id === action.payload.id ? action.payload : log
      );
      state.loading = false;
    },
    logSearch(state, action: PayloadAction<ILog[]>) {
      state.logs = action.payload;
      state.loading = false;
    },
    logSetCurrent(state, action: PayloadAction<ILog>) {
      state.current = action.payload;
    },
    logClearCurrent(state) {
      state.current = null;
    },
    logSetLoading(state) {
      state.loading = true;
    },
    logError(state, action: PayloadAction<string>) {
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
