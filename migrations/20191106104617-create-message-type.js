'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('message_types', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      message_type: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      created_by: {
        type: Sequelize.UUID,
        onDelete:"CASCADE",
        reference:{
          model:{
            tableName:"user_profiles",
            schema:"public"
          },
          key:"id"
        }
      },
      updated_by: {
        type: Sequelize.UUID,
        onDelete:"CASCADE",
        reference:{
          model:{
            tableName:"user_profiles",
            schema:"public"
          },
          key:"id"
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('message_types');
  }
};