import { Context, Next } from 'koa';
import { } from '../util/db';

import { User, UserInformation, Message } from '../util/types';

const populateHistoricMessage = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const username = body?.data?.username;
  const messageDate = body?.data?.messageDate;
  const messageText = body?.data?.messageText;

  ctx.body = { cake: 'I am your best friend!' };
}

export default populateHistoricMessage;