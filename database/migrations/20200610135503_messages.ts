import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('messages', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.uuid('username_sending').references('users.username').notNullable();
    table.uuid('username_receiving').references('users.username').notNullable();
    table.string('subject').notNullable();
    table.text('text').notNullable();
    table.string('type').notNullable();
    table.string('send_date').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('messages');
}
