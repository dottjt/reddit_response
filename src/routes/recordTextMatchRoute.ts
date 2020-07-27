import { Context, Next } from 'koa';

import { RecordTextMatchPayload } from '../types/tamperMonkeyTypes';
import knex from '../util/knex';

const recordTextMatchRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: RecordTextMatchPayload | undefined = body?.data;
  console.log(body?.data);

  if (data) {
    const flairText = data.flairText;
    const titleText = data.titleText;
    const messageText = data.messageText;

    // TODO update matches

    knex()

    ctx.body = { data: { message: 'success!' } };
  }
}

export default recordTextMatchRoute;
