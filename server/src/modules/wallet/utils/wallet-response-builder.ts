// shared
import { IGetAllResponse, IGetOneResponse } from 'shared/types/responses';

// "wallet" module
import { IWalletResponse } from 'modules/wallet/types';
import { WalletEntity } from 'modules/wallet/wallet.entity';
import { entityToResponse } from './entity-to-response';

// ==============================|| WALLET RESPONSE BUILDER ||============================== //

export class WalletResponseBuilder {
  //
  // GET ALL
  //
  static buildGetAllResponse(
    entities: WalletEntity[],
  ): IGetAllResponse<IWalletResponse> {
    // <-- Body -->

    // convert to the required format
    const wallets: IWalletResponse[] = entities.map(entityToResponse);

    // result
    return {
      success: true,
      message: '',
      values: wallets,
    };
  }

  //
  // GET ONE
  //
  static buildGetOneResponse(
    entity: WalletEntity,
  ): IGetOneResponse<IWalletResponse> {
    // <-- Body -->

    // convert to the required format
    const wallet = entityToResponse(entity);

    // result
    return {
      success: true,
      message: '',
      value: wallet,
    };
  }
}
