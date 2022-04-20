// types
import { WalletTypeModel } from 'types/models';

// ============================|| GET ALL WALLET TYPES -> RESPONSE ||============================ //

export interface IGetAllWalletTypesResponse {
  success: boolean;
  message: string;
  walletTypes: WalletTypeModel[];
}

// ============================|| GET ONE WALLET TYPE -> RESPONSE ||============================ //

export interface IGetOneWalletTypeResponse {
  success: boolean;
  message: string;
  walletType: WalletTypeModel;
}
