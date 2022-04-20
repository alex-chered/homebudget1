// redux
import { createSelector } from '@reduxjs/toolkit';

// store
import { AppState } from 'store';

// ==============================|| AUTH SELECTORS ||============================== //

const userSelector = createSelector(
  (state: AppState) => state.auth.user,
  (user) => ({ user }),
);

const userCountSelector = createSelector(
  (state: AppState) => state.auth.count,
  (count) => ({ count }),
);

const loadingSelector = createSelector(
  (state: AppState) => state.auth.loading,
  (loading) => ({ loading }),
);

const errorTextSelector = createSelector(
  (state: AppState) => state.auth.errorText,
  (errorText) => ({ errorText }),
);

// Combine all selectors
export const authSelectors = {
  userSelector,
  userCountSelector,
  loadingSelector,
  errorTextSelector,
};
