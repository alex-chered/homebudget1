// typeorm
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// ==============================|| CURRENCY -> ENTITY ||============================== //

@Entity('currencies')
export class CurrencyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  fullName: string;
}
