"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      email: { type: DataTypes.STRING, allowNull: true }
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
