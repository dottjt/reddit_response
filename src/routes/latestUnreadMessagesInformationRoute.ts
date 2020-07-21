import { Context, Next } from 'koa';
import validateUser from '../db/validateUser';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { UserForumType } from '../types/serverTypes';

const latestUnreadMessagesInformationRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const username: string = body?.data?.username;
  const forum_type: UserForumType = body?.data?.forum_type;

  const user: CompiledFullUserObject = await validateUser(username, false, forum_type);

  ctx.body = { data: { user } };
}

export default latestUnreadMessagesInformationRoute;
