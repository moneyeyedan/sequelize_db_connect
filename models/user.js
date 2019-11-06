'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    is_active: {
      type:DataTypes.BOOLEAN,
      allowNull:false
    },
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    password:{
      type:DataTypes.STRING,
      allowNull:false
    } 
  }, {
    schema:"auth",
    underscored: true,
  });
  user.associate = function(models) {
    user.hasMany(models.user_profile, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
    user.hasMany(models.user_security_key,{
      foreignKey:'user_id',
      onDelete: 'CASCADE'
    });
    user.hasMany(models.user_device_token,{
      foreignKey:'user_id',
      onDelete:'CASCADE'
    })
  };
  return user;
};