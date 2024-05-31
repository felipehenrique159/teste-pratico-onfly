import { JwtRequest } from "../interfaces/JwtRequest";
import { RegisterExpense } from "../interfaces/RegisterExpense";
import ExpensesRepository from "../repositories/ExpensesRepository";
import { sendEmailNewExpensesSuccess } from "./EmailService";

export default class ExpensesService {
    static async registerExpenses(request: JwtRequest) {

        const body: RegisterExpense = {
            "description": request.body.description,
            "date": request.body.date,
            "value": request.body.value
        }

        const expense = await ExpensesRepository.create(body, request.user.id)

        await sendEmailNewExpensesSuccess('Despesa cadastrada!', request.user.email, expense)

        return expense
    }

    static async listAllExpenses(idUser: number) {
        return ExpensesRepository.listAll(idUser)
    }

    static async listExpense(request: JwtRequest) {
        return ExpensesRepository.list(parseInt(request.params.id), request.user.id)
    }

    static async updateExpense(request: JwtRequest) {
        return ExpensesRepository.update(request.body, parseInt(request.params.id), request.user.id)
    }

    static async deleteExpense(request: JwtRequest) {
        return ExpensesRepository.delete(parseInt(request.params.id), request.user.id)
    }
}
