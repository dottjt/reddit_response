import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  knex.schema.createTable('messages', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.uuid('users_from_id').references('users.id');
    table.uuid('users_to_id').references('users.id');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  knex.schema.dropTable('messages');
}
