import { Context, Next } from 'koa';
import { validateUser } from '../util/db';

import { User, UserInformation, Message } from '../util/types';

const checkUsernamesRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const usernames = body?.data?.usernames;
  if (!usernames) {
    throw new Error('da fuq, no usernames were sent to the server');
  }

  console.log(usernames);
  const usersList: User[] = [];

  for (const username of usernames) {
    const user = await validateUser(username);
    usersList.push(user);
  }

  ctx.body = { data: { users: usersList } };
}

export default checkUsernamesRoute;