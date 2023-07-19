"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert("Users", [{
      firstName: "admin",
      lastName: "admin",
      email: "admin@gmail.com",
      username: "admin",
      password: await bcrypt.hash("12345678", 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
