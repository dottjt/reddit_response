import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.table('users', function(table) {
    table.boolean('website_homepage_link_sent');
    table.boolean('subreddit_link_sent');
    table.boolean('discord_link_sent');
    table.boolean('podcast_link_sent');
    table.boolean('user_chat_function_utilised');
  });
};

export async function down(knex: Knex): Promise<any> {
  await knex.schema.table('users', function(table) {
    table.dropColumn('website_homepage_link_sent');
    table.dropColumn('subreddit_link_sent');
    table.dropColumn('discord_link_sent');
    table.dropColumn('podcast_link_sent');
    table.dropColumn('user_chat_function_utilised');
  });
};
