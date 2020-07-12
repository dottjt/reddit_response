import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.table('messages', function(table) {
    table.boolean('forum');
  });
};

export async function down(knex: Knex): Promise<any> {
  await knex.schema.table('messages', function(table) {
    table.dropColumn('forum');
  });
};
