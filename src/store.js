import { configureStore } from '@reduxjs/toolkit';

import logReducer from './reducers/logReducer';
import techReducer from './reducers/techReducer';

const store = configureStore({
  reducer: {
    // Define a top-level state field name 'log' handled by 'logReducer'
    log: logReducer,
    tech: techReducer,
  },
});

export default store;
