import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';

// shared
import { CustomValidationPipe } from 'shared/pipes';
import { HttpExceptionFilter } from 'shared/exception-filters';
import { AuthGuard } from 'shared/guards/auth.guard';
import { UserDecorator } from 'shared/decorators/user.decorator';

// aux.
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { RegisterUserDto, LoginUserDto } from './dto';
import { UserResponseBuilder } from './utils';
import {
  IRegisterResponse,
  ILoginResponse,
  IGetUserResponse,
  IGetUserCountResponse,
} from './types';

// ==============================|| USER -> CONTROLLER ||============================== //

@Controller()
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  //
  // REGISTER
  //
  @Post('register')
  @UsePipes(new CustomValidationPipe())
  async registerUser(
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<IRegisterResponse> {
    // <-- Endpoint Body -->
    const newUser = await this.userService.registerUser(registerUserDto);
    return UserResponseBuilder.buildRegisterResponse(newUser);
  }

  //
  // LOGIN
  //
  @Post('login')
  @UsePipes(new CustomValidationPipe())
  async loginUser(@Body() loginUserDto: LoginUserDto): Promise<ILoginResponse> {
    // <-- Endpoint Body -->
    // throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
    const newUser = await this.userService.loginUser(loginUserDto);
    return UserResponseBuilder.buildLoginResponse(newUser);
  }

  //
  // GET USER
  //
  @Get('user')
  @UseGuards(AuthGuard)
  async getUser(@UserDecorator() user: UserEntity): Promise<IGetUserResponse> {
    return UserResponseBuilder.buildGetUserResponse(user);
  }

  //
  // COUNT
  //
  @Get('count')
  async getUserCount(): Promise<IGetUserCountResponse> {
    // <-- Endpoint Body -->
    const count = await this.userService.getUserCount();
    return UserResponseBuilder.buildGetUserCountResponse(count);
  }
}
