import { MiddlewareConsumer, Module } from '@nestjs/common';
import { WebAppController } from './web-app.controller';
import { WebAppMiddleware } from './web-app.middleware';
import { WebAppService } from './web-app.service';

@Module({
  controllers: [WebAppController],
  providers: [WebAppService],
})
export class WebAppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(WebAppMiddleware).forRoutes(WebAppController);
  }
}
