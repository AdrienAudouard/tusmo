import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { getAssetPath } from './utils/get-assets-path.utils';
import { WebAppService } from './web-app.service';

@Injectable()
export class WebAppMiddleware implements NestMiddleware {
  constructor(private readonly clientService: WebAppService) {}

  async use(req: Request, res: Response, next: () => void) {
    if (/[^\\/]+\.[^\\/]+$/.test(req.path)) {
      const file = getAssetPath(req.path.replace('tusmo/', ''));
      console.log(file, __dirname);
      res.sendFile(file, (err) => {
        console.log(err);
        if (err) {
          res.status(404).end();
        }
      });
    } else {
      return next();
    }
  }
}
