// 3rd-party
import { IsNotEmpty } from 'class-validator';

// ==============================|| CREATE WALLET TYPE -> DTO ||============================== //

export class CreateWalletTypeDto {
  @IsNotEmpty()
  name: string;
}
