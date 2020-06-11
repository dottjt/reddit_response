import Knex from 'knex';
import path from 'path';

// Initialize knex.
const knex = Knex({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, "..", "..", "db", "database.sqlite")
  }
});

export default knex;
