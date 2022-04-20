// 3rd-party libraries
import { sign } from 'jsonwebtoken';

// config
import { appConfig } from 'app-config';

// "user" module
import { UserEntity } from 'user/user.entity';

// ==============================|| GENERATE JWT ||============================== //

export const generateJWT = (user: UserEntity): string => {
  return sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    appConfig.JWT_SECRET,
    { expiresIn: '1d' },
  );
};
