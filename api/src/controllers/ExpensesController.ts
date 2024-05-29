import { Request, Response } from 'express';
import ExpensesService from '../services/ExpensesService';

export default class ExpensesController {
    static async newExpenses(request: Request, response: Response) {
        try {
            const expense = await ExpensesService.registerExpenses(request);
            response.status(201).json({ expense: expense });
        } catch (error) {
            console.error('Error new expenses:', error);
            response.status(500).json({ error: 'Error new expenses' });
        }
    }

    static async listAllExpenses(request: Request, response: Response) {
        try {
            const expenses = await ExpensesService.listAllExpenses(request);
            response.status(200).json({ expenses: expenses });
        } catch (error) {
            console.error('Error list all expenses:', error);
            response.status(500).json({ error: 'Error list all expenses' });
        }
    }

    static async listExpense(request: Request, response: Response) {
        try {
            const expense = await ExpensesService.listExpense(request);
            response.status(200).json({ expense: expense });
        } catch (error) {
            console.error('Error list expense:', error);
            response.status(500).json({ error: 'Error list expense' });
        }
    }

    static async updateExpense(request: Request, response: Response) {
        try {
            const expense = await ExpensesService.updateExpense(request);
            response.status(200).json({ expense: expense });
        } catch (error) {
            console.error('Error update expense:', error);
            response.status(500).json({ error: 'Error update expense' });
        }
    }

    static async deleteExpense(request: Request, response: Response) {
        try {
            await ExpensesService.deleteExpense(request);
            response.status(200).json('Expense deleted!');
        } catch (error) {
            console.error('Error deleted user:', error);
            response.status(500).json({ error: 'Error deleted user' });
        }
    }
}
