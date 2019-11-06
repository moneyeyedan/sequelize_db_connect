'use strict';
const uuidv1 = require('uuid/v1');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_profiles', [{
      id:uuidv1(),
      first_name: 'John',
      last_name: 'Doe',
      email_id: 'demo@demo.com',
      phone_no: "9087746685",
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_profiles', null, {});
  }
};
