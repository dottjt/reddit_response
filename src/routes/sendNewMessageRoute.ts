import { Context, Next } from 'koa';
import { addNewMessage } from '../util/db/validateUser';

import {
  User,
} from '../types';

const sendNewMessage = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;

  const to = body?.data?.to;
  const subject = body?.data?.subject;
  const message = body?.data?.message;
  const type = body?.data?.type;

  await addNewMessage(to, subject, message, type);

  ctx.body = { data: { message: 'succes!' } };
}

export default sendNewMessage;
