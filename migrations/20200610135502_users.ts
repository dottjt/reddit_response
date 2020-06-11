import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('users', function(table) {
    table.string('username').notNullable().unique().primary();
    table.boolean('isHostile');

    table.timestamps(true, true);
  });
}

// NOTE: I have decided that an id is not necessary. This may well bite me in the ass, but I want this database to be small. XD
// table.uuid('id').notNullable().unique();
// table.index(['id']);

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('users');
}
