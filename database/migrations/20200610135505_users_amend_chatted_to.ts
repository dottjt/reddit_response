import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.table('users', function(table) {
    table.boolean('user_chat_function_utilised');
  });
};

export async function down(knex: Knex): Promise<any> {
  await knex.schema.table('users', function(table) {
    table.dropColumn('user_chat_function_utilised');
  });
};
