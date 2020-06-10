import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  knex.schema.createTable('messages', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.uuid('users_from_id').references('users.id');
    table.uuid('users_to_id').references('users.id');
    table.string('message_title');
    table.string('message_text');
    table.string('message_type'); // and respond to the different types of responses. 
    table.string('send_date');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  knex.schema.dropTable('messages');
}
