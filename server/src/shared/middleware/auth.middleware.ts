import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';

// 3rd-party libraries
import { verify } from 'jsonwebtoken';

// config
import { appConfig } from 'app-config';

// shared
import { IExpressRequest } from 'shared/types';

// "user" module
import { UserService } from 'user/user.service';

// ==============================|| AUTH -> MIDDLEWARE ||============================== //

// This middleware tries to get a token from the request headers,
// to decode it and to find a user by the received id.
// If the user exists, add him to the request
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: IExpressRequest, res: Response, next: NextFunction) {
    // Check if there is the "authorization" header
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }

    // Get a token from the required header
    const token = req.headers.authorization.split(' ')[1];

    //
    try {
      // Try to decode the token and to get a user
      const decode = verify(token, appConfig.JWT_SECRET);
      const user = await this.userService.getUser(decode.id);

      // Add the user to the request
      req.user = user;

      next();
    } catch {
      req.user = null;
      next();
    }
  }
}
