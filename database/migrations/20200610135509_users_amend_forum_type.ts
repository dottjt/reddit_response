import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.table('users', function(table) {
    table.string('forum_type');
  });
};

export async function down(knex: Knex): Promise<any> {
  await knex.schema.table('users', function(table) {
    table.dropColumn('forum_type');
  });
};
