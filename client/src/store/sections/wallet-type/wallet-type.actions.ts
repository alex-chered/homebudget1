// settings
import { walletTypeOptions } from 'settings/section';

// store
import {
  generateGetAllAction,
  generateGetWithFilterAction,
  generateGetOneAction,
  generateCreateAction,
  generateUpdateAction,
  generateClearFilteredAction,
  generateClearCurrentAction,
  generateClearDataAction,
} from 'store/utils/generate-action';

// types
import { WalletTypeModel } from 'types/models';

// =============================|| GET ALL WALLET TYPES -> ACTION ||============================= //

export const getAllAction = generateGetAllAction<WalletTypeModel>(walletTypeOptions);

// =============================|| GET ONE WALLET TYPE -> ACTION ||============================= //

export const getOneAction = generateGetOneAction<WalletTypeModel>(walletTypeOptions);

// =========================|| GET WALLET TYPES WITH FILTER -> ACTION ||========================= //

export const getWithFilterAction = generateGetWithFilterAction<WalletTypeModel>(walletTypeOptions);

// =============================|| CREATE WALLET TYPES -> ACTION ||============================= //

export const createAction = generateCreateAction<WalletTypeModel>(walletTypeOptions);

// =============================|| UPDATE WALLET TYPES -> ACTION ||============================= //

export const updateAction = generateUpdateAction<WalletTypeModel>(walletTypeOptions);

// ==============================|| CLEAR FILTERED -> ACTION ||============================== //

export const clearFilteredAction = generateClearFilteredAction(walletTypeOptions);

// ==============================|| CLEAR CURRENT -> ACTION ||============================== //

export const clearCurrentAction = generateClearCurrentAction(walletTypeOptions);

// ==============================|| CLEAR DATA -> ACTION ||============================== //

export const clearDataAction = generateClearDataAction(walletTypeOptions);
