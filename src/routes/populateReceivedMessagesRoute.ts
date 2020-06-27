import { Context, Next } from 'koa';
import addNewMessage from '../util/db/addNewMessage';

import {
  // User,
  // Message,
  PopulateHistoricMessagePayload
} from '../types/serverTypes';

const populateReceivedMessagesRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  // const messages: PopulateHistoricMessagePayload[] = body?.data?.messages;

  // // subject
  // // recipient
  // // message
  // // date

  // if (messages) {
  //   for (const message of messages) {
  //     await addNewMessage({
  //       username_sending: 'NeverFapDeluxe',
  //       username_receiving: to,
  //       to: 'NeverFapDeluxe',
  //       subject: message.subject,
  //       message: message.message,
  //       send_date: message.date,
  //       type: 'historic',
  //     })
  //   }

  //   ctx.body = { data: { message: 'received messages successfully added' } };
  // }
}

export default populateReceivedMessagesRoute;
