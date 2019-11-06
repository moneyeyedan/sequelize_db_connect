'use strict';
module.exports = (sequelize, DataTypes) => {
  const process_instance = sequelize.define('process_instance', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    is_processing: DataTypes.BOOLEAN,
    process_status: DataTypes.TEXT,
    error_message: DataTypes.TEXT,
    is_active: DataTypes.BOOLEAN,
   
  }, {
    underscored: true,
  });
  process_instance.associate = function(models) {
    process_instance.belongsTo(models.user_project,{
      foreignKey:"created_by",
      onDelete:"CASCADE"
    });
    process_instance.belongsTo(models.user_project,{
      foreignKey:"updated_by",
      onDelete:"CASCADE"
    });
    process_instance.belongsTo(models.message_catalog,{
      foreignKey:"message_catalog_id",
      onDelete:"CASCADE"
    });
    process_instance.belongsTo(models.processes,{
      foreignKey:"process_id",
      onDelete:"CASCADE"
    })
  };
  return process_instance;
};