import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// shared
import { IExpressRequest } from 'shared/types';

// ==============================|| USER -> DECORATOR ||============================== //

// This decorator returns the user from the request
// or some user field set in the "data" parameter

export const UserDecorator = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    //
    const request = context.switchToHttp().getRequest<IExpressRequest>();

    //
    if (!request.user) {
      return null;
    }

    // Return the user data
    if (data) {
      return request.user[data];
    }

    // Return the user himself
    return request.user;
  },
);
