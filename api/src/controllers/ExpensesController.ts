import { Request, Response } from 'express';
import ExpensesService from '../services/ExpensesService';
import { JwtRequest } from '../interfaces/JwtRequest';

export default class ExpensesController {
    static async newExpenses(request: JwtRequest, response: Response) {
        try {
            const expense = await ExpensesService.registerExpenses(request);
            response.status(201).json({ expense: expense });
        } catch (error) {
            console.error('Error new expenses:', error);
            response.status(500).json({ error: 'Error new expenses' });
        }
    }

    static async listAllExpenses(request: JwtRequest, response: Response) {
        try {
            if (!request.user) {
                return ''
            }
            const expenses = await ExpensesService.listAllExpenses(request.user.id);
            response.status(200).json({ expenses: expenses });
        } catch (error) {
            console.error('Error list all expenses:', error);
            response.status(500).json({ error: 'Error list all expenses' });
        }
    }

    static async listExpense(request: JwtRequest, response: Response) {
        try {
            const expense = await ExpensesService.listExpense(request);
            response.status(200).json({ expense: expense });
        } catch (error) {
            console.error('Error list expense:', error);
            response.status(500).json({ error: 'Error list expense' });
        }
    }

    static async updateExpense(request: JwtRequest, response: Response) {
        try {
            const expense = await ExpensesService.updateExpense(request);
            response.status(200).json({ expense: expense });
        } catch (error) {
            console.error('Error update expense:', error);
            response.status(500).json({ error: 'Error update expense' });
        }
    }

    static async deleteExpense(request: JwtRequest, response: Response) {
        try {
            await ExpensesService.deleteExpense(request);
            response.status(200).json('Expense deleted!');
        } catch (error) {
            console.error('Error deleted user:', error);
            response.status(500).json({ error: 'Error deleted user' });
        }
    }
}
