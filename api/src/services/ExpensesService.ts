import ExpensesRepository from "../repositories/ExpensesRepository";

export default class ExpensesService {
    static async registerExpenses(request: any) {
        return ExpensesRepository.create(request.body)
    }

    static async listAllExpenses(request: any) {
        return ExpensesRepository.listAll(request.user.id)
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
