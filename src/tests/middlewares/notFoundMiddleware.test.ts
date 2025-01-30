import { notFoundMiddleware } from '../../middlewares/notFoundMiddleware.js';
import { Request, Response } from 'express';

describe('notFoundMiddleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('should return 404 response', () => {
    notFoundMiddleware(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.objectContaining({ status: 404, message: 'Route not found!' })
    );
  });
});
