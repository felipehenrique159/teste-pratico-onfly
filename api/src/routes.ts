import express, { Request, Response } from 'express'
import AuthController from './controllers/AuthController';
const routes = express.Router()

routes.post('/auth/register' , async (request: Request, response: Response) => {
  return await AuthController.register(request, response);
});

routes.post('/auth/login' , async (request: Request, response: Response) => {
  return await AuthController.login(request, response);
});

export default routes
