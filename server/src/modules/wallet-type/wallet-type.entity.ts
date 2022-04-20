// typeorm
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// ==============================|| WALLET TYPE -> ENTITY ||============================== //

@Entity('wallet_types')
export class WalletTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;
}
