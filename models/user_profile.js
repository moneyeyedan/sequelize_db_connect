'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_profile = sequelize.define('user_profile', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    first_name:{
      type:DataTypes.STRING,
      allowNull:false
    } ,
    last_name:{
      type: DataTypes.STRING,
      allowNull:false
    },
    phone_no:{
      type: DataTypes.STRING,
      allowNull:false
    },
    email_id:{
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    underscored: true,
  });
  user_profile.associate = function(models) {
    user.belongsTo(models.user, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    });
    user_profile.hasMany(models.user,{
      foreignKey: 'user_profile_id',
      onDelete: 'CASCADE'
    });
    user_profile.hasMany(models.message_type,{
      foreignKey: 'created_by',
      onDelete: 'CASCADE'
    });
    user_profile.hasMany(models.message_type,{
      foreignKey: 'updated_by',
      onDelete: 'CASCADE'
    });
    user_profile.hasMany(models.message_catalog,{
      foreignKey: 'created_by',
      onDelete: 'CASCADE'
    });
    user_profile.hasMany(models.message_catalog,{
      foreignKey: 'updated_by',
      onDelete: 'CASCADE'
    });
    user_profile.hasMany(models.process_instance,{
      foreignKey: 'created_by',
      onDelete: 'CASCADE'
    });
    user_profile.hasMany(models.process_instance,{
      foreignKey: 'updated_by',
      onDelete: 'CASCADE'
    });
    user_profile.hasMany(models.processes,{
      foreignKey: 'created_by',
      onDelete: 'CASCADE'
    });
    user_profile.hasMany(models.processes,{
      foreignKey: 'updated_by',
      onDelete: 'CASCADE'
    });
  };
  return user_profile;
};