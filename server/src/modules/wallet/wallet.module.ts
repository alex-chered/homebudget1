import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// "wallet" module
import { WalletController } from './wallet.controller';
import { WalletEntity } from './wallet.entity';
import { WalletService } from './wallet.service';

// "currency" module
import { CurrencyModule } from 'modules/currency/currency.module';

// "wallet-type" module
import { WalletTypeModule } from 'modules/wallet-type/wallet-type.module';

// ==============================|| WALLET -> MODULE ||============================== //

@Module({
  imports: [
    TypeOrmModule.forFeature([WalletEntity]),
    WalletTypeModule,
    CurrencyModule,
  ],
  controllers: [WalletController],
  providers: [WalletService],
  exports: [WalletService],
})
export class WalletModule {}
