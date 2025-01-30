import { Request, Response, NextFunction } from 'express';

export const notFoundMiddleware = (req: Request, res: Response): void => {
    res.status(404).json({
        status: 404,
        message: 'Route not found!',
    });
};
