'use strict';
module.exports = (sequelize, DataTypes) => {
  const message_type = sequelize.define('message_type', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    message_type: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  message_type.associate = function(models) {
    message_type.belongsTo(models.user_profile,{
      foreignKey:'created_by',
      onDelete:"CASCADE"
    });
    message_type.belongsTo(models.user_profile,{
      foreignKey:"updated_by",
      onDelete:"CASCADE"
    });
    message_type.hasMany(models.message_catalog,{
      foreignKey:"message_type_id",
      onDelete:"CASCADE"
    })
  };
  return message_type;
};