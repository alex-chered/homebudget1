// types
import { CurrencyModel } from 'types/models';

// ==============================|| GET CURRENCIES RESPONSE ||============================== //

export interface IGetCurrenciesResponse {
  success: boolean;
  message: string;
  currencies: CurrencyModel[];
}

// ==============================|| GET CURRENCY RESPONSE ||============================== //

export interface IGetCurrencyResponse {
  success: boolean;
  message: string;
  currency: CurrencyModel;
}

// ==============================|| GET CURRENCIES RESPONSE ||============================== //

export interface ICreateCurrencyResponse {
  success: boolean;
  message: string;
  currency: CurrencyModel;
}
