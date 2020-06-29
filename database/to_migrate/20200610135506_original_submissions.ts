import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('original_submissions', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.uuid('username').references('users.username');
    table.string('submission_text');
    table.string('submission_date');
  });
};

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('original_submissions');
};
