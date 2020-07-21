import { Context, Next } from 'koa';
import addNewMessage from '../db/addNewMessage';

import { SendNewMessageSendPayload } from '../types/tamperMonkeyTypes';
import updateUserSentLinks from '../db/updateUserSentLinks';

const sendNewMessageRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SendNewMessageSendPayload | undefined = body?.data;

  if (data) {
    const username_sending = data.username_sending;
    const username_receiving = data.username_receiving;
    const subject = data.subject;
    const send_date = data.send_date;
    const message = data.message;
    const type = data.type;
    const forum_type = data.forum_type;

    console.log(`sendNewMessageRoute - ${username_receiving} - ${type} - ${message}`)

    await addNewMessage({
      username_sending,
      username_receiving,
      subject,
      message,
      send_date,
      type,
      forum_type,
    });

    if (username_sending === 'NeverFapDeluxe') {
      await updateUserSentLinks({
        username_receiving,
        message
      })
    }

    ctx.body = { data: { message: 'success!' } };
  }
}

export default sendNewMessageRoute;
