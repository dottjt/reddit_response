import { Context, Next } from 'koa';
import fse from 'fs-extra';
import path from 'path';

import { SetMarkerPayload } from '../types/tamperMonkeyTypes';
import { UsernameType, ConfigType } from '../util/config';

const chooseCorrectUsernameString = (usernameType: UsernameType): string => {
  switch (usernameType) {
    case UsernameType.rNofapUsername: {
      return 'R_NOFAP_USERNAME';
    }
    case UsernameType.rPornFreeUsername: {
      return 'R_NOFAP_CHRISTIANS_USERNAME';
    }
    case UsernameType.rNofapChristiansUsername: {
      return 'R_NOFAP_TEENS_USERNAME';
    }
    case UsernameType.rNofapTeensUsername: {
      return 'R_SEMEN_RETENTION_USERNAME';
    }
    case UsernameType.rSemenRetentionUsername: {
      return 'R_MUSLIM_NOFAP_USERNAME';
    }
    case UsernameType.rMuslimNofapUsername: {
      return '';
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

    const usernameStringReplace: string = chooseCorrectUsernameString(usernameConfig.usernameType);

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
