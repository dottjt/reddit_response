import { Context, Next } from 'koa';
import knex from '../util/knex';
import { User } from '../types/serverTypes';


const markUserHostileRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: { username: string } | undefined = body?.data;

  if (data) {
    const username = data.username;

    console.log(`markUserHostileRoute - ${username}`)

    await knex<User>('users')
      .where({ username })
      .update({
        is_hostile: true
      });

    ctx.body = { data: { message: 'success!' } };
  }
}

export default markUserHostileRoute;
