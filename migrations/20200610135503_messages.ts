import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('messages', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.uuid('username_sending').references('users.username');
    table.uuid('username_receiving').references('users.username');
    table.string('subject');
    table.text('text');
    table.string('type'); // and respond to the different types of responses.
    table.string('send_date');
    table.boolean('isHistoric');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('messages');
}
