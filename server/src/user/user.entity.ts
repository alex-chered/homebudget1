// 3rd-party
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcrypt';

// ==============================|| USER -> ENTITY ||============================== //

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ unique: true })
  username: string;

  @Column({ default: false })
  isAdmin: boolean;

  // Before to insert the password into the db,
  // hash it so as not to store the "open" password
  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
