import { Context, Next } from 'koa';
import validateUser from '../db/validateUser';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { UserForumType } from '../types/serverTypes';

const checkUsernamesRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const usernames: string[] | undefined = body?.data?.usernames;
  const forum_type: UserForumType | undefined = body?.data?.forum_type;
  if (!usernames) {
    throw new Error('da fuq, no usernames were sent to the server');
  }
  if (!forum_type) {
    throw new Error('da fuq, no forum_type were sent to the server');
  }

  const usersList: CompiledFullUserObject[] = [];

  for (const username of usernames) {
    const user: CompiledFullUserObject = await validateUser(username, false, forum_type);
    usersList.push(user);
  }

  ctx.body = { data: { users: usersList } };
}

export default checkUsernamesRoute;
