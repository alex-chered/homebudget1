// types
import { UserModel } from 'types/models';

// ==============================|| REGISTER -> RESPONSE ||============================== //

export interface IRegisterResponse {
  success: boolean;
  message: string;
  user: UserModel;
  token: string;
}

// ==============================|| LOGIN -> RESPONSE ||============================== //

export interface ILoginResponse {
  success: boolean;
  message: string;
  user: UserModel;
  token: string;
}

// ==============================|| USER -> RESPONSE ||============================== //

export interface IGetUserResponse {
  success: boolean;
  message: string;
  user: UserModel;
}

// ==============================|| USER COUNT -> RESPONSE ||============================== //

export interface IGetUserCountResponse {
  success: boolean;
  message: string;
  count: number;
}
