import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  return knex('users').del()
    .then(() => {
      return knex('messages').del()
    }).then(() => {
      return knex('users').insert([
        { username: 'NeverFapDeluxe', is_hostile: false, is_historic: false },
        { username: 'RandomUser1', is_hostile: false, is_historic: false },
        { username: 'RandomUser2', is_hostile: false, is_historic: false }
      ]);
    }).then(() => {
      return knex('messages').insert([

        { username: 'NeverFapDeluxe', is_hostile: false, is_historic: false },
        { username: 'RandomUser1', is_hostile: false, is_historic: false },
        { username: 'RandomUser2', is_hostile: false, is_historic: false }
      ]);
    });
};
