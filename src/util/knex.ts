import Knex from 'knex';
import path from 'path';

const database = process.env.NODE_ENV === 'dev' ? 'dev_reddit_database.sqlite' : 'prod_reddit_database.sqlite';

// Initialize knex.
const knex = Knex({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, "..", "..", "db", database),
  }
});

export default knex;
