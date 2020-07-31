import { Context, Next } from 'koa';

import { SetUserLinkPayload } from '../types/tamperMonkeyTypes';
import knex from '../util/knex';

const manuallySetUserLinkSentRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SetUserLinkPayload | undefined = body?.data;
  console.log(body?.data);

  if (data) {
    const username = data.username;

    // // const username = data.username;


    // TODO check if match already exists.
    // TODO update matches

    knex('users').where({ username }).insert({

    })

    ctx.body = { data: { message: 'success!' } };
  }
}

export default manuallySetUserLinkSentRoute;
