import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
  UseGuards,
  UsePipes,
} from '@nestjs/common';

// shared
import { HttpExceptionFilter } from 'shared/exception-filters';
import { AuthGuard } from 'shared/guards/auth.guard';
import { AdminGuard } from 'shared/guards/admin.guard';
import { IGetAllResponse, IGetOneResponse } from 'shared/types/responses';
import { CustomValidationPipe } from 'shared/pipes';

// "currency" module
import { CurrencyService } from './currency.service';
import { CurrencyResponseBuilder } from './utils';
import { ICurrencyResponse } from './types';
import { CreateCurrencyDto, UpdateCurrencyDto } from './dto';

// ==============================|| CURRENCY -> CONTROLLER ||============================== //

@Controller('currencies')
@UseFilters(HttpExceptionFilter)
export class CurrencyController {
  //
  // CONSTRUCTOR
  //
  constructor(private readonly currencyService: CurrencyService) {}

  //
  // GET ALL
  //
  @Get()
  // @UseGuards(AuthGuard)
  async getAll(
    @Query('name') name?: string,
  ): Promise<IGetAllResponse<ICurrencyResponse>> {
    // <-- Endpoint Body -->
    const data = await this.currencyService.getAll(name);
    return CurrencyResponseBuilder.buildGetAllResponse(data);
  }

  //
  // GET ONE
  //
  @Get(':id')
  @UseGuards(AuthGuard)
  async getCurrency(
    @Param('id') id: number,
  ): Promise<IGetOneResponse<ICurrencyResponse>> {
    // <-- Endpoint Body -->
    const currency = await this.currencyService.getOne(id);
    return CurrencyResponseBuilder.buildGetOneResponse(currency);
  }

  //
  // POST
  //
  @Post()
  @HttpCode(201)
  @UseGuards(AdminGuard)
  @UsePipes(CustomValidationPipe)
  async create(
    @Body() createCurrencyDto: CreateCurrencyDto,
  ): Promise<IGetOneResponse<ICurrencyResponse>> {
    // <-- Endpoint Body -->
    const newCurrency = await this.currencyService.create(createCurrencyDto);
    return CurrencyResponseBuilder.buildGetOneResponse(newCurrency);
  }

  //
  // PUT
  //
  @Put()
  @UseGuards(AdminGuard)
  @UsePipes(CustomValidationPipe)
  async update(
    @Body() updateCurrencyDto: UpdateCurrencyDto,
  ): Promise<IGetOneResponse<ICurrencyResponse>> {
    // <-- Endpoint Body -->
    const currency = await this.currencyService.update(updateCurrencyDto);
    return CurrencyResponseBuilder.buildGetOneResponse(currency);
  }
}
