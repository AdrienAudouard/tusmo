export class PlayerAlreadyInGameError extends Error {
  constructor(clientId: string) {
    super(`Player with id ${clientId} already in a game`);
  }
}
