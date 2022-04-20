// shared
import { ICommonResponse } from 'shared/types';

// ==============================|| GET USER -> RESPONSE ||============================== //

export interface IGetUserResponse extends ICommonResponse {
  user: {
    email: string;
    username: string;
    isAdmin: boolean;
  };
}
