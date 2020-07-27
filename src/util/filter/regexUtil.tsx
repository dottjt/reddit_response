import { createElement } from 'inferno-create-element';

export type RegexTextObject = {
  titleText?: string;
  flairText?: string;
  messageText?: string;

  replyText?: string;
}

export enum RegexFilterLogic {
  AND='AND',
  OR='OR'
};

type RegexFiltersOptions = {
  logic?: RegexFilterLogic;
  both?: boolean;
}

export type RegexFilters = {
  titleText?: RegExp;
  flairText?: RegExp;
  messageText?: RegExp;

  replyText?: RegExp;

  options?: RegexFiltersOptions;
}

export type RegexFiltersMatch = {
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

export type ReduceRegexMatch = {
  matchArray: RegexFiltersMatch[];
  matchFound: boolean;
}

export const extractRegexMatch = (matchArray: RegexFiltersMatch[]) => (
  Object.keys(matchArray[0]).map(key => `${key}: ${matchArray[0][key].value}`).join(', ')
);

// const matchMultiple = (keyString: string, textObject: RegexTextObject, regex: RegExp): { matchObject: RegexFiltersMatch } => {
//   let matchObject = {} as RegexFiltersMatch;
  // TODO

// }

const matchTextBoth = (textObject: RegexTextObject, regex: RegExp): { matchObject: RegexFiltersMatch } => {
  let matchObject = {} as RegexFiltersMatch;
  const matchText = textObject.titleText?.match(regex);
  if (matchText) {
    matchObject.titleTextMatch = {
      value: matchText[0],
      regex: String(regex),
    }
  }

  const matchMessage = textObject.messageText?.match(regex);
  if (matchMessage) {
    matchObject.messageTextMatch = {
      value: matchMessage[0],
      regex: String(regex),
    }
  }
  return { matchObject }
}

const matchOne = (keyString: string, textObject: RegexTextObject, regex: RegExp): { matchObject: RegexFiltersMatch } => {
  let matchObject = {} as RegexFiltersMatch;

  const match = textObject[keyString]?.match(regex);
  if (match) {
    matchObject[keyString] = {
      value: match[0],
      regex: String(regex)
    }
  }
  return { matchObject }
}

const calculateMatch = (regexFilters: RegexFilters, matchObject: RegexFiltersMatch, regexKeys: string[]) => {
  // if AND logic, then all matches need to exist.
  if (regexFilters?.options?.logic === RegexFilterLogic.AND) {
    if (Object.keys(matchObject).length === regexKeys.length) {
      return { matchArray: [ matchObject ], matchFound: true };
    }
  }

  // if OR logic, then only one match needs to exist
  // if both logic, then only one match needs to exist
  if (
    regexFilters?.options?.logic === RegexFilterLogic.OR
    || regexFilters?.options?.both
  ) {
    if (Object.keys(matchObject).length > 0) {
      return { matchArray: [ matchObject ], matchFound: true };
    }
  }

  // default to AND
  if (Object.keys(matchObject).length === regexKeys.length) {
    return { matchArray: [ matchObject ], matchFound: true };
  }

  return { matchArray: [], matchFound: false };
}

export const matchRegex = (regexArray: RegexFilters[], textObject: RegexTextObject): RegexFiltersMatch[] => {
  const { matchArray } = regexArray.reduce((acc: ReduceRegexMatch, regexFilters: RegexFilters) => {

    if (!acc.matchFound) {
      const regexKeys = Object.keys(regexFilters).filter(item => item !== 'options');

      const { matchObject } = regexKeys.reduce((acc, keyString) => {
        const regex = regexFilters[keyString];

        if (acc.allFound) {
          if (keyString === 'titleText') {
            // This checks both titleText and messageText, with only titleText specified. It is an OR condition.
            if (regexFilters?.options?.both) {
              const { matchObject } = matchTextBoth(textObject, regex);
              if (Object.keys(matchObject).length > 0) {
                return { matchObject: { ...acc.matchObject, ...matchObject }, allFound: true };
              }
            }
          }

          if (keyString === 'titleText' || keyString === 'flairText' || keyString === 'messageText' || keyString === 'replyText') {
            // if (Array.isArray(textObject[keyString])) {
            //   const { matchObject } = matchMultiple(keyString, textObject, regex);
            // }

            const { matchObject } = matchOne(keyString, textObject, regex);
            if (Object.keys(matchObject).length > 0) {
              return { matchObject: { ...acc.matchObject, ...matchObject }, allFound: true };
            }
          }
        }

        return { ...acc, allFound: false };

      }, { matchObject: {}, allFound: true } as { matchObject: RegexFiltersMatch, allFound: boolean });

      const { matchArray, matchFound } = calculateMatch(regexFilters, matchObject, regexKeys);
      if (matchFound) {
        return { matchArray, matchFound };
      }
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


export enum RelevantType {
  Title='Title',
  Message='Message',
  Flair='Flair',
  Reply='Reply',
}

// TODO Checking for relevant type is not relevant. It is not needed.
export const highlightSyntax = (relevantText: string | undefined, relevantType: RelevantType, messageMatch: RegexFiltersMatch[], isReact: boolean) => {
  if (relevantText) {
    const insert = (arr, index, newItem) => [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index)
    ];

    if (messageMatch.length > 0) {
      const { titleTextArray, foundMatch } = messageMatch.reduce((acc, regexFilterResult) => {
        if (!acc.foundMatch) {
          if (regexFilterResult?.titleTextMatch && relevantType === RelevantType.Title) {
            const splitArray = acc.relevantText.split(regexFilterResult.titleTextMatch.value);
            if (splitArray.length === 1) {
              return acc;
            }

            const splitArraySpan = splitArray.map(string => isReact ? <span>{string}</span> : string);
            const newArray = isReact
              ? insert(splitArraySpan, 1, <span style={{ color: 'red', 'line-height': '1.4rem' }}>{regexFilterResult.titleTextMatch.value}</span>)
              : insert(splitArraySpan, 1, `<span style="color: red; line-height: 1.4rem;">${regexFilterResult.titleTextMatch.value}</span>`);

            return { ...acc, titleTextArray: newArray, foundMatch: true };
          }

          if (regexFilterResult?.flairTextMatch && relevantType === RelevantType.Flair) {
            const splitArray = acc.relevantText.split(regexFilterResult.flairTextMatch.value);
            if (splitArray.length === 1) {
              return acc;
            }

            const splitArraySpan = splitArray.map(string => isReact ? <span>{string}</span> : string);
            const newArray = isReact
              ? insert(splitArraySpan, 1, <span style={{ color: 'red', 'line-height': '1.4rem' }}>{regexFilterResult.flairTextMatch.value}</span>)
              : insert(splitArraySpan, 1, `<span style="color: red; line-height: 1.4rem;">${regexFilterResult.flairTextMatch.value}</span>`);

            return { ...acc, titleTextArray: newArray, foundMatch: true };
          }

          if (regexFilterResult?.messageTextMatch && relevantType === RelevantType.Message) {
            const splitArray = acc.relevantText.split(regexFilterResult.messageTextMatch.value);
            if (splitArray.length === 1) {
              return acc;
            }

            const firstPartOfSentence = splitArray[0].split('.').filter(p => p)
            const firstText = firstPartOfSentence[firstPartOfSentence.length - 1];
            splitArray[0] = firstText;

            const lastPartOfSentence = splitArray[1].split('.').filter(p => p);
            const lastText = lastPartOfSentence[0].trimRight();
            splitArray[1] = lastText.slice(0, 40);

            const splitArraySpan = splitArray.map(string => isReact ? <span>{string}</span> : string);
            const newArray = isReact
              ? insert(splitArraySpan, 1, <span style={{ color: 'red' }}>{regexFilterResult.messageTextMatch.value}</span>)
              : insert(splitArraySpan, 1, `<span style="color: red;">${regexFilterResult.messageTextMatch.value}</span>`);

            return { ...acc, titleTextArray: newArray, foundMatch: true };
          }

          if (regexFilterResult?.replyTextMatch && relevantType === RelevantType.Reply) {
            const splitArray = acc.relevantText.split(regexFilterResult.replyTextMatch.value);
            if (splitArray.length === 1) {
              return acc;
            }

            const splitArraySpan = splitArray.map(string => isReact ? <span>{string}</span> : string);
            const newArray = isReact
              ? insert(splitArraySpan, 1, <span style={{ color: 'red', 'line-height': '1.4rem' }}>{regexFilterResult.replyTextMatch.value}</span>)
              : insert(splitArraySpan, 1, `<span style="color: red; line-height: 1.4rem;">${regexFilterResult.replyTextMatch.value}</span>`);

            return { ...acc, titleTextArray: newArray, foundMatch: true };
          }
        }

        return acc;
      }, { relevantText, titleTextArray: [], foundMatch: false } as { relevantText: string, titleTextArray: any[], foundMatch: boolean });

      if (!foundMatch) {
        return isReact ? [ <span>{relevantText.slice(0, 200)}</span> ] : [ relevantText ];
      }

      return titleTextArray;
    }
  }
  return isReact ? [ <span>{relevantText?.slice(0, 200) || relevantText}</span> ] : [ relevantText ];
};

export const both = { options: { both: true } };
