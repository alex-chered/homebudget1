import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// typeorm
import { Repository } from 'typeorm';

// 3-rd party
import { compare } from 'bcrypt';

// aux.
import { UserEntity } from './user.entity';
import { RegisterUserDto, LoginUserDto } from './dto';

// ==============================|| USER -> SERVICE ||============================== //

@Injectable()
export class UserService {
  // inject repositories
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  //
  // REGISTER
  //
  async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { email, username } = registerUserDto;

    // Get the user with the specified username
    const usernameInDb = await this.userRepository.findOne({
      username,
    });

    // Check if there is an user with the specified email
    if (usernameInDb) {
      throw new UnprocessableEntityException('The user already exists');
    }

    // Get the user with the specified email
    const emailInDb = await this.userRepository.findOne({
      email,
    });

    // Check if there is an user with the specified email
    if (emailInDb) {
      throw new UnprocessableEntityException('The user already exists');
    }

    // Create a new user
    const newUser = new UserEntity();
    Object.assign(newUser, registerUserDto);

    // Save the user in the db
    return await this.userRepository.save(newUser);
  }

  //
  // LOGIN
  //
  async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const { email, password } = loginUserDto;

    // Get the user by the email
    const userByEmail = await this.userRepository.findOne({
      email,
    });

    // Check if there is an user with the specified email
    if (!userByEmail) {
      throw new UnprocessableEntityException('The credentials are not valid');
    }

    // Сheck if the email is correct
    const isPasswordCorrect = await compare(password, userByEmail.password);
    if (!isPasswordCorrect) {
      throw new UnprocessableEntityException('The credentials are not valid');
    }

    // Return the user
    return userByEmail;
  }

  //
  // GET USER
  //
  async getUser(userId: number): Promise<UserEntity> {
    // Get the user by id
    const userDb = await this.userRepository.findOne({
      id: userId,
    });

    // Check if the user exists
    if (!userDb) {
      throw new UnprocessableEntityException('The non-existent user');
    }

    return userDb;
  }

  //
  // COUNT
  //
  async getUserCount(): Promise<number> {
    const c = await this.userRepository.count();
    console.log('count', c);
    return this.userRepository.count();
  }
}
