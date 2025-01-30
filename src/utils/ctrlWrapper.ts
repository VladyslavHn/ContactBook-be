// Wrapper pro kontrolery pro jednodušší práci s asynchronními funkcemi
import { Request, Response, NextFunction } from 'express';

export const ctrlWrapper = <T>(
  handler: (req: Request, res: Response, next: NextFunction) => Promise<T>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
