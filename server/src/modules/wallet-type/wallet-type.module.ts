import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// aux.
import { WalletTypeController } from './wallet-type.controller';
import { WalletTypeEntity } from './wallet-type.entity';
import { WalletTypeService } from './wallet-type.service';

// ==============================|| WALLET TYPE -> MODULE ||============================== //

@Module({
  imports: [TypeOrmModule.forFeature([WalletTypeEntity])],
  controllers: [WalletTypeController],
  providers: [WalletTypeService],
  exports: [WalletTypeService],
})
export class WalletTypeModule {}
