
export type RegExpTextStringObject = {
  titleText?: string;
  flairText?: string;
  messageText?: string;

  replyText?: string;
}

export enum RegExpFilterLogic {
  AND='AND',
  OR='OR'
};

type InitialRegExpCollectionOptions = {
  logic?: RegExpFilterLogic;
  both?: boolean;
}

export type InitialRegExpCollection = {
  titleText?: RegExp;
  flairText?: RegExp;
  messageText?: RegExp;

  replyText?: RegExp;

  options?: InitialRegExpCollectionOptions;
}

export type MatchRegExpResponse = {
  titleTextMatch?: {
    value: string;
    regex: string;
  },
  flairTextMatch?: {
    value: string;
    regex: string;
  }
  messageTextMatch?: {
    value: string;
    regex: string;
  }
  replyTextMatch?: {
    value: string;
    regex: string;
  }
}

export const extractRegexMatch = (matchArray: MatchRegExpResponse[]) => (
  Object.keys(matchArray[0]).map(key => `${key}: ${matchArray[0][key].value}`).join(', ')
);

export const both = { options: { both: true } };
