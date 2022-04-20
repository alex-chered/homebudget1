// redux
import { createSelector } from '@reduxjs/toolkit';

// store
import { AppState } from 'store';

// ==============================|| SELECTORS ||============================== //

export const dataSelector = createSelector(
  (state: AppState) => state.toasts.toasts,
  (toasts) => ({ toasts }),
);
