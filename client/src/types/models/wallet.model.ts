// types
import { BaseModel } from './base.model';
import { WalletTypeModel } from './wallet-type.model';
import { CurrencyModel } from './currency.model';

// ==============================|| WALLET -> MODEL ||============================== //

export class WalletModel extends BaseModel {
  private _comment = '';

  private _currency = new CurrencyModel();

  private _walletType = new WalletTypeModel();

  //
  // CONSTRUCTOR
  //
  constructor();

  constructor(name: string);

  constructor(name: string, currency: CurrencyModel, walletType: WalletTypeModel);

  constructor(name: string, currency: CurrencyModel, walletType: WalletTypeModel, comment: string);

  constructor(
    name?: string,
    currency?: CurrencyModel,
    walletType?: WalletTypeModel,
    comment?: string,
  ) {
    // <!-- Body --!>
    super(name || '');

    if (currency) {
      this.currency = currency;
    }

    if (walletType) {
      this.walletType = walletType;
    }

    if (comment) {
      this.comment = comment;
    }
  }

  //
  // CURRENCY (GETTER, SETTER)
  //
  get currency(): CurrencyModel {
    return this._currency;
  }

  set currency(value: CurrencyModel) {
    this._currency = value;
  }

  //
  // WALLET TYPE (GETTER, SETTER)
  //
  get walletType(): WalletTypeModel {
    return this._walletType;
  }

  set walletType(value: WalletTypeModel) {
    this._walletType = value;
  }

  //
  // COMMENT (GETTER, SETTER)
  //
  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  //
  // TO DTO
  //
  toDto(): object {
    return {
      ...super.toDto(),
      comment: this.comment,
      currencyId: this.currency.id,
      walletTypeId: this.walletType.id,
    };
  }
}
