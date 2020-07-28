import { SendMessageType } from '../../types/serverTypes';
import { CompiledFullUserObject } from '../../types/tamperMonkeyTypes';
import { generatePrelimUrl } from '../utils/sendMessageUtils';
import { InitialRegExpCollection, StringObjectToMatch, MatchRegExpResponse } from './regex/regexUtil';
import { ConfigType } from '../config';
import { matchRegex } from './regex/matchRegex';

export type RegexArrayComplex = {
  sendMessageType: SendMessageType;
  regexArray: InitialRegExpCollection[];
  regexUrlGenerator: any;
  condition: boolean;
  delete: boolean;
};

export type SubFilterMatch = {
  shouldDeleteElementImmediately: boolean;
  sendMessageType: SendMessageType | undefined;
  prelimUrl: string | undefined;
  messageMatch: MatchRegExpResponse[] | undefined;
};

export const deleteImmediately = {
  shouldDeleteElementImmediately: true,
  sendMessageType: undefined,
  prelimUrl: undefined,
  messageMatch: undefined
};

export const lessThanOneDayAgo = (date: Date): boolean => {
  const DAY = 24*60*60*1000;
  const aDayAgo = Date.now() - DAY;

  return date.getTime() > aDayAgo;
}

export const calculateRegexArray = (freshUserRegexArray: RegexArrayComplex[], compiledUser: CompiledFullUserObject, stringObjectToMatch: StringObjectToMatch, usernameConfig: ConfigType) => (
  freshUserRegexArray.reduce((acc, regexItem) => {
    if (!acc.matchFound) {
      const matchArray = matchRegex(regexItem.regexArray, stringObjectToMatch)

      if (regexItem.condition && matchArray.length > 0) {
        return {
          matchObject: {
            shouldDeleteElementImmediately: regexItem.delete,
            sendMessageType: regexItem.sendMessageType,
            prelimUrl: generatePrelimUrl(compiledUser.username, regexItem.regexUrlGenerator(usernameConfig.forumType), regexItem.sendMessageType, usernameConfig),
            messageMatch: matchArray
          },
          matchFound: true
        };
      }
    }
    return acc;
  }, { matchObject: undefined, matchFound: false } as { matchObject?: SubFilterMatch, matchFound: boolean })
);
