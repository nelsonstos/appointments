import { RequestHandler, Request, Response, NextFunction } from 'express';
import { errorHandler } from './errorHandler';

const asyncMiddleware =
  <T>(
    fn: (req: Request, res: Response, next: NextFunction) => Promise<T>
  ): RequestHandler =>
  (req, res, next) => {
    fn(req, res, next).catch((error) => {
      return errorHandler(error, req, res);
    });
  };

export default asyncMiddleware;