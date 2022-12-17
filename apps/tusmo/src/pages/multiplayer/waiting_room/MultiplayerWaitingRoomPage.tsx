import React from 'react';
import { CreateGame } from './components/create-game/CreateGame';
import { GameJoined } from './components/game-joined/GameJoined';
import { GameList } from './components/game-list/GameList';
import {
  WaitingRoomContext,
  WaitingRoomProvider,
} from './context/waiting-room.context';
import './MultiplayerWaitingRoomPage.scss';

export function MultiplayerWaitingRoomPage() {
  return (
    <WaitingRoomProvider>
      <div className={'waiting-room__container'}>
        <WaitingRoomContext.Consumer>
          {({ selectedGame, socketId }) => {
            if (selectedGame) {
              return <GameJoined game={selectedGame} socketId={socketId} />;
            }

            return [<CreateGame></CreateGame>, <GameList></GameList>];
          }}
        </WaitingRoomContext.Consumer>
      </div>
    </WaitingRoomProvider>
  );
}
