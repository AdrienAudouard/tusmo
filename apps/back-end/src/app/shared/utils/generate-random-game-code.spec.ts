import { generateRandomGameCode } from './generate-random-game-code';

describe('generateRandomGameCode', () => {
  it('should return a game code', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
    const result = generateRandomGameCode(4);

    expect(result).toEqual('1111');
  });
});
