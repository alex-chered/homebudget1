// types
import { BaseModel } from 'types/models';

// ==============================|| GET ALL -> RESPONSE ||============================== //

export interface IGetAllResponse<T extends BaseModel> {
  values: T[];
}

// ==============================|| GET ONE -> RESPONSE ||============================== //

export interface IGetOneResponse<T extends BaseModel> {
  value: T;
}
