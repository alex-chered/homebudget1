import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';

// shared
import { CustomValidationPipe } from 'shared/pipes';
import { HttpExceptionFilter } from 'shared/exception-filters';
import { AuthGuard } from 'shared/guards/auth.guard';
import { UserDecorator } from 'shared/decorators/user.decorator';
import { IGetAllResponse, IGetOneResponse } from 'shared/types/responses';

// "user" module
import { UserEntity } from 'user/user.entity';

// "wallet" module
import { WalletService } from './wallet.service';
import { WalletResponseBuilder } from './utils';
import { CreateWalletDto, BaseWalletDto } from './dto';
import { IWalletResponse } from './types';

// ==============================|| WALLET -> CONTROLLER ||============================== //

@Controller('wallets')
@UseFilters(HttpExceptionFilter)
export class WalletController {
  //
  // CONSTRUCTOR
  //
  constructor(private readonly walletService: WalletService) {}

  //
  // GET ALL
  //
  @Get()
  @UseGuards(AuthGuard)
  async getAll(
    @UserDecorator() user: UserEntity,
  ): Promise<IGetAllResponse<IWalletResponse>> {
    // <!-- Body --!>
    const wallets = await this.walletService.getAll(user.id);
    return WalletResponseBuilder.buildGetAllResponse(wallets);
  }

  //
  // GET ONE
  //
  @Get(':id')
  @UseGuards(AuthGuard)
  async getOne(
    @Param('id') id: number,
    @UserDecorator() user: UserEntity,
  ): Promise<IGetOneResponse<IWalletResponse>> {
    // <!-- Body --!>
    const wallet = await this.walletService.getOne(id, user.id);
    return WalletResponseBuilder.buildGetOneResponse(wallet);
  }

  //
  // CREATE
  //
  @Post()
  @HttpCode(201)
  @UseGuards(AuthGuard)
  @UsePipes(CustomValidationPipe)
  async create(
    @Body() dto: CreateWalletDto,
    @UserDecorator() user: UserEntity,
  ): Promise<IGetOneResponse<IWalletResponse>> {
    // <!-- Body --!>
    const wallet = await this.walletService.create(dto, user);
    return WalletResponseBuilder.buildGetOneResponse(wallet);
  }

  //
  // UPDATE
  //
  @Put()
  @UseGuards(AuthGuard)
  @UsePipes(CustomValidationPipe)
  async update(
    @Body() dto: BaseWalletDto,
    @UserDecorator() user: UserEntity,
  ): Promise<IGetOneResponse<IWalletResponse>> {
    // <!-- Body --!>
    const wallet = await this.walletService.update(dto, user);
    return WalletResponseBuilder.buildGetOneResponse(wallet);
  }
}
