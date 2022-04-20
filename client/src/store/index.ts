// redux
import { configureStore } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';

// reducer
import { rootReducer } from './root-reducer';

// Create store
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the 'AppState' and 'AppDispatch' types from the store itself
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const stateSections = store.getState().sections;
export type TSectionIndex = keyof typeof stateSections;

// Create typed hooks instead of plain 'useDispatch' and 'useSelector'
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
