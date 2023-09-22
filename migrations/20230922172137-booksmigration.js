'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },

    author: {
        type: Sequelize.STRING(50),
        allowNull: false,
    },

    isbn: {
        type: Sequelize.STRING(20), // Adjust the length according to your ISBN format
        unique: true,
        allowNull: false,
    },
    createdAt:Sequelize.DATE , 
    updateAt:Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable ( "books" )
  }
};
