import express, { Request, Response } from 'express'
import AuthController from './controllers/AuthController';
import ExpensiesController from './controllers/ExpensesController';
import { authenticateJWT } from './middlewares/jwtMiddleware';
import { validateNewExpense } from './validators/expenses/validateNewExpense';
import { validateListExpense } from './validators/expenses/validateListExpense';
import { validateUpdateExpense } from './validators/expenses/validateUpdateExpense';
import { validateDeleteExpense } from './validators/expenses/validateDeleteExpense';
import { validateRequest } from './middlewares/validateRequestMiddleware';
import { validateLogin } from './validators/auth/validateLogin';

const routes = express.Router()

routes.post('/auth/register', async (request: Request, response: Response) => {
  return await AuthController.register(request, response);
});

routes.post('/auth/login', validateLogin, validateRequest, async (request: Request, response: Response) => {
  return await AuthController.login(request, response);
});

routes.post('/expenses', authenticateJWT, validateNewExpense, validateRequest, async (request: Request, response: Response) => {
  return await ExpensiesController.newExpenses(request, response);
});

routes.get('/expenses', authenticateJWT, async (request: Request, response: Response) => {
  return await ExpensiesController.listAllExpenses(request, response);
});

routes.get('/expenses/:id', authenticateJWT, validateListExpense, validateRequest, async (request: Request, response: Response) => {
  return await ExpensiesController.listExpense(request, response);
});

routes.put('/expenses/:id', authenticateJWT, validateUpdateExpense, validateRequest, async (request: Request, response: Response) => {
  return await ExpensiesController.updateExpense(request, response);
});

routes.delete('/expenses/:id', authenticateJWT, validateDeleteExpense, validateRequest, async (request: Request, response: Response) => {
  return await ExpensiesController.deleteExpense(request, response);
});

export default routes
