'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const now = new Date();
    await queryInterface.bulkInsert('Users', [{
      name: 'user1',
      pass: 'password',
      createdAt: now,
      updatedAt: now,
    }, {
      name: 'user2',
      pass: 'password',
      createdAt: now,
      updatedAt: now,
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
