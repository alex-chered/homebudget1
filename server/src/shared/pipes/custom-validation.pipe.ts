import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

// 3rd-party libraries
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

// ==============================|| CUSTOM VALIDATION -> PIPE ||============================== //

@Injectable()
export class CustomValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    //
    const obj = plainToClass(metadata.metatype, value);
    const rawErrors = await validate(obj);

    // If there are errors, throw an exception
    if (rawErrors.length > 0) {
      throw new HttpException(
        'The data is incorrect',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    // Otherwise, return the initial value
    return value;
  }
}
