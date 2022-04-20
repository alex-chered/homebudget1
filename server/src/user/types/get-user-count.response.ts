// shared
import { ICommonResponse } from 'shared/types';

// ==============================|| GET USER COUNT -> RESPONSE ||============================== //

export interface IGetUserCountResponse extends ICommonResponse {
  count: number;
}
