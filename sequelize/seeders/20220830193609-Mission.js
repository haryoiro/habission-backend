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
      title: 'ゴミは捨てましたか？ ',
      description: 'mission1',
      createdAt: now,
      updatedAt: now,
    }, {
      title: 'お風呂に入りましたじゃ？',
      description: 'mission2',
      createdAt: now,
      updatedAt: now,
    },{
      title: '朝ごはんは食べましたか？',
      description: 'mission2',
      createdAt: now,
      updatedAt: now,
    },{
        title: '歯磨きはしましたか？',
        description: 'mission2',
        createdAt: now,
        updatedAt: now,
    }, {
        title: '息はしてまいますか？',
        description: 'mission2',
        createdAt: now,
        updatedAt: now,
    }, {
      title: '外に出ていますか？',
      description: 'mission2',
      createdAt: now,
      updatedAt: now,
    }, {
        title: '誰かと毎日話していますか？？',
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
