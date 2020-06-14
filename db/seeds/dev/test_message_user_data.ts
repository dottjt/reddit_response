import * as Knex from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<any> {
  return knex('users').del()
    .then(() => {
      return knex('messages').del()
    }).then(() => {
      return knex('users').insert([
        { username: 'NeverFapDeluxe', is_hostile: false, is_historic: false },
        { username: 'NeverRespondsBack', is_hostile: false, is_historic: false },
        { username: 'RandomUser2', is_hostile: false, is_historic: false }
      ]);
    }).then(() => {
      // Me Sending a Message and User does not respond back
      return knex('messages').insert([
        {
          id: uuidv4(),
          username_sending: 'NeverFapDeluxe',
          username_receiving: 'NeverRespondsBack',
          subject: 'Hey',
          text: 'Hey',
          type: 'HeyType',
          send_date: '',
          is_historic: false,
        }
      ]);
    });
};
