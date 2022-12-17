import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameManagementModule } from './modules/game-management/game-management.module';
import { GameModule } from './modules/game/game.module';
import { SharedGamesService } from './shared/shared-games.service';

@Module({
  imports: [GameModule, GameManagementModule, EventEmitterModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, SharedGamesService]
})
export class AppModule {
}
