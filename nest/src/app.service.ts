import { HttpException, Injectable } from '@nestjs/common';

type Person = { name: string; age: number };
@Injectable()
export class AppService {
  getHello(): string {
    throw new Error('error');
    return 'Hello World!';
  }

  asd = (): Person => {
    return {} as Person;
  };
}
