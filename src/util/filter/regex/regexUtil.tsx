
export type StringObjectToMatch = {
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
  titleText?: RegExp; // | RegExp[];
  flairText?: RegExp; // | RegExp[];
  messageText?: RegExp; // | RegExp[];

  replyText?: RegExp; // | RegExp[];

  options?: InitialRegExpCollectionOptions;
}

export type MatchValueAndRegex = {
  value: string;
  regex: string;
};

export type MatchRegExpResponse = {
  titleTextMatch?: MatchValueAndRegex,
  flairTextMatch?: MatchValueAndRegex,
  messageTextMatch?: MatchValueAndRegex,
  replyTextMatch?: MatchValueAndRegex,
}

export const extractRegexMatch = (matchArray: MatchRegExpResponse[]) => (
  Object.keys(matchArray[0]).map(key => `${key}: ${matchArray[0][key].value}`).join(', ')
);

export const both = { options: { both: true } };
