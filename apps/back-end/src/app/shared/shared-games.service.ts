import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { GameModel } from '@temp-workspace/shared-models';
import {
  AuthorJoinGameError,
  GameNotFoundError,
  PlayerAlreadyInGameError,
} from './errors';
import { InternalEventsEnum } from './models/internal-events.enum';
import { generateRandomGameCode } from './utils/generate-random-game-code';

@Injectable()
export class SharedGamesService {
  private games: GameModel[] = [];

  constructor(private eventEmitter: EventEmitter2) {}

  public getAvailableGames(): GameModel[] {
    return this.games;
  }

  public createGame(name: string, id: string): GameModel {
    const code = generateRandomGameCode();

    this.games.push({
      name,
      code,
      author: id,
      players: [id],
    });

    this.eventEmitter.emit(InternalEventsEnum.GAME_LIST_UPDATED, this.games);
    return this.games[this.games.length - 1];
  }

  public addPlayerToGame(clientId: string, gameCode: string) {
    const alreadyInGame = this.games.find(
      (game) => game.author === clientId || game.players.includes(clientId)
    );

    if (alreadyInGame) {
      throw new PlayerAlreadyInGameError(clientId);
    }

    const game = this.games.find((game) => game.code === gameCode);
    if (!game) {
      throw new GameNotFoundError(gameCode);
    }
    if (clientId == game.author) {
      throw new AuthorJoinGameError();
    }
    game.players.push(clientId);

    this.eventEmitter.emit(InternalEventsEnum.GAME_LIST_UPDATED, this.games);
  }

  public clearGamesFromClientId(clientId: string) {
    const games = this.games.filter((game) => game.author != clientId);
    games.forEach((game) => {
      game.players = game.players.filter((playerId) => playerId !== clientId);
    });

    this.games = games;

    this.eventEmitter.emit(InternalEventsEnum.GAME_LIST_UPDATED, this.games);
  }

  public clearAllGames() {
    this.games = [];
    this.eventEmitter.emit(InternalEventsEnum.GAME_LIST_UPDATED, this.games);
  }
}
