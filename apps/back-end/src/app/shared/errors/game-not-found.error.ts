export class GameNotFoundError extends Error {
  constructor(code: string) {
    super(`Game with code ${code} not found.`);
  }
}
