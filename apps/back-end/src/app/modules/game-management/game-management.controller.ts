import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GameModel } from '@temp-workspace/shared-models';
import { SharedGamesService } from '../../shared/shared-games.service';
import { CreateGameDto } from './dto/create-game.dto';

@ApiTags('game-management')
@Controller('game-management')
export class GameManagementController {
  constructor(private sharedGamesService: SharedGamesService) {}
  @Get()
  findAll(): GameModel[] {
    return this.sharedGamesService.getAvailableGames();
  }

  @Post()
  createGame(@Body() body: CreateGameDto): GameModel {
    return this.sharedGamesService.createGame(body.name);
  }
}
