export const errorhandlerMiddleware = (error, req, res, next) => {
        res.status(500).json({
                status: 500,
                message: 'Internal status error',
                data: {
                        message: error.message
                },
        });
}

