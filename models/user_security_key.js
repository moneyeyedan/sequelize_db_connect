'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_security_key = sequelize.define('user_security_key', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    external_service: DataTypes.STRING,
    external_identifier: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID
  }, {
    underscored: true,
  });
  user_security_key.associate = function(models) {
    user_security_key.belongsTo(models.user,{
      foreignKey:'user_id',
      onDelete:"CASCADE"
    })
  };
  return user_security_key;
};