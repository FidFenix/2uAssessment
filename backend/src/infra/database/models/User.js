'use strict';

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    team: DataTypes.STRING
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    classMethods: {
      associate() {
        // associations can be defined here
      }
    }
  });

  return User;
};
