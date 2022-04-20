// "currency" module
import { ICurrencyResponse } from 'modules/currency/types';
import { CurrencyEntity } from 'modules/currency/currency.entity';

// shared
import { IGetAllResponse, IGetOneResponse } from 'shared/types/responses';

// ==============================|| CURRENCY RESPONSE BUILDER ||============================== //

export class CurrencyResponseBuilder {
  //
  // GET ALL
  //
  static buildGetAllResponse(
    currencyEntities: CurrencyEntity[],
  ): IGetAllResponse<ICurrencyResponse> {
    // <-- Body -->

    // convert to the required format
    const currencies: ICurrencyResponse[] = currencyEntities.map((item) => ({
      id: item.id,
      name: item.name,
      fullName: item.fullName,
    }));

    //
    return {
      success: true,
      message: '',
      values: currencies,
    };
  }

  //
  // GET ONE
  //
  static buildGetOneResponse(
    currencyEntity: CurrencyEntity,
  ): IGetOneResponse<ICurrencyResponse> {
    // <-- Body -->

    const currency: ICurrencyResponse = {
      id: currencyEntity.id,
      name: currencyEntity.name,
      fullName: currencyEntity.fullName,
    };

    return {
      success: true,
      message: '',
      value: currency,
    };
  }
}
