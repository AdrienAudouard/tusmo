import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { AppService } from './app.service';
import { GameManagementModule } from './modules/game-management/game-management.module';
import { GameModule } from './modules/game/game.module';
import { WebAppModule } from './modules/web-app/web-app.module';
import { WordsModule } from './modules/words/words.module';
import { SharedGamesService } from './shared/shared-games.service';

@Module({
  imports: [
    GameModule,
    GameManagementModule,
    WordsModule,
    EventEmitterModule.forRoot(),
    WebAppModule,
  ],
  controllers: [],
  providers: [AppService, SharedGamesService],
})
export class AppModule {}
