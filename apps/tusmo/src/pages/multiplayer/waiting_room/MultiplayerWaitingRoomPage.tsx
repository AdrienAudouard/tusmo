import React from 'react';
import { CreateGame } from './components/create-game/CreateGame';
import { GameList } from './components/game-list/GameList';
import { WaitingRoomProvider } from './context/waiting-room.context';
import './MultiplayerWaitingRoomPage.scss';

export function MultiplayerWaitingRoomPage() {
  return (
    <WaitingRoomProvider>
      <div className={'waiting-room__container'}>
        <CreateGame></CreateGame>
        <GameList></GameList>
      </div>
    </WaitingRoomProvider>
  );
}
