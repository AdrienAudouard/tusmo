import { GameModel } from '@temp-workspace/shared-models';
import React from 'react';
import Card from '../../../../../components/card/Card';
import './GameJoined.scss';

type Props = {
  game: GameModel;
  socketId: string;
};

export function GameJoined({ game, socketId }: Props) {
  return (
    <Card className={'game-joined'}>
      <h1>Game joined</h1>
      <div>Game #{game.code} selected.</div>
      <div>
        {' '}
        {game.players.length} players in the game, waiting for other players...
      </div>
      <div className={'game-joined__action-container'}>
        <button>Leave</button>
        <button disabled={socketId !== game.author}>Start game</button>
      </div>
    </Card>
  );
}
