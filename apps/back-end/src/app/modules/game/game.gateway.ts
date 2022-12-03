import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { EventsEnum } from '@temp-workspace/shared-models';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server, Socket } from 'socket.io';
import { SharedGamesService } from '../../shared/shared-games.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class GameGateway {
  constructor(private sharedGamesService: SharedGamesService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage(EventsEnum.EVENTS)
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage(EventsEnum.IDENTITY)
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }

  handleConnection(socket: Socket) {
    console.log(this.sharedGamesService.getAvailableGames());
    console.log(`Client connected: ${socket.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

}
