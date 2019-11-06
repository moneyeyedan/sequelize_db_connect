'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('message_catalogs', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      message_identifier: {
        type: Sequelize.BIGINT
      },
      message_text: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      message_type_id:{
        type:Sequelize.UUID,
        onDelete:"CASCADE",
        reference:{
          model:{
            tableName:"message_types",
            schema:"public"
          },
          key:"id"
        }
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
    return queryInterface.dropTable('message_catalogs');
  }
};