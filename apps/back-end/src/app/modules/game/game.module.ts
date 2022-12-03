import { Module } from '@nestjs/common';
import { SharedGamesService } from '../../shared/shared-games.service';
import { GameGateway } from './game.gateway';

@Module({
  providers: [GameGateway, SharedGamesService],
})
export class GameModule {}
