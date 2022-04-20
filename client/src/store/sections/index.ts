// redux
import { combineReducers } from '@reduxjs/toolkit';

// reducer
import { currencyReducer } from './currency';
import { walletTypeReducer } from './wallet-type';
import { walletReducer } from './wallet';

// ==============================|| SECTIONS REDUCER ||============================== //

export const sectionsReducer = combineReducers({
  currency: currencyReducer,
  walletType: walletTypeReducer,
  wallet: walletReducer,
});
