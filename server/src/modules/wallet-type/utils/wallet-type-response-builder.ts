// "wallet-type" module
import { WalletTypeEntity } from 'modules/wallet-type/wallet-type.entity';
import { IWalletTypeResponse } from 'modules/wallet-type/types';

// shared
import { IGetAllResponse, IGetOneResponse } from 'shared/types/responses';

// ==============================|| WALLET TYPE RESPONSE BUILDER ||============================== //

export class WalletTypeResponseBuilder {
  //
  // GET ALL
  //
  static buildGetAllResponse(
    entities: WalletTypeEntity[],
  ): IGetAllResponse<IWalletTypeResponse> {
    // <-- Body -->

    // convert to the required format
    const walletTypes: IWalletTypeResponse[] = entities.map((item) => ({
      id: item.id,
      name: item.name,
    }));

    //
    return {
      success: true,
      message: '',
      values: walletTypes,
    };
  }

  //
  // GET ONE
  //
  static buildGetOneResponse(
    entity: WalletTypeEntity,
  ): IGetOneResponse<IWalletTypeResponse> {
    // <-- Body -->

    const walletType: IWalletTypeResponse = {
      id: entity.id,
      name: entity.name,
    };

    return {
      success: true,
      message: '',
      value: walletType,
    };
  }
}
