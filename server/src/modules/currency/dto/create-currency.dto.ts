// 3rd-party
import { IsNotEmpty } from 'class-validator';

// ==============================|| CREATE CURRENCY -> DTO ||============================== //

export class CreateCurrencyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  fullName: string;
}
