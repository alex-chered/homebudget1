// "user" module
import {
  IRegisterResponse,
  ILoginResponse,
  IGetUserResponse,
  IGetUserCountResponse,
} from 'user/types';
import { UserEntity } from 'user/user.entity';

// aux.
import { generateJWT } from './generate-jwt';

// ==============================|| USER RESPONSE BUILDER ||============================== //

export class UserResponseBuilder {
  //
  // REGISTER
  //
  static buildRegisterResponse(userEntity: UserEntity): IRegisterResponse {
    return {
      success: true,
      message: '',
      user: {
        email: userEntity.email,
        username: userEntity.username,
      },
      token: generateJWT(userEntity),
    };
  }

  //
  // LOGIN
  //
  static buildLoginResponse(userEntity: UserEntity): ILoginResponse {
    return {
      success: true,
      message: '',
      user: {
        email: userEntity.email,
        username: userEntity.username,
      },
      token: generateJWT(userEntity),
    };
  }

  //
  // GET USER
  //
  static buildGetUserResponse(userEntity: UserEntity): IGetUserResponse {
    return {
      success: true,
      message: '',
      user: {
        email: userEntity.email,
        username: userEntity.username,
        isAdmin: userEntity.isAdmin,
      },
    };
  }

  //
  // COUNT
  //
  static buildGetUserCountResponse(count: number): IGetUserCountResponse {
    return {
      success: true,
      message: '',
      count,
    };
  }
}
