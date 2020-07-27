import { SendMessageType } from '../../types/serverTypes';
import { CompiledFullUserObject } from '../../types/tamperMonkeyTypes';
import { generatePrelimUrl } from '../utils/sendMessageUtils';
import { matchRegex, RegexFilters, RegexFiltersMatch } from './regexUtil';
import { ConfigType } from '../config';

export type RegexArrayComplex = {
  sendMessageType: SendMessageType;
  regexArray: RegexFilters[];
  regexUrlGenerator: any;
  condition: boolean;
  delete: boolean;
};

export type RegexTextObject = {
  titleText: string;
  flairText: string;
  messageText: string;
}

export type SubFilterMatch = {
  shouldDeleteElementImmediately: boolean;
  sendMessageType: SendMessageType | undefined;
  prelimUrl: string | undefined;
  messageMatch: RegexFiltersMatch[] | undefined;
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

export const calculateRegexArray = (freshUserRegexArray: RegexArrayComplex[], compiledUser: CompiledFullUserObject, regexTextObject: RegexTextObject, usernameConfig: ConfigType) => (
  freshUserRegexArray.reduce((acc, regexItem) => {
    if (!acc.matchFound) {
      const matchArray = matchRegex(regexItem.regexArray, regexTextObject)

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
