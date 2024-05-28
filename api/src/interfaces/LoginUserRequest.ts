import { Request } from 'express';

export interface LoginUserRequest extends Request {
    email?: string,
    password?: string
}