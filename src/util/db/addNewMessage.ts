import { v4 as uuidv4 } from 'uuid';
import knex from '../knex';

import {
  User,
  Message,

  PopulateHistoricMessagePayload
} from '../../types/serverTypes';

import { toMelbourneDateString } from '../util';

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
    username_receiving, send_date
  }).first('id');

  if (!doesMessageExist) {
    await knex<Message>('messages').insert({
      id: uuidv4(),
      username_sending,
      username_receiving,
      subject: subject,
      text: message,
      type,
      send_date: toMelbourneDateString(new Date()),
    });
  }
}

export default addNewMessage;




// const addHistoricSentMessage = async (message: PopulateHistoricMessagePayload): Promise<void> => {
//   await validateUser(message.recipient, true);

//   const doesMessageExist = await knex<Message>('messages').where({
//     username_receiving: message.recipient, send_date: message.date
//   }).first('id');

//   if (!doesMessageExist) {
//     await knex<Message>('messages').insert({
//       id: uuidv4(),
//       username_sending: 'NeverFapDeluxe',
//       username_receiving: message.recipient,
//       subject: message.subject,
//       text: message.message,
//       is_historic: true,
//       type: 'historic',
//       send_date: toMelbourneDateString(new Date(message.date)),
//     });
//   } else {
//     console.log('message exists');
//   }
// }

// export default addHistoricSentMessage;
