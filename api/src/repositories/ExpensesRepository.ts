import Expenses from "../database/models/Expenses";
import { RegisterExpense } from "../interfaces/RegisterExpense";

export default class ExpensesRepository {
    static async create(body: RegisterExpense, idUser: number) {
        return await Expenses.create({
            description: body.description,
            date: body.date,
            value: body.value,
            user_id: idUser
        });
    }

    static async listAll(idUser: number) {
        return await Expenses.findAll({
            where: {
                user_id: idUser
            }
        });
    }

    static async list(idExpense: number, idUser: number) {
        return await Expenses.findOne({
            where: {
                id: idExpense,
                user_id: idUser
            }
        });
    }

    static async update(updatedData: any, idExpense: number, idUser: number) {
        const [updated] = await Expenses.update(updatedData, {
            where: {
                id: idExpense,
                user_id: idUser
            }
        });

        if (updated) {
            const updatedExpense = await Expenses.findOne({ where: { id: idExpense } });
            return updatedExpense;
        }
    }

    static async delete(idExpense: number, idUser: number) {
        return await Expenses.destroy({
            where: {
                id: idExpense,
                user_id: idUser
            }
        });
    }
}
