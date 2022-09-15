import { configureStore } from '@reduxjs/toolkit';
import techReducer from './components/techs/techSlice';
import logReducer from './components/logs/logSlice';

const store = configureStore({
  reducer: {
    log: logReducer,
    tech: techReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

