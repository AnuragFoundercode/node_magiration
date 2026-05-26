'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Aman',
        email: 'aman@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rahul',
        email: 'rahul@test.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};