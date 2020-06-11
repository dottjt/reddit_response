import { Context, Next } from 'koa';
import { addNewMessage } from '../util/db';

import {
  User,
} from '../util/types';

const sendNewMessage = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;

  const to = body?.data?.to;
  const subject = body?.data?.subject;
  const message = body?.data?.message;

  await addNewMessage(to, subject, message);

  ctx.body = { data: { message: 'succes!' } };
}

export default sendNewMessage;
