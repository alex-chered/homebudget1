// 3rd-party
import { IsNotEmpty } from 'class-validator';

// ==============================|| UPDATE CURRENCY -> DTO ||============================== //

export class UpdateCurrencyDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  fullName: string;
}
