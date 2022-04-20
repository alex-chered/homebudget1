import { IsEmail, IsNotEmpty } from 'class-validator';

// DTO
export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
