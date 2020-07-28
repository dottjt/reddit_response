import { SendMessageType } from '../../types/serverTypes';
import { InitialRegExpCollection, StringObjectToMatch, MatchRegExpResponse } from './regex/regexUtil';
import { matchRegex } from './regex/matchRegex';

export type RegexArrayInbox = {
  regexArray: InitialRegExpCollection[];
  messageType: SendMessageType;
  messageText: string;
};

export type InboxMatchResponse = {
  messageText: string | undefined;
  messageType: SendMessageType | undefined;
  messageMatch: MatchRegExpResponse[] | undefined
};

type CalculateRegexArrayInbox = {
  matchObject?: InboxMatchResponse;
  matchFound: boolean;
}

export const calculateInboxRegexArray = (freshUserRegexArray: RegexArrayInbox[], stringObjectToMatch: StringObjectToMatch) => (
  freshUserRegexArray.reduce((acc: CalculateRegexArrayInbox, regexItem: RegexArrayInbox) => {
    if (!acc.matchFound) {
      const matchArray = matchRegex(regexItem.regexArray, stringObjectToMatch);

      if (matchArray.length > 0) {
        return {
          matchObject: {
            messageType: regexItem.messageType,
            messageText: regexItem.messageText,
            messageMatch: matchArray
          },
          matchFound: true
        };
      }
    }
    return acc;
  }, { matchObject: undefined, matchFound: false } as CalculateRegexArrayInbox)
);

export const undefinedMessage = {
  messageText: undefined,
  messageType: undefined,
  messageMatch: undefined,
};
