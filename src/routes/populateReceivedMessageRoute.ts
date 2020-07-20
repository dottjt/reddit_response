import { Context, Next } from 'koa';
import addNewMessage from '../db/addNewMessage';

import {

} from '../types/serverTypes';
import { PopulateReceivedMessagePayload } from '../types/tamperMonkeyTypes';
import validateUser from '../db/validateUser';

const populateReceivedMessageRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const item: PopulateReceivedMessagePayload = body?.data?.message;

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
  });

  const compiledUser = await validateUser(username_sending, false);

  ctx.body = { data: { compiledUser } };
}

export default populateReceivedMessageRoute;
