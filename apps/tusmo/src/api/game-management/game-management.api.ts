import { GameModel } from '@temp-workspace/shared-models';
import { ENV } from '../../utils/env';
import { httpClient } from '../http-client';

export class GameManagementApi {
  public getAvailableGames(): Promise<GameModel[]> {
    return httpClient
      .get<GameModel[]>(ENV.api.gameManagement)
      .then((response) => response.data);
  }

  public createGame(name: string): Promise<GameModel> {
    return httpClient
      .post(ENV.api.gameManagement, { name })
      .then((response) => response.data);
  }
}
