// 3rd-party
import { IsNotEmpty } from 'class-validator';

// ==============================|| CREATE WALLET -> DTO ||============================== //

export class CreateWalletDto {
  @IsNotEmpty()
  name: string;

  comment: string;

  @IsNotEmpty()
  walletTypeId: number;

  @IsNotEmpty()
  currencyId: number;
}
