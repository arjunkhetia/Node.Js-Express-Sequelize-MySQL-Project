var { sequelize, Sequelize } = require("../dbconfig");

const User = sequelize.define(
  "User",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        console.log("Before Create Hook...");
      },
      afterCreate: (user, options) => {
        console.log("After Create Hook...");
      },
    },
  }
);

module.exports = User;
