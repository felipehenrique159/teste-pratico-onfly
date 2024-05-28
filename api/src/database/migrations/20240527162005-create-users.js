/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
      },
      email: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
      },
      password: {
        type: Sequelize.STRING,
        autoIncrement: false,
        allowNull: false,
        primaryKey: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
