export type GameModel = {
  code: string;
  name: string;
  // Socket ID of the client who create the game
  author: string;
  players: string[];
};
