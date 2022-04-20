import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

// shared
import { IExpressRequest } from 'shared/types';

// ==============================|| AUTH -> GUARD ||============================== //

// This guard checks if there is a user in the request

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Get the context
    const request = context.switchToHttp().getRequest<IExpressRequest>();

    // Check if there a user in the request
    if (request.user) {
      return true;
    }

    // In other case throw an exception
    throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
  }
}
