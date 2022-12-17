export class AuthorJoinGameError extends Error {
  constructor() {
    super("The author of a game can't join his game.");
  }
}
