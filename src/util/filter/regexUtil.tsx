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
  logic: RegexFilterLogic;
}

export type RegexFilters = {
  titleText?: RegExp;
  flairText?: RegExp;
  messageText?: RegExp;

  replyText?: RegExp;

  options?: RegexFiltersOptions;
}

export type RegexFiltersMatch = {
  titleTextMatch?: string;
  flairTextMatch?: string;
  messageTextMatch?: string;

  replyTextMatch?: string;
}

export type ReduceRegexMatch = {
  matchArray: RegexFiltersMatch[];
  matchFound: boolean;
}

export const matchRegex = (regexArray: RegexFilters[], textObject: RegexTextObject): RegexFiltersMatch[] => {
  const { matchArray } = regexArray.reduce((acc: ReduceRegexMatch, regexFilters: RegexFilters) => {

    if (!acc.matchFound) {
      const regexKeys = Object.keys(regexFilters).filter(item => item !== 'options');

      const { matchObject } = regexKeys.reduce((acc, keyString) => {
        const regex = regexFilters[keyString];

        if (acc.allFound) {
          if (keyString === 'titleText') {
            const match = textObject.titleText?.match(regex);
            if (match) {
              return { matchObject: { ...acc.matchObject, titleTextMatch: match[0] }, allFound: true  }
            }
          }

          if (keyString === 'flairText') {
            const match = textObject.flairText?.match(regex);
            if (match) {
              return { matchObject: { ...acc.matchObject, flairTextMatch: match[0] }, allFound: true  }
            }
          }

          if (keyString === 'messageText') {
            const match = textObject.messageText?.match(regex);
            if (match) {
              return { matchObject: { ...acc.matchObject, messageTextMatch: match[0] }, allFound: true  }
            }
          }

          if (keyString === 'replyText') {
            const match = textObject.replyText?.match(regex);
            if (match) {
              return { matchObject: { ...acc.matchObject, replyTextMatch: match[0] }, allFound: true  }
            }
          }
        }

        return { ...acc, allFound: false };
      }, { matchObject: {}, allFound: true } as { matchObject: RegexFiltersMatch, allFound: boolean });

      // TODO THIS IS WRONG
      if (regexFilters?.options?.logic === RegexFilterLogic.AND) {
        if (Object.keys(matchObject).length === regexKeys.length) {
          return { matchArray: [ matchObject ], matchFound: true };
        }
      }

      if (regexFilters?.options?.logic === RegexFilterLogic.OR) {
        if (Object.keys(matchObject).length > 0) {
          return { matchArray: [ matchObject ], matchFound: true };
        }
      }

      // default to AND
      if (Object.keys(matchObject).length === regexKeys.length) {
        return { matchArray: [ matchObject ], matchFound: true };
      }
    }
    return acc;

    // FUTURE remove matchFound if you would like it to search through every single possibility, although this may take a long time.
  }, { matchArray: [], matchFound: false } as ReduceRegexMatch);

  return matchArray;
};

// const titleText = 'hello'
// const text = 'hello text thing'

// const result = matchRegex([{
//   titleText: /hello/,
//   messageText: /fwtawft/,
//   options: { logic: RegexFilterLogic.AND }
// },
// ], {
//   titleText: 'hello',
//   messageText: 'hello text thing'
// });

// result

export const highlightSyntax = (relevantText: string | undefined, messageMatch: RegexFiltersMatch[], isReact: boolean) => {
  if (relevantText) {
    const insert = (arr, index, newItem) => [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index)
    ];

    if (messageMatch.length > 0) {
      const { titleTextArray } = messageMatch.reduce((acc, regexFilterResult) => {
        if (!acc.foundMatch) {

          if (regexFilterResult?.titleTextMatch) {
            const splitArray = acc.relevantText.split(regexFilterResult.titleTextMatch);
            const newArray = isReact
              ? insert(splitArray, 1, <span style={{ color: 'red' }}>{regexFilterResult.titleTextMatch}</span>)
              : insert(splitArray, 1, `<span style="color: red;">${regexFilterResult.titleTextMatch}</span>`);

            return { ...acc, titleTextArray: newArray, foundMatch: true };
          }

          if (regexFilterResult?.flairTextMatch) {
            const splitArray = acc.relevantText.split(regexFilterResult.flairTextMatch);
            const newArray = isReact
              ? insert(splitArray, 1, <span style={{ color: 'red' }}>{regexFilterResult.flairTextMatch}</span>)
              : insert(splitArray, 1, `<span style="color: red;">${regexFilterResult.flairTextMatch}</span>`);

            return { ...acc, titleTextArray: newArray, foundMatch: true };
          }

          if (regexFilterResult?.messageTextMatch) {
            const splitArray = acc.relevantText.split(regexFilterResult.messageTextMatch);
            const newArray = isReact
              ? insert(splitArray, 1, <span style={{ color: 'red' }}>{regexFilterResult.messageTextMatch}</span>)
              : insert(splitArray, 1, `<span style="color: red;">${regexFilterResult.messageTextMatch}</span>`);

            return { ...acc, titleTextArray: newArray, foundMatch: true };
          }

          if (regexFilterResult?.replyTextMatch) {
            const splitArray = acc.relevantText.split(regexFilterResult.replyTextMatch);
            const newArray = isReact
              ? insert(splitArray, 1, <span style={{ color: 'red' }}>{regexFilterResult.replyTextMatch}</span>)
              : insert(splitArray, 1, `<span style="color: red;">${regexFilterResult.replyTextMatch}</span>`);

            return { ...acc, titleTextArray: newArray, foundMatch: true };
          }
        }

        return acc;
      }, { relevantText, titleTextArray: [], foundMatch: false } as { relevantText: string, titleTextArray: any[], foundMatch: boolean });

      return titleTextArray;
    }
  }
  return [ relevantText ];
};
