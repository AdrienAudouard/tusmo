import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WordsService } from './words.service';

@ApiTags('words')
@Controller('words')
export class WordsController {
  constructor(private readonly wordsService: WordsService) {}

  @Get('word-of-the-day')
  public getWordOfTheDay(): string {
    return this.wordsService.getWordOfTheDay();
  }

  @Get('exist')
  public isWordExist(@Query('word') word: string): boolean {
    return this.wordsService.isWordExist(word);
  }
}
