// redux
import { createSelector } from '@reduxjs/toolkit';

// store
import { AppState } from 'store';

// ==============================|| WALLET TYPE -> SELECTORS ||============================== //

const walletTypesSelector = createSelector(
  (state: AppState) => state.sections.walletType.data,
  (walletTypes) => ({ walletTypes }),
);

const filteredWalletTypesSelector = createSelector(
  (state: AppState) => state.sections.walletType.filtered,
  (filteredWalletTypes) => ({ filteredWalletTypes }),
);

const currentWalletTypeSelector = createSelector(
  (state: AppState) => state.sections.walletType.current,
  (currentWalletType) => ({ currentWalletType }),
);

const loadingSelector = createSelector(
  (state: AppState) => state.sections.walletType.loading,
  (loading) => ({ loading }),
);

const errorTextSelector = createSelector(
  (state: AppState) => state.sections.walletType.errorText,
  (errorText) => ({ errorText }),
);

// Combine all selectors
export const walletTypeSelectors = {
  walletTypesSelector,
  filteredWalletTypesSelector,
  currentWalletTypeSelector,
  loadingSelector,
  errorTextSelector,
};
