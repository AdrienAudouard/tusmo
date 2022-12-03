import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameManagementModule } from './modules/game-management/game-management.module';
import { GameModule } from './modules/game/game.module';
import { SharedGamesService } from './shared/shared-games.service';

@Module({
  imports: [GameModule, GameManagementModule, ],
  controllers: [AppController],
  providers: [AppService, SharedGamesService],
})
export class AppModule {}
