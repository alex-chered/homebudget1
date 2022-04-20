import { Injectable } from '@nestjs/common';

// ==============================|| APP -> SERVICE ||============================== //

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
