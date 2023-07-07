import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization)
      return res
        .status(401)
        .send({ error: 'Authentication credentials were not provided.' });
    if (authorization === 'authorization') return next();

    return res.status(401).send({ error: 'Invalid token.' });
  }
}
