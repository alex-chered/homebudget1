// shared
import { ICommonResponse } from 'shared/types';

// ==============================|| REGISTER -> RESPONSE ||============================== //

export interface IRegisterResponse extends ICommonResponse {
  user: {
    email: string;
    username: string;
  };
  token: string;
}
