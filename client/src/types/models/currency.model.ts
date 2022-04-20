// types
import { BaseModel } from './base.model';

// ==============================|| CURRENCY -> MODEL ||============================== //

export class CurrencyModel extends BaseModel {
  private _fullName = '';

  //
  // CONSTRUCTOR
  //
  constructor();

  constructor(name: string);

  constructor(name: string, fullName: string);

  constructor(name?: string, fullName?: string) {
    super(name || '');
    if (fullName) {
      this.fullName = fullName;
    }
  }

  //
  // FULL NAME (GETTER, SETTER)
  //
  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  //
  // TO DTO
  //
  toDto(): object {
    return {
      ...super.toDto(),
      fullName: this.fullName,
    };
  }
}
