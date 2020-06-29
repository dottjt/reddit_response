import { Context, Next } from 'koa';
import fse from 'fs-extra';
import path from 'path';

import addNewUserNote from '../db/addNewUserNote';
import { SendUserNotePayload } from '../types/tamperMonkeyTypes';

const setMarkerRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SendUserNotePayload | undefined = body?.data;
  console.log(body?.data);
  if (data) {
    const username = data.username;
    const configFile = path.resolve(__dirname, '..', 'util', 'config.ts');

    const confileFileContents = await fse.readFile(configFile, 'utf-8');

    const newContents =
      confileFileContents.replace(
        /export const USERNAME = '(?!NA).*;/,
        `export const USERNAME = '${username}';`
      );

    fse.outputFile(configFile, newContents);
    console.log(`setMarkerRoute - ${username}`);

    ctx.body = { data: { message: 'success!' } };
  }
}

export default setMarkerRoute;
