import { Request } from 'express';

// "user" module
import { UserEntity } from 'user/user.entity';

// ==============================|| EXPRESS -> REQUEST ||============================== //

export interface IExpressRequest extends Request {
  user?: UserEntity;
}
