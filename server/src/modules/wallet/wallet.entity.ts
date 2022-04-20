// typeorm
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  JoinColumn,
} from 'typeorm';

// "wallet-type" module
import { WalletTypeEntity } from 'modules/wallet-type/wallet-type.entity';

// "currency" module
import { CurrencyEntity } from 'modules/currency/currency.entity';

// "user" module
import { UserEntity } from 'user/user.entity';

// ==============================|| WALLET -> ENTITY ||============================== //

@Entity('wallets')
export class WalletEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: '' })
  comment: string;

  @ManyToOne(() => WalletTypeEntity, { eager: true, nullable: false })
  @JoinColumn({ name: 'wallet_type_id' })
  walletType: WalletTypeEntity;

  @ManyToOne(() => CurrencyEntity, { eager: true, nullable: false })
  @JoinColumn({ name: 'currency_id' })
  currency: CurrencyEntity;

  @Index()
  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  //
  // CONSTRUCTOR
  //
  constructor(
    name: string,
    comment: string,
    walletType: WalletTypeEntity,
    currency: CurrencyEntity,
    user: UserEntity,
  ) {
    // <!-- Body --!>
    this.name = name;
    this.comment = comment;
    this.walletType = walletType;
    this.currency = currency;
    this.user = user;
  }
}
