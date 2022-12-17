import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WebAppService } from './web-app.service';

@ApiTags('tusmo')
@Controller()
export class WebAppController {
  constructor(private readonly clientService: WebAppService) {}

  @Get('*')
  public async get() {
    return this.clientService.getApp();
  }
}
