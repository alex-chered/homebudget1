// settings
import { walletOptions } from 'settings/section';

// store
import {
  generateGetAllAction,
  generateGetOneAction,
  generateCreateAction,
  generateUpdateAction,
  generateClearFilteredAction,
  generateClearCurrentAction,
  generateClearDataAction,
} from 'store/utils/generate-action';

// types
import { WalletModel } from 'types/models';

// ==============================|| GET ALL WALLETS -> ACTION ||============================== //

export const getAllAction = generateGetAllAction<WalletModel>(walletOptions);

// ==============================|| GET ONE WALLET -> ACTION ||============================== //

export const getOneAction = generateGetOneAction<WalletModel>(walletOptions);

// ==============================|| CREATE WALLET -> ACTION ||============================== //

export const createAction = generateCreateAction<WalletModel>(walletOptions);

// ==============================|| UPDATE WALLET -> ACTION ||============================== //

export const updateAction = generateUpdateAction<WalletModel>(walletOptions);

// ==============================|| CLEAR FILTERED -> ACTION ||============================== //

export const clearFilteredAction = generateClearFilteredAction(walletOptions);

// ==============================|| CLEAR CURRENT -> ACTION ||============================== //

export const clearCurrentAction = generateClearCurrentAction(walletOptions);

// ==============================|| CLEAR DATA -> ACTION ||============================== //

export const clearDataAction = generateClearDataAction(walletOptions);
