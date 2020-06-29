import knex from '../util/knex';

import { User, Message, UserType } from '../types/serverTypes';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

const getFullUser = async (username: string): Promise<CompiledFullUserObject> => {
  const user: User = await knex<User>('users').where({ username }).first('*');

  const sentMessagesCount = await knex<Message>('messages').where({ username_receiving: username, username_sending: 'NeverFapDeluxe' }).count('id');
  const receivedMessagesCount = await knex<Message>('messages').where({ username_sending: username, username_receiving: 'NeverFapDeluxe' }).count('id');

  const lastSentMessage: Message | undefined = await knex<Message>('messages').where({ username_sending: 'NeverFapDeluxe', username_receiving: username }).orderBy('created_at', 'desc').first('*');
  const lastReceivedMessage: Message | undefined = await knex<Message>('messages').where({ username_sending: username, username_receiving: 'NeverFapDeluxe' }).orderBy('created_at', 'desc').first('*');

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
  userType: UserType;
  userColor: string;
}

const calculateUserStatistics = (user: User, sentCount: number, receivedCount: number): CalculateUserStatisticsProps => {
  let userType;
  let userColor;

  if (sentCount === 0 && receivedCount === 0) {
    userType = UserType.FreshUser;
    userColor = 'green';
  };

  if (sentCount > 0 && receivedCount === 0) {
    userType = UserType.UserNotRespondedBack;
    userColor = 'orange';
  };

  if (sentCount > 0 && receivedCount > 0) {
    userType = UserType.UserRespondedBack;
    userColor = 'yellow';
  };

  if (user?.is_hostile) {
    userType = UserType.UserHostile;
    userColor = 'red';
  }

  return {
    userType,
    userColor
  }
};

export default getFullUser;
