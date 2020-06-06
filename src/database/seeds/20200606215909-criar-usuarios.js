"use strict";

const bcrypt = require("bcryptjs");
module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Maria",
          email: "maria@i.com",
          password_hash: await bcrypt.hash("11111111", 8),
        },
        {
          nome: "Maria2",
          email: "maria2@i.com",
          password_hash: await bcrypt.hash("11111111", 8),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("People", null, {});
  },
};
