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

const getFullUser = async (username: string): Promise<User> => {
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

export default getFullUser;
