import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// "currency" module
import { CurrencyController } from './currency.controller';
import { CurrencyEntity } from './currency.entity';
import { CurrencyService } from './currency.service';

// ==============================|| CURRENCY -> MODULE ||============================== //

@Module({
  imports: [TypeOrmModule.forFeature([CurrencyEntity])],
  controllers: [CurrencyController],
  providers: [CurrencyService],
  exports: [CurrencyService],
})
export class CurrencyModule {}
