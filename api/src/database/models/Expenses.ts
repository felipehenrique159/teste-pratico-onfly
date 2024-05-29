import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import Customer from './Users';

export default class Expenses extends Model {
    declare id: number;
    declare description: string;
    declare date: string;
    declare value: string;
    declare user_id: number;
}

Expenses.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING(191),
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: sequelize,
    tableName: 'expenses',
    timestamps: false
});

Expenses.belongsTo(Customer, {
    foreignKey: 'user_id',
    targetKey: 'id',
    as: 'userExpense'
});
