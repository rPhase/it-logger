import { configureStore } from '@reduxjs/toolkit';
import techReducer from './components/techs/techSlice';
import logReducer from './components/logs/logSlice';

const store = configureStore({
  reducer: {
    log: logReducer,
    tech: techReducer,
  },
});

export default store;
