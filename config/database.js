require("dotenv").config();

const { 
  DB_CONNECTION,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USERNAME,
  DB_PASSWORD
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_CONNECTION,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: null,
    password: null,
    database: null,
    host: null,
    port: null,
    dialect: null,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: null,
    password: null,
    database: null,
    host: null,
    port: null,
    dialect: null,
    dialectOptions: {
      bigNumberStrings: true,
    }
  }
};
