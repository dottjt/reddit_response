import { Context, Next } from 'koa';
import validateUser from '../db/validateUser';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

const latestUnreadMessagesInformationRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const username: string = body?.data?.username;

  const user: CompiledFullUserObject = await validateUser(username, false);

  ctx.body = { data: { user } };
}

export default latestUnreadMessagesInformationRoute;
