import { Context, Next } from 'koa';
import addNewMessage from '../util/db/addNewMessage';

import { User } from '../types/serverTypes';
import { SendNewMessageSendPayload } from '../types/tamperMonkeyTypes';

const sendNewMessage = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SendNewMessageSendPayload | undefined = body?.data;

  if (data) {
    const username_sending = data.username_sending;
    const username_receiving = data.username_receiving;
    const subject = data.subject;
    const send_date = data.send_date;
    const message = data.message;
    const type = data.type;

    await addNewMessage({
      username_sending,
      username_receiving,
      subject,
      message,
      send_date,
      type,
    });

    ctx.body = { data: { message: 'succes!' } };
  }
}

export default sendNewMessage;
