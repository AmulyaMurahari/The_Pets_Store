import { configureStore } from '@reduxjs/toolkit';
import petReducer from './redux/reducers/petReducer';
import thunk from 'redux-thunk';

// Configuration of the Redux store
export const store = configureStore({
  reducer: {
    pet: petReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Type definitions for RootState and AppDispatch for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
