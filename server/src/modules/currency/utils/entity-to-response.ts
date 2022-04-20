// "wallet" module
import { ICurrencyResponse } from 'modules/currency/types';
import { CurrencyEntity } from 'modules/currency/currency.entity';

// ==============================|| ENTITY TO RESPONSE ||============================== //

export const entityToResponse = (entity: CurrencyEntity): ICurrencyResponse => {
  // <!-- Body --!>
  return {
    id: entity.id,
    name: entity.name,
    fullName: entity.fullName,
  };
};
