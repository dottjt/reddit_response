import { Context, Next } from 'koa';
import fse from 'fs-extra';
import path from 'path';

import { SetMarkerPayload } from '../types/tamperMonkeyTypes';
import { UsernameType, ConfigType } from '../util/config';

const setLastMessageRepliedRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SetMarkerPayload | undefined = body?.data;

  // TODO
  if (data) {
    const username = data.username;
    // const message = data.message;
    const usernameConfig: ConfigType = data.usernameConfig;

    ctx.body = { data: { message: 'success!' } };
  }
}

export default setLastMessageRepliedRoute;
