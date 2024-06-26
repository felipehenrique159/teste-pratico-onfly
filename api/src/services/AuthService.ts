import { Request, Response } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import { RegisterUser } from '../interfaces/RegisterUser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { RegisterUserRequest } from '../interfaces/RegisterUserRequest';
import { LoginUserRequest } from '../interfaces/LoginUserRequest';
import { UserJwt } from '../interfaces/UserJwt';

export default class AuthService {
    static async registerUser(request: RegisterUserRequest) {
        const user: RegisterUser = request.body

        const existingUser = await UsersRepository.findByEmail(user.email)

        if (existingUser) {
            throw new Error('Email already in use');
        }

        user.password = await hashPassword(user.password)

        return UsersRepository.create(user)
    }

    static async loginUser(request: LoginUserRequest) {
        const { email, password } = request.body;

        const user = await UsersRepository.findByEmail(email);

        if (!user) {
            return
        }

        const passwordValid = await comparePassword(password, user.password)

        if (passwordValid) {
            return generateTokenJwt(user)
        }
    }
}

export const hashPassword = async (password: string): Promise<string> => {
    return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};

export const generateTokenJwt = async (user: UserJwt) => {
    return {
        token: jwt.sign({
            id: user.id,
            email: user.email
        }, 'secret_key_teste_pratico', { expiresIn: '1h' }),
        expiries_in: '1h'
    } ;
};