import express, { Request, Response } from 'express'
import AuthController from './controllers/AuthController';
import ExpensiesController from './controllers/ExpensesController';
import { authenticateJWT } from './middlewares/jwtMiddleware';
const routes = express.Router()

routes.post('/auth/register' , async (request: Request, response: Response) => {
  return await AuthController.register(request, response);
});

routes.post('/auth/login' , async (request: Request, response: Response) => {
  return await AuthController.login(request, response);
});

routes.post('/expenses' ,authenticateJWT , async (request: Request, response: Response) => {
  return await ExpensiesController.newExpenses(request, response);
});

routes.get('/expenses' ,authenticateJWT, async (request: Request, response: Response) => {
  return await ExpensiesController.listAllExpenses(request, response);
});

routes.get('/expenses/:id' ,authenticateJWT, async (request: Request, response: Response) => {
  return await ExpensiesController.listExpense(request, response);
});

routes.put('/expenses/:id' ,authenticateJWT, async (request: Request, response: Response) => {
  return await ExpensiesController.updateExpense(request, response);
});

routes.delete('/expenses/:id' ,authenticateJWT, async (request: Request, response: Response) => {
  return await ExpensiesController.deleteExpense(request, response);
});


export default routes
