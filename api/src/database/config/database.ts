import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('teste_pratico', 'mysql_user', '12345678', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export default sequelize;
