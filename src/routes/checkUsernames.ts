import { Context, Next } from 'koa';
import { } from '../util/db';

import { User, UserInformation, Message } from '../util/types';

const checkUsernamesRoute = (db) => async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const usernames = body?.data?.usernames;
  if (!usernames) {
    throw new Error('da fuq, no usernames were sent to the server');
  }

  usernames

  ctx.body = { cake: 'I am your best friend!' };
}

export default checkUsernamesRoute;