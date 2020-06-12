// Update with your config settings.

module.exports = {
  dev: {
    client: "sqlite3",
    connection: {
      filename: "./db/dev_reddit_database.sqlite"
    }
  },
  prod: {
    client: "sqlite3",
    connection: {
      filename: "./db/prod_reddit_database.sqlite"
    }
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
