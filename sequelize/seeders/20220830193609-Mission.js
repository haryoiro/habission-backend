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
    await queryInterface.bulkInsert('Missions' , [{
      title: 'mission1',
      description: 'mission1',
      createdAt: now,
      updatedAt: now,
    }, {
      title: 'mission2',
      description: 'mission2',
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
    await queryInterface.bulkDelete('Missions', null, {});
  }
};
