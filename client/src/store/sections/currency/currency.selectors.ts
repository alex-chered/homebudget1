// redux
import { createSelector } from '@reduxjs/toolkit';

// store
import { AppState } from 'store';

// ==============================|| CURRENCY -> SELECTORS ||============================== //

const dataSelector = createSelector(
  (state: AppState) => state.sections.currency.data,
  (data) => ({ data }),
);

const filteredSelector = createSelector(
  (state: AppState) => state.sections.currency.filtered,
  (filtered) => ({ filtered }),
);

const currentSelector = createSelector(
  (state: AppState) => state.sections.currency.current,
  (current) => ({ current }),
);

const loadingSelector = createSelector(
  (state: AppState) => state.sections.currency.loading,
  (loading) => ({ loading }),
);

const errorTextSelector = createSelector(
  (state: AppState) => state.sections.currency.errorText,
  (errorText) => ({ errorText }),
);

// Combine all selectors
export const currencySelectors = {
  dataSelector,
  filteredSelector,
  currentSelector,
  loadingSelector,
  errorTextSelector,
};
