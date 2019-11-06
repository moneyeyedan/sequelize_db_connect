'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('process_instances', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      process_id: {
        type: Sequelize.UUID,
        onDelete:"CASCADE",
        reference:{
          model:{
            tableName:"processes",
            schema:"public"
          },
          key:"id"
        }
      },
      is_processing: {
        type: Sequelize.BOOLEAN
      },
      message_catalog_id: {
        type: Sequelize.UUID,
        onDelete:"CASCADE",
        reference:{
          model:{
            tableName:"message_catalogs",
            schema:"public"
          },
          key:"id"
        }
      },
      process_status: {
        type: Sequelize.TEXT
      },
      error_message: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('process_instances');
  }
};