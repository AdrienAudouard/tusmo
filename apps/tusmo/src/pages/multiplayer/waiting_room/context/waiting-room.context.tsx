import { EventsEnum, GameModel } from '@temp-workspace/shared-models';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import io from 'socket.io-client';
import { GameManagementApi } from '../../../../api/game-management/game-management.api';
import { ENV } from '../../../../utils/env';
import { WaitingRoomState } from './models/waiting-room.state';

export const WaitingRoomContext = createContext<WaitingRoomState>({
  games: [],
  createGame: () => {},
  joinGame: () => {},
});

const socket = io(ENV.websocketUrl);

export function WaitingRoomProvider({ children }: PropsWithChildren) {
  const [games, setGames] = useState<GameModel[]>([]);
  const [selectedGame, setSelectedGame] = useState<GameModel | undefined>(
    undefined
  );
  const [gameManagementApi] = useState(() => new GameManagementApi());

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on(EventsEnum.GAME_LIST_UPDATE, (games: GameModel[]) => {
      console.log(games);
      setGames(games);
    });

    socket.on('connect_error', (err) => {
      console.log(err);
    });

    socket.on('disconnect', () => {
      console.log('disconnect');
    });

    return () => {
      socket.off(EventsEnum.GAME_LIST_UPDATE);
      socket.off('connected');
      socket.off('connect_error');
      socket.off('disconnect');
    };
  }, []);

  useEffect(() => {
    const selected = games.find(
      (game) => game.author === socket.id || game.players.includes(socket.id)
    );
    setSelectedGame(selected);
  }, [games]);

  useEffect(() => {
    gameManagementApi.getAvailableGames().then((fetchedGames) => {
      setGames(fetchedGames);
    });
  }, [gameManagementApi]);

  const createGame = useCallback((name: string) => {
    socket.emit(EventsEnum.CREATE_GAME, name);
  }, []);

  const joinGame = useCallback((code: string) => {
    socket.emit(EventsEnum.JOIN_GAME, code);
  }, []);

  const value = useMemo(
    () => ({
      games,
      createGame,
      selectedGame,
      joinGame,
    }),
    [games, createGame, selectedGame, joinGame]
  );

  return (
    <WaitingRoomContext.Provider value={value}>
      {children}
    </WaitingRoomContext.Provider>
  );
}

export const useWaitingRoom = () => useContext(WaitingRoomContext);
