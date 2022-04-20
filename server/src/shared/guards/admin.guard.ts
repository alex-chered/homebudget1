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

// ==============================|| ADMIN -> GUARD ||============================== //

// This guard checks if there a user in the request is an admin

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Get the context
    const request = context.switchToHttp().getRequest<IExpressRequest>();

    // Check if there a user in the request
    if (request.user && request.user.isAdmin) {
      return true;
    }

    // In other case throw an exception
    throw new HttpException('Not authorized', HttpStatus.UNAUTHORIZED);
  }
}
