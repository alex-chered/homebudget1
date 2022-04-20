import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// aux.
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

// ==============================|| USER -> MODULE ||============================== //

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
