import { GameModel } from '@temp-workspace/shared-models';
import React from 'react';
import { useWaitingRoom } from '../../context/waiting-room.context';
import './GameListItem.scss';

type Props = {
  game: GameModel;

  enableButton: boolean;
};

export function GameListItem({ game, enableButton }: Props) {
  const { joinGame } = useWaitingRoom();

  return (
    <li key={game.code} className={'game-list-item'}>
      <span>
        {game.name}#{game.code}
      </span>
      <button
        type="button"
        onClick={() => {
          joinGame(game.code);
        }}
        disabled={!enableButton}
      >
        Join <b>#{game.code}</b>
      </button>
    </li>
  );
}
