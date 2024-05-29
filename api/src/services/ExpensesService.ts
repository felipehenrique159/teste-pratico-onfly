import ExpensesRepository from "../repositories/ExpensesRepository";
import { sendEmailNewExpensesSuccess } from "./EmailService";

export default class ExpensesService {
    static async registerExpenses(request: any) {
        const expense = await ExpensesRepository.create(request.body, request.user.id)
        await sendEmailNewExpensesSuccess('Despesa cadastrada!', request.user.email, expense)
        return expense
    }

    static async listAllExpenses(idUser: number) {
        return ExpensesRepository.listAll(idUser)
    }

    static async listExpense(request: any) {
        return ExpensesRepository.list(request.params.id, request.user.id)
    }

    static async updateExpense(request: any) {
        return ExpensesRepository.update(request.body, request.params.id, request.user.id)
    }

    static async deleteExpense(request: any) {
        return ExpensesRepository.delete(request.params.id, request.user.id)
    }
}
