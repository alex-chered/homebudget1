// ==============================|| USER -> MODEL ||============================== //

export interface UserModel {
  email: string;
  username?: string;
  password?: string;
  isAdmin?: boolean;
}
