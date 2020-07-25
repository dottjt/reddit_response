import { Context, Next } from 'koa';
import fse from 'fs-extra';
import path from 'path';

import { SetMarkerPayload } from '../types/tamperMonkeyTypes';
import { ForumType, ConfigType } from '../util/config';

const chooseCorrectUsernameString = (forumType: ForumType): {
  usernameStringReplace: string;
  timeframeStringReplace: string;
  timeframeStartDateReplace: string;
} => {
  try {
    switch (forumType) {
      case ForumType.rNofapForum: {
        return {
          usernameStringReplace: 'R_NOFAP_USERNAME',
          timeframeStringReplace: 'R_NOFAP_TIMESTAMP',
          timeframeStartDateReplace: 'R_NOFAP_START_DATE',
        }
      }
      case ForumType.rPornFreeForum: {
        return {
          usernameStringReplace: 'R_PORN_FREE_USERNAME',
          timeframeStringReplace: 'R_PORN_FREE_TIMESTAMP',
          timeframeStartDateReplace: 'R_PORN_FREE_START_DATE',
        }
      }
      case ForumType.rPornAddictionForum: {
        return {
          usernameStringReplace: 'R_PORN_ADDICTION_USERNAME',
          timeframeStringReplace: 'R_PORN_ADDICTION_TIMESTAMP',
          timeframeStartDateReplace: 'R_PORN_ADDICTION_START_DATE',
        }
      }
      case ForumType.rNofapChristiansForum: {
        return {
          usernameStringReplace: 'R_NOFAP_CHRISTIANS_USERNAME',
          timeframeStringReplace: 'R_NOFAP_CHRISTIANS_TIMESTAMP',
          timeframeStartDateReplace: 'R_NOFAP_CHRISTIANS_START_DATE',
        }
      }
      case ForumType.rNofapTeensForum: {
        return {
          usernameStringReplace: 'R_NOFAP_TEENS_USERNAME',
          timeframeStringReplace: 'R_NOFAP_TEENS_TIMESTAMP',
          timeframeStartDateReplace: 'R_NOFAP_TEENS_START_DATE',
        }
      }
      case ForumType.rSemenRetentionForum: {
        return {
          usernameStringReplace: 'R_SEMEN_RETENTION_USERNAME',
          timeframeStringReplace: 'R_SEMEN_RETENTION_TIMESTAMP',
          timeframeStartDateReplace: 'R_SEMEN_RETENTION_START_DATE',
        }
      }
      case ForumType.rMuslimNofapForum: {
        return {
          usernameStringReplace: 'R_MUSLIM_NOFAP_USERNAME',
          timeframeStringReplace: 'R_MUSLIM_NOFAP_TIMESTAMP',
          timeframeStartDateReplace: 'R_MUSLIM_NOFAP_START_DATE',
        }
      }
    }
  } catch(e) {
    throw new Error(e);
  }
};

const setMarkerRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SetMarkerPayload | undefined = body?.data;
  console.log(body?.data);
  if (data) {
    const username = data.username;
    const usernameConfig: ConfigType = data.usernameConfig;
    const hoursAgoText: string = data.hoursAgoText;

    const {
      usernameStringReplace,
      timeframeStringReplace,
      timeframeStartDateReplace
    } = chooseCorrectUsernameString(usernameConfig.forumType);

    console.log('usernameStringReplace', usernameStringReplace);
    console.log('timeframeStringReplace', timeframeStringReplace);
    console.log('hoursAgoText', hoursAgoText);

    if (usernameStringReplace && timeframeStringReplace && timeframeStartDateReplace) {
      const configFile = path.resolve(__dirname, '..', 'util', 'config.ts');
      const confileFileContents = await fse.readFile(configFile, 'utf-8');

      const regex = new RegExp(`export const ${usernameStringReplace} = '(?!NA).*;`);
      const regexTimeframe = new RegExp(`export const ${timeframeStringReplace} = '(?!NA).*;`);
      const regexStartDate = new RegExp(`export const ${timeframeStartDateReplace} = '(?!NA).*;`);

      const newContents =
        confileFileContents.replace(
          regex,
          `export const ${usernameStringReplace} = '${username}';`
        ).replace(
          regexTimeframe,
          `export const ${timeframeStringReplace} = '${hoursAgoText}';`
        ).replace(
          regexStartDate,
          `export const ${timeframeStartDateReplace} = '${new Date()}';`
        );

      fse.outputFile(configFile, newContents);
      console.log(`setMarkerRoute - ${username}`);

      ctx.body = { data: { message: 'success!' } };
    }
  }
}

export default setMarkerRoute;
