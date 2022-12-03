import { Module } from '@nestjs/common';
import { SharedGamesService } from '../../shared/shared-games.service';
import { GameManagementController } from './game-management.controller';

@Module({controllers: [GameManagementController], providers: [SharedGamesService]})
export class GameManagementModule {}
