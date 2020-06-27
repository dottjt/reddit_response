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

import validateUser from './validateUser';

const addHistoricSentMessage = async (message: PopulateHistoricMessagePayload): Promise<void> => {
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

export default addHistoricSentMessage;
