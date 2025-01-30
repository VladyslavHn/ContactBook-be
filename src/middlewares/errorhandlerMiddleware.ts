import { Request, Response, NextFunction } from 'express';

export const errorhandlerMiddleware = (
        error: Error,
        req: Request,
        res: Response,
        next: NextFunction
): void => {
        res.status(500).json({
                status: 500,
                message: 'Internal server error',
                data: {
                        error: error.message,
                },
        });
};
