'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      payload_hex: {
        type: Sequelize.STRING
      },
      batt: {
        type: Sequelize.INTEGER
      },
      temp: {
        type: Sequelize.INTEGER
      },
      hum: {
        type: Sequelize.INTEGER
      },
      pm25: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pms');
  }
};