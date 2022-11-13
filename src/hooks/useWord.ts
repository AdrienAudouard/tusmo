import React, { useState } from 'react';

import words from '../assets/words-shuffle.json';
import WordData from '../models/word-data';
import removeAccents from '../utils/word-utils';

function useWord(): [string, React.Dispatch<React.SetStateAction<string>>] {
  return useState(() => {
    const importedWords = words as WordData[];
    const now = new Date();
    const wordDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDay(),
      0,
      0,
      0,
      0,
    );

    const wordIndex = wordDate.getTime() % importedWords.length;
    const word = importedWords[wordIndex];

    return removeAccents(word.word).toUpperCase();
  });
}

export default useWord;
