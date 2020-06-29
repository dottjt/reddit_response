import { v4 as uuidv4 } from 'uuid';
import knex from '../util/knex';

import { User, Message } from '../types/serverTypes';

import { toMelbourneDateString } from '../util/util';

import validateUser from './validateUser';

type AddNewMessageProps = {
  username_receiving: string;
  username_sending: string;
  subject: string;
  message: string;
  send_date: string;
  type: string;
}

const addNewMessage = async ({
  username_receiving,
  username_sending,
  subject,
  message,
  send_date,
  type,
}: AddNewMessageProps): Promise<void> => {
  await validateUser(username_receiving, false);

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