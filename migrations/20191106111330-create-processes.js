'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('processes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      process_name: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      created_by: {
        allowNull:true,
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
        allowNull:true,
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
    return queryInterface.dropTable('processes');
  }
};