import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('matches', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('match_type');
    table.string('matched_text');
    table.string('original_match_text');
  });
};

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('matches');
};
