import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import { RegisterUserRequest } from '../interfaces/RegisterUserRequest';

export default class AuthController {
    static async register(request: RegisterUserRequest, response: Response) {
        try {
            const user = await AuthService.registerUser(request);
            response.status(201).json({ user: user });
        } catch (error) {
            console.error('Error register user:', error);
            response.status(500).json({ error: 'Error register user' });
        }
    }

    static async login(request: Request, response: Response) {
        try {
            const token = await AuthService.loginUser(request);
            response.status(200).json(token);
        } catch (error) {
            console.error('Error login user:', error);
            response.status(500).json({ error: 'Error login user' });
        }
    }
}
