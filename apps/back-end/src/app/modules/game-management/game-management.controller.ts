import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { ApiTags } from '@nestjs/swagger';
import { GameModel } from '@temp-workspace/shared-models';
import { InternalEventsEnum } from '../../shared/models/internal-events.enum';
import { SharedGamesService } from '../../shared/shared-games.service';
import { CreateGameEventDto } from './dto/create-game-event.dto';
import { CreateGameDto } from './dto/create-game.dto';

@ApiTags('game-management')
@Controller('game-management')
export class GameManagementController {
  constructor(
    private sharedGamesService: SharedGamesService,
    private eventEmitter: EventEmitter2
  ) {}

  @Get()
  findAll(): GameModel[] {
    return this.sharedGamesService.getAvailableGames();
  }

  @Post()
  createGame(@Body() body: CreateGameDto): GameModel {
    const game = this.sharedGamesService.createGame(body.name, '');
    return game;
  }

  @Post('clear')
  clearAllGames(): void {
    this.sharedGamesService.clearAllGames();
  }

  @OnEvent(InternalEventsEnum.CREATE_GAME)
  onGameCreation(data: CreateGameEventDto) {
    this.sharedGamesService.createGame(data.name, data.id);
  }

  @OnEvent(InternalEventsEnum.JOIN_GAME)
  onGameJoined(clientId: string, gameCode: string) {
    this.sharedGamesService.addPlayerToGame(clientId, gameCode);
  }

  @OnEvent(InternalEventsEnum.CLIENT_DISCONNECTED)
  onClientDisconnected(id: string) {
    this.sharedGamesService.clearGamesFromClientId(id);
  }
}
