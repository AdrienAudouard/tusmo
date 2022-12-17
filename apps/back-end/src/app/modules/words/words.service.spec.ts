import { Test } from '@nestjs/testing';
import { WordsService } from './words.service';

describe('WordsService', () => {
  let wordsService: WordsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [WordsService],
    }).compile();

    wordsService = app.get<WordsService>(WordsService);
  });

  describe('getWordOfTheDay', () => {
    it('should return the word of the day', () => {
      jest.useFakeTimers({ now: Date.UTC(2020, 2, 1) });
      ///   jest.setSystemTime(new Date(2020, 3, 1));

      const word = wordsService.getWordOfTheDay();
      expect(word).toEqual('EXCUSER');
    });
  });

  describe('isWordExist', () => {
    it('should return true if the word exist', () => {
      const result = wordsService.isWordExist('EGRAINEE');
      expect(result).toEqual(true);
    });

    it('should return false if the word do not exist', () => {
      const result = wordsService.isWordExist('BNJOUR');
      expect(result).toEqual(false);
    });
  });
});
