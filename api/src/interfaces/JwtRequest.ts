import { Request } from 'express';

export interface JwtRequest extends Request {
    user?: string | object | any
}
