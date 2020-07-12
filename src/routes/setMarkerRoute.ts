import { Context, Next } from 'koa';
import fse from 'fs-extra';
import path from 'path';

import { SetMarkerPayload } from '../types/tamperMonkeyTypes';
import { ForumType, ConfigType } from '../util/config';

const chooseCorrectUsernameString = (forumType: ForumType): string => {
  switch (forumType) {
    case ForumType.rNofapForum: {
      return 'R_NOFAP_USERNAME';
    }
    case ForumType.rPornFreeForum: {
      return 'R_PORN_FREE_USERNAME';
    }
    case ForumType.rPornAddictionForum: {
      return 'R_PORN_ADDICTION_USERNAME';
    }
    case ForumType.rNofapChristiansForum: {
      return 'R_NOFAP_CHRISTIANS_USERNAME';
    }
    case ForumType.rNofapTeensForum: {
      return 'R_NOFAP_TEENS_USERNAME';
    }
    case ForumType.rSemenRetentionForum: {
      return 'R_SEMEN_RETENTION_USERNAME';
    }
    case ForumType.rMuslimNofapForum: {
      return 'R_MUSLIM_NOFAP_USERNAME';
    }
    default:
      return '';
  }
};

const setMarkerRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SetMarkerPayload | undefined = body?.data;
  console.log(body?.data);
  if (data) {
    const username = data.username;
    const usernameConfig: ConfigType = data.usernameConfig;

    const usernameStringReplace: string = chooseCorrectUsernameString(usernameConfig.forumType);

    console.log('usernameStringReplace', usernameStringReplace);
    if (usernameStringReplace !== '') {
      const configFile = path.resolve(__dirname, '..', 'util', 'config.ts');
      const confileFileContents = await fse.readFile(configFile, 'utf-8');

      const regex = new RegExp(`export const ${usernameStringReplace} = '(?!NA).*;`);
      const newContents =
        confileFileContents.replace(
          regex,
          `export const ${usernameStringReplace} = '${username}';`
        );

      fse.outputFile(configFile, newContents);
      console.log(`setMarkerRoute - ${username}`);

      ctx.body = { data: { message: 'success!' } };
    }
  }
}

export default setMarkerRoute;
