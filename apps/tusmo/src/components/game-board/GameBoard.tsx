import './GameBoard.scss';
import React from 'react';
import { useUserPreferences } from '../../context/user-preferences/user-preferences.context';
import GameLettersState from '../../models/game-letter-state.model';
import KeyboardLettersState from '../../models/keyboard-letters-state.model';
import GameGrid from '../game-grid/game-grid/GameGrid';
import Keyboard from '../keyboard/keyboard/Keyboard';

interface Props {
  wordSize: number;
  lines?: GameLettersState[][];
  keyboardLettersState?: KeyboardLettersState;
}

function GameBoard({ wordSize, lines, keyboardLettersState }: Props) {
  const { keyboardType } = useUserPreferences();

  return (
    <div className="game-board">
      <GameGrid wordSize={wordSize} letters={lines} />
      <Keyboard
        lettersState={keyboardLettersState ?? {}}
        keyboardType={keyboardType}
      />
    </div>
  );
}

export default GameBoard;
