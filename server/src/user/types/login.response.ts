// shared
import { ICommonResponse } from 'shared/types';

// ==============================|| LOGIN -> RESPONSE ||============================== //

export interface ILoginResponse extends ICommonResponse {
  user: {
    email: string;
    username: string;
  };
  token: string;
}
