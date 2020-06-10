import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  knex.schema.createTable('users', function(table) {
    table.uuid('id').notNullable().unique().primary();
    table.string('username').unique();
    table.boolean('isHostile');
  });
}

// table.uuid('id').notNullable().unique().primary();
// table.uuid('users_from_id').references('users.id');
// table.uuid('users_to_id').references('users.id');


export async function down(knex: Knex): Promise<any> {
  knex.schema.dropTable('users');
}
