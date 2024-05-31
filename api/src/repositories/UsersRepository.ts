import Users from "../database/models/Users";
import { RegisterUser } from "../interfaces/RegisterUser";

export default class UsersRepository {
    static async create(user: RegisterUser) {
        return await Users.create({
            name: user.name,
            email: user.email,
            password: user.password
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
