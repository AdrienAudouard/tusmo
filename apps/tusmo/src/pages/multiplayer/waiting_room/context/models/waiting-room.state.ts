import { GameModel } from '@temp-workspace/shared-models';

export type WaitingRoomState = {
  games: GameModel[];

  selectedGame?: GameModel;
  createGame: (name: string) => void;
  joinGame: (code: string) => void;
};
