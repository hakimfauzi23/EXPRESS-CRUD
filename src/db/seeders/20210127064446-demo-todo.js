'use strict';
const faker = require('faker')

const todos = (() => {
  const data = []
  for (let i = 0; i < 50; i++) {
    data.push(
      {
        title: faker.lorem.sentence(),
        desc: faker.lorem.sentence(),
        status: true,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      }
    )
  }
  return data
})()

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', todos)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
