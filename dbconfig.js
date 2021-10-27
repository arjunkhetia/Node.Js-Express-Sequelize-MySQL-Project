const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
  database: "database",
  username: "username",
  password: "password",
  logging: false,
  logQueryParameters: true,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
    evict: 1000,
  },
  retry: {
    match: [
      Sequelize.ConnectionError,
      Sequelize.ConnectionRefusedError,
      Sequelize.ConnectionTimedOutError,
      Sequelize.TimeoutError,
    ],
    max: 3,
  },
  define: {
    hooks: {
      beforeCreate: (obj) => {
        console.log('Before Create...', obj);
      },
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL DB Connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database: ", err);
  });

sequelize.sync({ alter: true }).then(() => {
  console.log(`Database & tables synchronization done!`);
});

module.exports = { sequelize, Sequelize };
