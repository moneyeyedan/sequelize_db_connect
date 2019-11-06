'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_device_token = sequelize.define('user_device_token', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    platform: DataTypes.STRING,
    device_token: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    underscored: true,
  });
  user_device_token.associate = function(models) {
    user_device_token.belongsTo(models.user,{
      foreignKey:'user_id',
      onDelete:'CASCADE'
    })
  };
  return user_device_token;
};