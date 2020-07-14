import { Context, Next } from 'koa';
import fse from 'fs-extra';
import path from 'path';

import { SetLastMessageInboxUsernamePayload } from '../types/tamperMonkeyTypes';

const setLastInboxMessageUsernameRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SetLastMessageInboxUsernamePayload | undefined = body?.data;
  console.log(body?.data);
  if (data) {
    const username = data.username;
    const message = data.message;

    const configFile = path.resolve(__dirname, '..', 'util', 'config.ts');
    const confileFileContents = await fse.readFile(configFile, 'utf-8');

    const regex = new RegExp(`export const INBOX_LAST_MESSAGE_USER = '(?!NA).*;`);
    const newContents =
      confileFileContents.replace(
        regex,
        `export const INBOX_LAST_MESSAGE_USER = '${username}';`
      );

    fse.outputFile(configFile, newContents);
    console.log(`setLastInboxMessageUsernameRoute - ${username}`);

    ctx.body = { data: { message: 'success!' } };
  }
}

export default setLastInboxMessageUsernameRoute;
