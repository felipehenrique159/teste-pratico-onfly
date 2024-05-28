import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JwtRequest } from '../interfaces/JwtRequest';

const secretKey = 'secret_key_teste_pratico';

export const authenticateJWT = (request: JwtRequest, response: Response, next: NextFunction) => {
  const token = request.header('Authorization')?.split(' ')[1];

  if (!token) {
    return response.sendStatus(401);
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      return response.sendStatus(403);
    }
    request.user = user;
    next();
  });
};