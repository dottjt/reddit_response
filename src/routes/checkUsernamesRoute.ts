import { Context, Next } from 'koa';
import validateUser from '../util/db/validateUser';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

const checkUsernamesRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const usernames: string[] | undefined = body?.data?.usernames;
  if (!usernames) {
    throw new Error('da fuq, no usernames were sent to the server');
  }

  const usersList: CompiledFullUserObject[] = [];

  for (const username of usernames) {
    const user: CompiledFullUserObject = await validateUser(username, false);
    usersList.push(user);
  }

  ctx.body = { data: { users: usersList } };
}

export default checkUsernamesRoute;
