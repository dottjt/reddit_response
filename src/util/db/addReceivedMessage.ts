import { v4 as uuidv4 } from 'uuid';
import knex from '../knex';

import {
  User,
  Message,

  PopulateHistoricMessagePayload
} from '../../types';

import {
  calculateUserStatistics,
  toMelbourneDateString
} from '../util';

export const addNewUserNote = async (username: string, userNote: string): Promise<void> => {
  await validateUser(username, false);
  // TODO Create this function.

   await knex('users').where({ username }).first('username');
};

export const validateUser = async (username: string, is_historic: boolean): Promise<User> => {
  const usernameExists =
    await knex('users').where({ username }).first('username');
  if (!usernameExists) {
      await knex('users').insert({ id: uuidv4(), username, is_historic });
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

  const typesSent = await knex('messages').where({ username_receiving: username, username_sending: 'NeverFapDeluxe' }).select('type');

  // TODO: Retrieve User Notes and send it to the client.

  const sentCount = Number(sentMessagesCount[0]["count(`id`)"]);
  const receivedCount = Number(receivedMessagesCount[0]["count(`id`)"]);

  const calculatedUser = calculateUserStatistics(user, sentCount, receivedCount);

  const compiledUser = {
    username: user.username,
    is_hostile: user.username,

    userType: calculatedUser.userType,
    userColor: calculatedUser.userColor,

    lastSentMessage,
    lastReceivedMessage,

    sentCount,
    receivedCount,

    typesSent,
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
      is_historic: true,
      type: 'historic',
      send_date: toMelbourneDateString(new Date(message.date)),
    });
  } else {
    console.log('message exists');
  }
}

export const addReceivedMessage = async (message: PopulateHistoricMessagePayload, isHistoric: boolean): Promise<void> => {
  await validateUser(message.recipient, isHistoric);

  const doesMessageExist = await knex('messages').where({
    username_sending: message.recipient, send_date: message.date
  }).first('id');

  if (!doesMessageExist) {
    await knex('messages').insert({
      id: uuidv4(),
      username_sending: message.recipient,
      username_receiving: 'NeverFapDeluxe',
      subject: message.subject,
      text: message.message,
      is_historic: isHistoric,
      type: 'historic',
      send_date: toMelbourneDateString(new Date(message.date)),
    });
  } else {
    console.log('message exists');
  }
}

export const addNewMessage = async (to: string, subject: string, message: string, type: string): Promise<void> => {
  await validateUser(to, false);

  await knex('messages').insert({
    id: uuidv4(),
    username_sending: 'NeverFapDeluxe',
    username_receiving: to,
    subject: subject,
    text: message,
    is_historic: false,
    type,
    send_date: toMelbourneDateString(new Date()),
  });
}
