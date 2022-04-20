// "wallet" module
import { IWalletResponse } from 'modules/wallet/types';
import { WalletEntity } from 'modules/wallet/wallet.entity';

// "wallet-type" module
import { entityToResponse as entityToResponseWalletType } from 'modules/wallet-type/utils';

// "currency" module
import { entityToResponse as entityToResponseCurrency } from 'modules/currency/utils';

// ==============================|| ENTITY TO RESPONSE ||============================== //

export const entityToResponse = (entity: WalletEntity): IWalletResponse => {
  return {
    id: entity.id,
    name: entity.name,
    comment: entity.comment,
    currency: entityToResponseCurrency(entity.currency),
    walletType: entityToResponseWalletType(entity.walletType),
  };
};
