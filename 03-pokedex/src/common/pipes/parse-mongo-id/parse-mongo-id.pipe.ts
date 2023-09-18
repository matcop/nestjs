import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    console.log({value:value.toUpperCase(), metadata});
    if(!isValidObjectId(value)){
      throw new BadRequestException(`${ value } is not a valid MongoID - no es, un Identificador Mongo valido`);
    }
    return value;
  }
}
