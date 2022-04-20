// ==============================|| ITEM BASE -> RESPONSE ||============================== //

export interface IItemBaseResponse {
  id: number;
  name: string;
}

// ==============================|| COMMON -> RESPONSE ||============================== //

export interface ICommonResponse {
  success: boolean;
  message: string;
}

// ==============================|| GET ALL -> RESPONSE ||============================== //

export interface IGetAllResponse<T extends IItemBaseResponse>
  extends ICommonResponse {
  // <!-- Body --!>
  values: T[];
}

// ==============================|| GET ONE -> RESPONSE ||============================== //

export interface IGetOneResponse<T extends IItemBaseResponse>
  extends ICommonResponse {
  // <!-- Body --!>
  value: T;
}
