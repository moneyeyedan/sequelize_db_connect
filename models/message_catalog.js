'use strict';
module.exports = (sequelize, DataTypes) => {
  const message_catalog = sequelize.define('message_catalog', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    message_identifier: DataTypes.BIGINT,
    message_text: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    underscored: true,
  });
  message_catalog.associate = function(models) {
    message_catalog.belongsTo(models.user_profile,{
      foreignKey: "created_by",
      onDelete:"CASCADE"
    });
    message_catalog.belongsTo(models.user_profile,{
      foreignKey: "updated_by",
      onDelete:"CASCADE"
    });
    message_catalog.hasMany(models.process_instance,{
      foreignKey:"message_catalog_id",
      onDelete:"CASCADE"
    });
    message_catalog.belongsTo(models.message_type,{
      foreignKey:"message_type_id",
      onDelete:"CASCADE"
    })
  };
  return message_catalog;
};