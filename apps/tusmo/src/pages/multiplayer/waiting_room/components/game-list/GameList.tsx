import React from 'react';
import Card from '../../../../../components/card/Card';
import { WaitingRoomContext } from '../../context/waiting-room.context';
import './GameList.scss';
import { GameListItem } from './GameListItem';

export function GameList() {
  return (
    <Card className={'game-list'}>
      <h1>Game list</h1>
      <WaitingRoomContext.Consumer>
        {({ games, selectedGame }) => (
          <ul className={'game-list__list'}>
            {games.map((game) => (
              <GameListItem
                game={game}
                key={`item-${game.code}`}
                enableButton={selectedGame !== undefined}
              />
            ))}
          </ul>
        )}
      </WaitingRoomContext.Consumer>
    </Card>
  );
}
