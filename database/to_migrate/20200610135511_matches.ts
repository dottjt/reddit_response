import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('matches', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.uuid('username').references('users.username'); // Need to figure out these values
    table.string('match_type');
    table.string('match_regex');
    table.string('matched_text_type'); // flair_text, title_text, message_text
    table.string('flair_text');
    table.string('title_text');
    table.string('message_text');
    table.string('original_match_text');
  });
};

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('matches');
};
