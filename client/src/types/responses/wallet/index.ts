// types
import { WalletModel } from 'types/models';

// ==============================|| GET ALL WALLETS -> RESPONSE ||============================== //

export interface IGetAllWalletsResponse {
  success: boolean;
  message: string;
  wallets: WalletModel[];
}

// ==============================|| GET ONE WALLET -> RESPONSE ||============================== //

export interface IGetOneWalletResponse {
  success: boolean;
  message: string;
  wallet: WalletModel;
}
