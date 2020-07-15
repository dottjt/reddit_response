import { Context, Next } from 'koa';
import addNewMessage from '../db/addNewMessage';

import {

} from '../types/serverTypes';
import { PopulateReceivedMessagesPayloadEXTREME } from '../types/tamperMonkeyTypes';

const populateReceivedMessagesRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const messages: PopulateReceivedMessagesPayloadEXTREME[] = body?.data?.messages;

  if (messages) {
    for (const item of messages) {
      const username_sending = item.username_sending;
      const username_receiving = item.username_receiving;
      const subject = item.subject;
      const send_date = item.date;
      const message = item.message;
      const type = item.type;

      await addNewMessage({
        username_sending,
        username_receiving,
        subject,
        send_date,
        message,
        type,
      })
    }

    ctx.body = { data: { message: 'received messages successfully added' } };
  }
}

export default populateReceivedMessagesRoute;
