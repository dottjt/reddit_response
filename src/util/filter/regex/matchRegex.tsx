import {
  StringsToMatch,
  MatchRegExpResponse,
  InitialRegExpCollection,
  RegExpFilterLogic,
} from './regexUtil';

type ReduceRegexMatch = {
  matchArray: MatchRegExpResponse[];
  matchFound: boolean;
}

const matchMultiple = (keyString: string, stringsToMatch: StringsToMatch, regex: RegExp): MatchRegExpResponse => {
  let matchObject = {} as MatchRegExpResponse;
  // TODO, I think this would be an additional reduce.

  return matchObject;
}

const matchTextBoth = (stringsToMatch: StringsToMatch, regex: RegExp): MatchRegExpResponse  => {
  let matchObject = {} as MatchRegExpResponse;
  const matchText = stringsToMatch.titleText?.match(regex);
  if (matchText) {
    matchObject.titleTextMatch = {
      value: matchText[0],
      regex: String(regex),
    }
  }
  const matchMessage = stringsToMatch.messageText?.match(regex);
  if (matchMessage) {
    matchObject.messageTextMatch = {
      value: matchMessage[0],
      regex: String(regex),
    }
  }
  return matchObject;
}

const matchOne = (keyString: string, stringsToMatch: StringsToMatch, regex: RegExp): MatchRegExpResponse => {
  let matchObject = {} as MatchRegExpResponse;

  const match = stringsToMatch[keyString]?.match(regex);
  if (match) {
    matchObject[`${keyString}Match`] = {
      value: match[0],
      regex: String(regex)
    }
  }
  return matchObject;
}

const calculateMatch = (regexFilters: InitialRegExpCollection, matchObject: MatchRegExpResponse, regexKeys: string[]) => {
  // if OR logic, then only one match needs to exist
  // if both logic, then only one match needs to exist
  if (regexFilters?.options?.logic === RegExpFilterLogic.OR || regexFilters?.options?.both) {
    if (Object.keys(matchObject).length > 0) {
      return { matchArray: [ matchObject ], matchFound: true };
    }
  }

  // if AND logic, then all matches need to exist.
  if (regexFilters?.options?.logic === RegExpFilterLogic.AND) {
    if (Object.keys(matchObject).length === regexKeys.length) {
      return { matchArray: [ matchObject ], matchFound: true };
    }
  }

  // default to AND
  if (Object.keys(matchObject).length === regexKeys.length) {
    return { matchArray: [ matchObject ], matchFound: true };
  }

  return { matchArray: [], matchFound: false };
}

export const matchRegexReduceMatchedObject = (regexKeys: string[], regexFilters: InitialRegExpCollection, stringsToMatch: StringsToMatch) => {
  const { matchObject } = regexKeys.reduce((acc, keyString) => {
    const regex = regexFilters[keyString];

    if (acc.allFound) {
      let matchObject: MatchRegExpResponse = {} as MatchRegExpResponse;

      if (regexFilters?.options?.both && keyString === 'titleText') {
        matchObject = matchTextBoth(stringsToMatch, regex);
      } else {
        if (Array.isArray(stringsToMatch[keyString])) {
          matchObject = matchMultiple(keyString, stringsToMatch, regex);
        } else {
          matchObject = matchOne(keyString, stringsToMatch, regex);
        }
      }

      if (Object.keys(matchObject).length > 0) {
        return { matchObject: { ...acc.matchObject, ...matchObject }, allFound: true };
      }
    }

    return { ...acc, allFound: false };

  }, { matchObject: {}, allFound: true } as { matchObject: MatchRegExpResponse, allFound: boolean });

  return { matchObject };
}

export const matchRegex = (regexArray: InitialRegExpCollection[], stringsToMatch: StringsToMatch): MatchRegExpResponse[] => {
  const { matchArray } = regexArray.reduce((acc: ReduceRegexMatch, regexFilters: InitialRegExpCollection) => {

    if (!acc.matchFound) {
      const regexKeys = Object.keys(regexFilters).filter(item => item !== 'options');

      const { matchObject } = matchRegexReduceMatchedObject(regexKeys, regexFilters, stringsToMatch);

      const { matchArray, matchFound } = calculateMatch(regexFilters, matchObject, regexKeys);

      if (matchFound) return { matchArray, matchFound };
    }

    return acc;
    // FUTURE remove matchFound if you would like it to search through every single possibility, although this may take a long time.
  }, { matchArray: [], matchFound: false } as ReduceRegexMatch);

  return matchArray;
};


// const titleText = 'hello'
// const text = 'text thing'

// const result = matchRegex([{
//   titleText: /hello/,
//   options: { both: true }
// },
// ], {
//   titleText: 'hello',
//   messageText: 'hello text thing'
// });

// result
