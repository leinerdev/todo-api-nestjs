import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HelloController {
  @Get()
  public hello(): string {
    return 'Hola mundo';
  }
}
