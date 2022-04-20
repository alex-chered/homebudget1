// redux
import { createSelector } from '@reduxjs/toolkit';

// store
import { AppState } from 'store';

// ==============================|| WALLET -> SELECTORS ||============================== //

const walletsSelector = createSelector(
  (state: AppState) => state.sections.wallet.data,
  (wallets) => ({ wallets }),
);

const currentWalletSelector = createSelector(
  (state: AppState) => state.sections.wallet.current,
  (currentWallet) => ({ currentWallet }),
);

const loadingSelector = createSelector(
  (state: AppState) => state.sections.wallet.loading,
  (loading) => ({ loading }),
);

const errorTextSelector = createSelector(
  (state: AppState) => state.sections.wallet.errorText,
  (errorText) => ({ errorText }),
);

// Combine all selectors
export const walletSelectors = {
  walletsSelector,
  currentWalletSelector,
  loadingSelector,
  errorTextSelector,
};
