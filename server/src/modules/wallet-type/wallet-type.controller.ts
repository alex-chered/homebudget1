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
  Query,
} from '@nestjs/common';

// shared
import { HttpExceptionFilter } from 'shared/exception-filters';
import { AuthGuard } from 'shared/guards/auth.guard';
import { AdminGuard } from 'shared/guards/admin.guard';
import { IGetAllResponse, IGetOneResponse } from 'shared/types/responses';
import { CustomValidationPipe } from 'shared/pipes';

// "wallet-type" module
import { WalletTypeService } from './wallet-type.service';
import { IWalletTypeResponse } from './types';
import { WalletTypeResponseBuilder } from './utils';
import { CreateWalletTypeDto, BaseWalletTypeDto } from './dto';

// ==============================|| WALLET TYPE -> CONTROLLER ||============================== //

@Controller('wallet_types')
@UseFilters(HttpExceptionFilter)
export class WalletTypeController {
  constructor(private readonly service: WalletTypeService) {}

  //
  // GET
  //
  @Get()
  @UseGuards(AuthGuard)
  async getAll(
    @Query('name') name?: string,
  ): Promise<IGetAllResponse<IWalletTypeResponse>> {
    // <-- Endpoint Body -->
    const data = await this.service.getAll(name);
    return WalletTypeResponseBuilder.buildGetAllResponse(data);
  }

  //
  // GET By ID
  //
  @Get(':id')
  @UseGuards(AuthGuard)
  async getOne(
    @Param('id') id: number,
  ): Promise<IGetOneResponse<IWalletTypeResponse>> {
    // <-- Endpoint Body -->
    const element = await this.service.getOne(id);
    return WalletTypeResponseBuilder.buildGetOneResponse(element);
  }

  //
  // POST
  //
  @Post()
  @HttpCode(201)
  @UseGuards(AdminGuard)
  @UsePipes(CustomValidationPipe)
  async create(
    @Body() dto: CreateWalletTypeDto,
  ): Promise<IGetOneResponse<IWalletTypeResponse>> {
    // <-- Endpoint Body -->
    const newElement = await this.service.create(dto);
    return WalletTypeResponseBuilder.buildGetOneResponse(newElement);
  }

  //
  // PUT
  //
  @Put()
  @UseGuards(AdminGuard)
  @UsePipes(CustomValidationPipe)
  async update(
    @Body() dto: BaseWalletTypeDto,
  ): Promise<IGetOneResponse<IWalletTypeResponse>> {
    // <-- Endpoint Body -->
    const element = await this.service.update(dto);
    return WalletTypeResponseBuilder.buildGetOneResponse(element);
  }
}
