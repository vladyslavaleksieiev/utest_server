import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { validateToken } from '@utils/encryption';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ChechAuthMiddleware implements NestMiddleware {
  use(req: IAuthorizedRequest, res: Response, next: NextFunction): void {
    const { authorization } = req.headers;

    const { ok, user } = validateToken(authorization);

    if (ok) {
      req.user = user;
      next();
    } else {
      res.status(HttpStatus.UNAUTHORIZED).send({
        ok: false,
        message: 'Token not provided or not valid',
        status: 401,
      });
    }
  }
}

export interface IAuthorizedRequest extends Request {
  user: string;
}
