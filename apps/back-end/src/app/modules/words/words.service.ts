import { Injectable } from '@nestjs/common';
import { WordData } from '@temp-workspace/shared-models';
import removeAccents from './utils/remove-accents.utils';
import * as words from './utils/words-shuffle.json';

@Injectable()
export class WordsService {
  importedWords: WordData[];

  constructor() {
    this.importedWords = words as WordData[];
    this.importedWords = this.importedWords.map((word) => ({
      word: removeAccents(word.word).toUpperCase(),
      size: word.size,
    }));
  }

  public getWordOfTheDay(): string {
    const now = new Date();
    const wordDate = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDay(),
      0,
      0,
      0,
      0
    );

    console.log(wordDate);

    const wordIndex = wordDate % this.importedWords.length;
    const word = this.importedWords[wordIndex];

    return word.word;
  }

  public isWordExist(word: string): boolean {
    return this.importedWords.some((wordImported) => wordImported.word == word);
  }
}
