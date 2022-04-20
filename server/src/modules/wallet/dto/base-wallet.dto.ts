// 3rd-party
import { IsNotEmpty } from 'class-validator';

// ==============================|| BASE WALLET -> DTO ||============================== //

export class BaseWalletDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  comment: string;

  @IsNotEmpty()
  walletTypeId: number;

  @IsNotEmpty()
  currencyId: number;
}
