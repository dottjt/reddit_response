import { v4 as uuidv4 } from 'uuid';
import knex from '../knex';

import { User, Message } from '../../types/serverTypes';

import { CompiledFullUserObject } from '../../types/tamperMonkeyTypes';

const getFullUser = async (username: string): Promise<CompiledFullUserObject> => {
  const user: User | undefined = await knex<User>('users').where({ username }).first('*');
  const sentMessagesCount = await knex<Message>('messages').where({ username_sending: username }).count('id');
  const receivedMessagesCount = await knex<Message>('messages').where({ username_receiving: username }).count('id');

  const lastSentMessage: Message | undefined = await knex<Message>('messages').where({ username_receiving: username }).first('*');
  const lastReceivedMessage: Message | undefined = await knex<Message>('messages').where({ username_receiving: username }).first('*');

  // TODO Test this. and figure out what this would actually be.
  const messageTypesSent: string[] | undefined = await knex<Message>('messages').where({ username_receiving: username, username_sending: 'NeverFapDeluxe' }).select('type');

  // TODO: Retrieve User Notes and send it to the client.

  const sentCount = Number(sentMessagesCount[0]["count(`id`)"]);
  const receivedCount = Number(receivedMessagesCount[0]["count(`id`)"]);

  const calculatedUser = calculateUserStatistics(user, sentCount, receivedCount);

  return {
    username: user.username,
    is_hostile: user.username,

    userType: calculatedUser.userType,
    userColor: calculatedUser.userColor,

    lastSentMessage,
    lastReceivedMessage,

    sentCount,
    receivedCount,

    messageTypesSent,
  };
};

type CalculateUserStatisticsProps = {
  userType: string;
  userColor: string;
}

const calculateUserStatistics = (user: User, sentCount: number, receivedCount: number): CalculateUserStatisticsProps => {
  let userType;
  let userColor;

  if (sentCount === 0 && receivedCount === 0) {
    userType = 'Fresh User!';
    userColor = 'green';
  };

  if (sentCount > 0 && receivedCount === 0) {
    userType = 'User not responded to you.';
    userColor = 'purple';
  };

  if (sentCount > 0 && receivedCount > 0) {
    userType = 'User already corresponded with.';
    userColor = 'blue';
  };

  if (user?.is_hostile) {
    userType = 'HOSTILE';
    userColor = 'red';
  }

  return {
    userType,
    userColor
  }
};

export default getFullUser;
