// settings
import { currencyOptions } from 'settings/section';

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
import { CurrencyModel } from 'types/models';

// ==============================|| GET ALL CURRENCIES -> ACTION ||============================== //

export const getAllAction = generateGetAllAction<CurrencyModel>(currencyOptions);

// ==============================|| GET ONE CURRENCY -> ACTION ||============================== //

export const getOneAction = generateGetOneAction<CurrencyModel>(currencyOptions);

// ==========================|| GET CURRENCIES WITH FILTER -> ACTION ||========================== //

export const getWithFilterAction = generateGetWithFilterAction<CurrencyModel>(currencyOptions);

// ==============================|| CREATE CURRENCY -> ACTION ||============================== //

export const createAction = generateCreateAction<CurrencyModel>(currencyOptions);

// ==============================|| UPDATE CURRENCY -> ACTION ||============================== //

export const updateAction = generateUpdateAction<CurrencyModel>(currencyOptions);

// ==============================|| CLEAR FILTERED -> ACTION ||============================== //

export const clearFilteredAction = generateClearFilteredAction(currencyOptions);

// ==============================|| CLEAR CURRENT -> ACTION ||============================== //

export const clearCurrentAction = generateClearCurrentAction(currencyOptions);

// ==============================|| CLEAR DATA -> ACTION ||============================== //

export const clearDataAction = generateClearDataAction(currencyOptions);
