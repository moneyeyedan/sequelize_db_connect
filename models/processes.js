'use strict';
module.exports = (sequelize, DataTypes) => {
  const processes = sequelize.define('processes', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    process_name: DataTypes.STRING,
    url: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  processes.associate = function(models) {
      processes.belongsTo(models.user_project,{
        foreignKey:"created_by",
        onDelete:"CASCADE"
      });
      processes.belongsTo(models.user_project,{
        foreignKey:"updated_by",
        onDelete:"CASCADE"
      });
      processes.hasMany(models.process_instance,{
        foreignKey:"process_id",
        onDelete:"CASCADE"
      });
  };
  return processes;
};