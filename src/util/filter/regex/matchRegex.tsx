import {
  StringObjectToMatch,
  MatchRegExpResponse,
  InitialRegExpCollection,
  RegExpFilterLogic,
} from './regexUtil';

type ReduceRegexMatch = {
  matchArray: MatchRegExpResponse[];
  matchFound: boolean;
}

const matchMultiple = (keyString: string, stringObjectToMatch: StringObjectToMatch, regex: RegExp[]): MatchRegExpResponse => {
  let matchResponse = {} as MatchRegExpResponse;

  const matchArray = regex.map((regexSingle: RegExp) => {
    const match = stringObjectToMatch[keyString].match(regexSingle);

    // TODO I don't think this is correct
    return {
      value: match ? match[0] : undefined,
      regex: String(regex)
    }
  }).filter(item => item.value);

  if (matchArray.every((item => item.value)) && matchArray.length === regex.length) {
    matchResponse[`${keyString}Match`] = matchArray;
  };

  return matchResponse;
}

const matchTextBoth = (stringObjectToMatch: StringObjectToMatch, regex: RegExp): MatchRegExpResponse  => {
  // TODO this should actually be part of matchOne.
  let matchResponse = {} as MatchRegExpResponse;
  const matchText = stringObjectToMatch.titleText?.match(regex);
  if (matchText) {
    matchResponse.titleTextMatch = [{
      value: matchText[0],
      regex: String(regex),
    }];
  }
  const matchMessage = stringObjectToMatch.messageText?.match(regex);
  if (matchMessage) {
    matchResponse.messageTextMatch = [{
      value: matchMessage[0],
      regex: String(regex),
    }];
  }
  return matchResponse;
}

const matchOne = (keyString: string, stringObjectToMatch: StringObjectToMatch, regex: RegExp): MatchRegExpResponse => {
  let matchResponse = {} as MatchRegExpResponse;

  const match = stringObjectToMatch[keyString]?.match(regex);
  if (match) {
    matchResponse[`${keyString}Match`] = [{
      value: match[0],
      regex: String(regex)
    }];
  }
  return matchResponse;
}

const calculateMatch = (regexCollection: InitialRegExpCollection, matchResponse: MatchRegExpResponse, regexKeys: string[]) => {
  // if OR logic, then only one match needs to exist
  // if both logic, then only one match needs to exist
  if (regexCollection?.options?.logic === RegExpFilterLogic.OR || regexCollection?.options?.both) {
    if (Object.keys(matchResponse).length > 0) {
      return { matchArray: [ matchResponse ], matchFound: true };
    }
  }

  // if AND logic, then all matches need to exist.
  if (regexCollection?.options?.logic === RegExpFilterLogic.AND) {
    if (Object.keys(matchResponse).length === regexKeys.length) {
      return { matchArray: [ matchResponse ], matchFound: true };
    }
  }

  // default to AND
  if (Object.keys(matchResponse).length === regexKeys.length) {
    return { matchArray: [ matchResponse ], matchFound: true };
  }

  return { matchArray: [], matchFound: false };
}

export const matchRegexReduceMatchedObject = (regexKeys: string[], regexCollection: InitialRegExpCollection, stringObjectToMatch: StringObjectToMatch) => {
  const { matchResponse } = regexKeys.reduce((acc, keyString) => {
    const regex = regexCollection[keyString];

    if (acc.allFound) {
      let matchResponse: MatchRegExpResponse = {} as MatchRegExpResponse;

      if (regexCollection?.options?.both && keyString === 'titleText') {
        matchResponse = matchTextBoth(stringObjectToMatch, regex);
      } else {
        if (Array.isArray(regex)) {
          matchResponse = matchMultiple(keyString, stringObjectToMatch, regex);
        } else {
          matchResponse = matchOne(keyString, stringObjectToMatch, regex);
        }
      }

      if (Object.keys(matchResponse).length > 0) {
        return { matchResponse: { ...acc.matchResponse, ...matchResponse }, allFound: true };
      }
    }

    return { ...acc, allFound: false };

  }, { matchResponse: {}, allFound: true } as { matchResponse: MatchRegExpResponse, allFound: boolean });

  return { matchResponse };
}

export const matchRegex = (regexArray: InitialRegExpCollection[], stringObjectToMatch: StringObjectToMatch): MatchRegExpResponse[] => {
  const { matchArray } = regexArray.reduce((acc: ReduceRegexMatch, regexCollection: InitialRegExpCollection) => {

    if (!acc.matchFound) {
      const regexKeys = Object.keys(regexCollection).filter(item => item !== 'options');

      const { matchResponse } = matchRegexReduceMatchedObject(regexKeys, regexCollection, stringObjectToMatch);

      const { matchArray, matchFound } = calculateMatch(regexCollection, matchResponse, regexKeys);

      if (matchFound) return { matchArray, matchFound };
    }

    return acc;
    // FUTURE remove matchFound if you would like it to search through every single possibility, although this may take a long time.
  }, { matchArray: [], matchFound: false } as ReduceRegexMatch);

  return matchArray;
};


// const titleText = 'hello'
// const text = 'text thing'

// const regexArray = [
// {
//   titleText: [/hel/, /lo/],
//   // options: { both: true }
// },
// ];

// const stringObjectToMatch = {
//   titleText: 'hello',
//   messageText: 'hello text thing'
// };

// const result = matchRegex(regexArray, stringObjectToMatch);

// result
