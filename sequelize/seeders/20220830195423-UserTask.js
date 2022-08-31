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

    await queryInterface.bulkInsert('UserTasks', [{
      user_id: 1,
      mission_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      done: true,
    }, {
      user_id: 1,
      mission_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      done: true,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserTasks', null, {});
  }
};
