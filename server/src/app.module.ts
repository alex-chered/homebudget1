import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// typeorm config
import { typeormConfig } from 'typeorm-config/typeorm.dev';

// shared
import { AuthMiddleware } from 'shared/middleware/auth.middleware';

// modules
import { UserModule } from 'user/user.module';
import { CurrencyModule } from 'modules/currency/currency.module';
import { WalletTypeModule } from 'modules/wallet-type/wallet-type.module';
import { WalletModule } from 'modules/wallet/wallet.module';

// aux.
import { AppController } from './app.controller';
import { AppService } from './app.service';

// ==============================|| APP -> MODULE ||============================== //

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    UserModule,
    CurrencyModule,
    WalletTypeModule,
    WalletModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
