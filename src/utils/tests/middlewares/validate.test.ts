import { validate } from '../../../middlewares/validate.js';
import { ContactSchema } from '../../../validation/contactValidation.js';
import { Request, Response, NextFunction } from 'express';

describe('validate middleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = { body: {} };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  test('should call next() if validation passes', async () => {
    mockRequest.body = {
      firstName: 'John',
      lastName: 'Doe',
      emails: ['john.doe@example.com'],
    };

    await validate(ContactSchema)(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockNext).toHaveBeenCalled();
    expect(mockResponse.status).not.toHaveBeenCalled();
  });

  test('should return 400 if validation fails', async () => {
    mockRequest.body = {};

    await validate(ContactSchema)(
      mockRequest as Request,
      mockResponse as Response,
      mockNext
    );

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith(
      expect.objectContaining({ status: 400 })
    );
  });
});
