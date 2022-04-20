// 3rd-party
import { IsNotEmpty } from 'class-validator';

// ==============================|| UPDATE WALLET TYPE -> DTO ||============================== //

export class BaseWalletTypeDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;
}
