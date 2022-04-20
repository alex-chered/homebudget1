// shared
import { IItemBaseResponse } from 'shared/types/responses';

// "currency" module
import { ICurrencyResponse } from 'modules/currency/types';

// "wallet-type" module
import { IWalletTypeResponse } from 'modules/wallet-type/types';

// ==============================|| WALLET -> RESPONSE ||============================== //

export interface IWalletResponse extends IItemBaseResponse {
  comment: string;
  currency: ICurrencyResponse;
  walletType: IWalletTypeResponse;
}
