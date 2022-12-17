import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { EventsEnum, GameModel } from '@temp-workspace/shared-models';
import { Server, Socket } from 'socket.io';
import { InternalEventsEnum } from '../../shared/models/internal-events.enum';
import { SharedGamesService } from '../../shared/shared-games.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GameGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private sharedGamesService: SharedGamesService,
    private eventEmitter: EventEmitter2
  ) {}

  @SubscribeMessage(EventsEnum.CREATE_GAME)
  async onGameCreate(
    @MessageBody() name: string,
    @ConnectedSocket() client: Socket
  ): Promise<string> {
    this.eventEmitter.emit(InternalEventsEnum.CREATE_GAME, {
      name,
      id: client.id,
    });
    return name;
  }

  @SubscribeMessage(EventsEnum.JOIN_GAME)
  async onGameJoined(
    @MessageBody() code: string,
    @ConnectedSocket() client: Socket
  ): Promise<void> {
    this.eventEmitter.emit(InternalEventsEnum.JOIN_GAME, client.id, code);
  }

  @OnEvent(InternalEventsEnum.GAME_LIST_UPDATED)
  handleOrderCreatedEvent(payload: GameModel[]) {
    this.server.emit(EventsEnum.GAME_LIST_UPDATE, payload);
  }

  handleConnection(socket: Socket) {
    console.log(`Client connected: ${socket.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
    this.eventEmitter.emit(InternalEventsEnum.CLIENT_DISCONNECTED, client.id);
  }
}
