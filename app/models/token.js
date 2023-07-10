"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    static associate(models) {
      models.Token.belongsTo(models.User, { foreignKey: "id" });
    }
  }
  Token.init({
    userId: DataTypes.INTEGER,
    token: DataTypes.TEXT,
    revoke: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "Token",
  });
  return Token;
};
