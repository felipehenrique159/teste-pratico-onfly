import { DataTypes, Model, Sequelize } from 'sequelize'
import sequelize from '../config/database'

export default class Users extends Model {
    declare id: number
    declare name: string
    declare email: string
    declare password: string
}

Users.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },
    email: {
        type: DataTypes.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    },
    password: {
        type: DataTypes.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
    }
},{
    sequelize: sequelize,
    tableName: 'users',
    timestamps: false
})