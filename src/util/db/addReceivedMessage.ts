import { v4 as uuidv4 } from 'uuid';
import knex from '../knex';

import { PopulateHistoricMessagePayload, Message } from '../../types/serverTypes';

import { toMelbourneDateString } from '../util';
import validateUser from './validateUser';

const addReceivedMessage = async (message: PopulateHistoricMessagePayload, isHistoric: boolean): Promise<void> => {
  await validateUser(message.recipient, isHistoric);

  const doesMessageExist = await knex<Message>('messages').where({
    username_sending: message.recipient, send_date: message.date
  }).first('id');

  if (!doesMessageExist) {
    await knex<Message>('messages').insert({
      id: uuidv4(),
      username_sending: message.recipient,
      username_receiving: 'NeverFapDeluxe',
      subject: message.subject,
      text: message.message,
      type: 'historic',
      send_date: toMelbourneDateString(new Date(message.date)),
    });
  } else {
    console.log('message exists');
  }
}

export default addReceivedMessage;
