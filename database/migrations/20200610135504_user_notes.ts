import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('user_notes', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.uuid('username').references('users.username');
    table.string('content');
    table.text('text');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('user_notes');
}
