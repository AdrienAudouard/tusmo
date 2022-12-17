import React from 'react';
import Card from '../../../../../components/card/Card';
import { useUserInformations } from '../../../../../context/user-informations/user-informations.context';
import { useWaitingRoom } from '../../context/waiting-room.context';
import './CreateGame.scss';

export function CreateGame() {
  const { createGame, selectedGame } = useWaitingRoom();
  const { pseudo } = useUserInformations();

  return (
    <Card className={'create-game'}>
      <h1>Create a game</h1>
      {selectedGame ? (
        <div>
          Game #{selectedGame?.code} created. Waiting for other players...
        </div>
      ) : (
        <button type="button" onClick={() => createGame(pseudo)}>
          Create a new game
        </button>
      )}
    </Card>
  );
}
