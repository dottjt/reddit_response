import { v4 as uuidv4 } from 'uuid';
import knex from './knex';

import { UserInformation, User, Message } from './types';

import { calculateUserStatistics } from './util';

export const validateUser = async (username: string): Promise<User> => {
  const usernameExists =
    await knex('users').where({ username }).first('username');
  if (!usernameExists) {
    await knex('users').insert({ username });
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
  }

  return compiledUser;
}

export const addMessage = async (message: Message): Promise<void> => {

}
