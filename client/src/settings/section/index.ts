import { TSectionIndex } from 'store';

// ==============================|| SECTION OPTIONS ||============================== //

export interface ISectionOptions {
  name: TSectionIndex;
  url: string;
}

// ==============================|| OPTIONS ||============================== //

export const currencyOptions: ISectionOptions = {
  name: 'currency',
  url: 'currencies',
};

export const walletTypeOptions: ISectionOptions = {
  name: 'walletType',
  url: 'wallet_types',
};

export const walletOptions: ISectionOptions = {
  name: 'wallet',
  url: 'wallets',
};
