import { Injectable } from '@nestjs/common';
import { GameModel } from '@temp-workspace/shared-models';

@Injectable()
export class SharedGamesService {
  private games: GameModel[] = [];

  public getAvailableGames(): GameModel[] {
    return this.games;
  }

  public createGame(name: string): GameModel {
    this.games.push({ name, code: '123' });
    return this.games[this.games.length - 1];
  }
}
