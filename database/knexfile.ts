import { config } from 'dotenv';
config();

import path from 'path';
// require('dotenv').config();

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, 'databases', 'dev_reddit_database.sqlite')
    },
    seeds: {
      directory: path.resolve(__dirname, 'seeds', 'dev')
    }
  },
  production: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, 'databases', 'prod_reddit_database.sqlite')
    },
    // seeds: {
    //   directory: path.resolve(__dirname, 'seeds', 'prod')
    // }
  },
  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }
};
