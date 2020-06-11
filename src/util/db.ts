import { v4 as uuidv4 } from 'uuid';
import knex from './knex';

import {
  User,
  Message,

  PopulateHistoricMessagePayload
} from './types';

import { calculateUserStatistics } from './util';

export const validateUser = async (username: string, isHistoric: boolean): Promise<User> => {
  const usernameExists =
    await knex('users').where({ username }).first('username');
  if (!usernameExists) {
    await knex('users').insert({ username, isHistoric });
    const newUser: User = await getFullUser(username);
    return newUser;
  } else {
    const existingUser = await getFullUser(username);
    return existingUser;
  }
};

export const getFullUser = async (username: string): Promise<User> => {
  const user = await knex('users').where({ username }).first('*');
  const sentMessagesCount = await knex('messages').where({ username_sending: username }).count('id');
  const receivedMessagesCount = await knex('messages').where({ username_receiving: username }).count('id');

  const lastSentMessage = await knex('messages').where({ username_receiving: username }).first('*');
  const lastReceivedMessage = await knex('messages').where({ username_receiving: username }).first('*');

  const sentCount = Number(sentMessagesCount[0]["count(`id`)"]);
  const receivedCount = Number(receivedMessagesCount[0]["count(`id`)"]);

  const calculatedUser = calculateUserStatistics(user, sentCount, receivedCount);

  const compiledUser = {
    username: user.username,
    isHostile: user.username,

    userType: calculatedUser.userType,
    userColor: calculatedUser.userColor,

    lastSentMessage,
    lastReceivedMessage,

    sentCount,
    receivedCount,
  };

  return compiledUser;
};

export const addHistoricSentMessage = async (message: PopulateHistoricMessagePayload): Promise<void> => {
  await validateUser(message.recipient, true);

  const doesMessageExist = await knex('messages').where({
    username_receiving: message.recipient, send_date: message.date
  }).first('id');

  if (!doesMessageExist) {
    await knex('messages').insert({
      id: uuidv4(),
      username_sending: 'NeverFapDeluxe',
      username_receiving: message.recipient,
      subject: message.subject,
      text: message.message,
      type: 'NA',
      send_date: message.date,
    });
  } else {
    console.log('message exists');
  }
}
