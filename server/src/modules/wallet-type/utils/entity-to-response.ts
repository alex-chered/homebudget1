// "wallet" module
import { WalletTypeEntity } from 'modules/wallet-type/wallet-type.entity';
import { IWalletTypeResponse } from 'modules/wallet-type/types';

// ==============================|| ENTITY TO RESPONSE ||============================== //

export const entityToResponse = (
  entity: WalletTypeEntity,
): IWalletTypeResponse => {
  // <!-- Body --!>
  return {
    id: entity.id,
    name: entity.name,
  };
};
