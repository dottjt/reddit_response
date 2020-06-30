import { Context, Next } from 'koa';
import knex from '../util/knex';
import { User } from '../types/serverTypes';


const markUserChattedRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: { username: string } | undefined = body?.data;

  if (data) {
    const username = data.username;

    console.log(`markUserChattedRoute - ${username}`)

    await knex<User>('users')
      .where({ username })
      .update({
        user_chat_function_utilised: true
      });

    ctx.body = { data: { message: 'success!' } };
  }
}

export default markUserChattedRoute;
