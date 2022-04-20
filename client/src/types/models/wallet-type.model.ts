// types
import { BaseModel } from './base.model';

// ==============================|| WALLET TYPE -> MODEL ||============================== //

export class WalletTypeModel extends BaseModel {
  //
  // CONSTRUCTOR
  //
  constructor();

  constructor(name: string);

  constructor(name?: string) {
    super(name || '');
  }
}
