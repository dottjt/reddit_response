import knex from '../util/knex';

import { User, Message, UserType, LastMessageType } from '../types/serverTypes';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

const getFullUser = async (username: string): Promise<CompiledFullUserObject> => {
  const user: User = await knex<User>('users').where({ username }).first('*');

  const sentMessagesCount = await knex<Message>('messages').where({ username_receiving: username, username_sending: 'NeverFapDeluxe' }).count('id');
  const receivedMessagesCount = await knex<Message>('messages').where({ username_sending: username, username_receiving: 'NeverFapDeluxe' }).count('id');

  // last sent by NFD
  const lastSentMessage: Message | undefined = await knex<Message>('messages').where({ username_sending: 'NeverFapDeluxe', username_receiving: username }).orderBy('created_at', 'desc').first('*');
  // last sent by User
  const lastReceivedMessage: Message | undefined = await knex<Message>('messages').where({ username_sending: username, username_receiving: 'NeverFapDeluxe' }).orderBy('created_at', 'desc').first('*');

  const messageTypesSent: { type: string }[] | undefined = await knex<Message>('messages').where({ username_receiving: username, username_sending: 'NeverFapDeluxe' }).select('type');
  const messageTypesSentString = messageTypesSent?.map(message => message.type);

  const lastSentMessages: Message[] | undefined = await knex<Message>('messages').where({ username_sending: 'NeverFapDeluxe', username_receiving: username }).select('type');
  const absoluteLastSentMessageType: LastMessageType = retrieveAbsoluteLastMessage(lastSentMessages);

  const sentCount = Number(sentMessagesCount[0]["count(`id`)"]);
  const receivedCount = Number(receivedMessagesCount[0]["count(`id`)"]);

  const calculatedUser = calculateUserStatistics(user, sentCount, receivedCount, messageTypesSentString);

  return {
    username: user.username,
    is_hostile: user.is_hostile,
    user_chat_function_utilised: user.user_chat_function_utilised,

    website_homepage_link_sent: user?.website_homepage_link_sent,
    subreddit_link_sent: user?.subreddit_link_sent,
    discord_link_sent: user?.discord_link_sent,
    podcast_link_sent: user?.podcast_link_sent,

    userType: calculatedUser.userType,
    userColor: calculatedUser.userColor,

    lastSentMessage,
    lastReceivedMessage,
    absoluteLastSentMessageType,

    sentCount,
    receivedCount,

    messageTypesSent: messageTypesSentString,
  };
};

type CalculateUserStatisticsProps = {
  userType: UserType;
  userColor: string;
}

const calculateUserStatistics = (user: User, sentCount: number, receivedCount: number, messageTypesSent: string[] | undefined): CalculateUserStatisticsProps => {
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

  if (messageTypesSent) {
    if (messageTypesSent.find(messageType => messageType.includes('follow'))) {
      userType = UserType.FollowMessageSent;
      userColor = 'purple';
    }
  }

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

const retrieveAbsoluteLastMessage = (messages: Message[] | undefined) => {
  if (messages?.find(message => message.type.includes('final'))) {
    return {
      type: 'DONE',
      colour: 'red'
    }
  }
  if (messages?.find(message => message.type.includes('middle'))) {
    return {
      type: 'SEND FINAL',
      colour: 'orange'
    }
  }
  if (messages?.find(message => message.type.includes('start')) || messages?.find(message => message.type.includes('follow'))) {
    return {
      type: 'SEND MIDDLE',
      colour: 'yellow'
    }
  }

  return {
    type: 'CUSTOM',
    colour: 'yellow'
  }
}

export default getFullUser;
