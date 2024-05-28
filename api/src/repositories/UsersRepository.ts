import Users from "../database/models/Users";
import { RegisterUser } from "../interfaces/RegisterUser";

export default class UsersRepository {
    static async create({name, email, password}: RegisterUser) {
        return await Users.create({
            name: name,
            email: email,
            password: password
        });
    }

    static async findById(userId: number) {
        return await Users.findOne({
            where: {
                id: userId
            }
        })
    }

    static async findByEmail(email: string) {
        return await Users.findOne({
            where: {
                email: email
            }
        })
    }
}
