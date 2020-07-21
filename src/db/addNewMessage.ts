import { v4 as uuidv4 } from 'uuid';
import knex from '../util/knex';

import { Message, SendMessageType, UserForumType } from '../types/serverTypes';

import { toMelbourneDateString } from '../util/utils/commonUtils';

import validateUser from './validateUser';

type AddNewMessageProps = {
  username_receiving: string;
  username_sending: string;
  subject: string;
  message: string;
  send_date: string;
  type: SendMessageType;
  forum_type: UserForumType;
}

const addNewMessage = async ({
  username_receiving,
  username_sending,
  subject,
  message,
  send_date,
  type,
  forum_type,
}: AddNewMessageProps): Promise<void> => {
  await validateUser(username_receiving, false, forum_type);

  const doesMessageExist = await knex<Message>('messages').where({
    username_receiving, username_sending, send_date: toMelbourneDateString(new Date(send_date))
  }).first('id');

  if (!doesMessageExist) {
    await knex<Message>('messages').insert({
      id: uuidv4(),
      username_sending,
      username_receiving,
      subject: subject,
      text: message,
      type,
      send_date: toMelbourneDateString(new Date(send_date)),
    });
  }
}

export default addNewMessage;
