import { createElement } from 'inferno-create-element';

export type RegexTextObject = {
  titleText?: string;
  flairText?: string;
  messageText?: string;

  replyText?: string;
}

export type RegexFilters = {
  titleText?: RegExp;
  flairText?: RegExp;
  messageText?: RegExp;

  replyText?: RegExp;
}

export type RegexFiltersMatch = {
  titleTextMatch?: string;
  flairTextMatch?: string;
  messageTextMatch?: string;

  replyTextMatch?: string;
}

export type InboxSub = {
  message?: RegExp;
}

export type RegexMatch = {
  matchArray: RegexFiltersMatch[];
  matchFound: boolean;
}

// THIS BASICALLY MATCHES IN AN 'AND' WAY. It needs to have all the elements in order to succeed.
export const matchRegex = (regexArray: RegexFilters[], textObject: RegexTextObject): RegexFiltersMatch[] => {
  const { matchArray } = regexArray.reduce((acc: RegexMatch, RegexFilters: RegexFilters) => {

    if (!acc.matchFound) {
      const regexKeys = Object.keys(RegexFilters);

      const { matchArray, allFound } = regexKeys.reduce((acc, keyString) => {
        const regex = RegexFilters[keyString];

        if (acc.allFound) {
          if (keyString === 'titleText') {
            const match = textObject.titleText?.match(regex);
            if (match) {
              return { matchArray: acc.matchArray.concat({ titleTextMatch: match[0] }), allFound: true  }
            }
          }

          if (keyString === 'flairText') {
            const match = textObject.flairText?.match(regex);
            if (match) {
              return { matchArray: acc.matchArray.concat({ flairTextMatch: match[0] }), allFound: true  }
            }
          }

          if (keyString === 'messageText') {
            const match = textObject.messageText?.match(regex);
            if (match) {
              return { matchArray: acc.matchArray.concat({ titleTextMatch: match[0] }), allFound: true  }
            }
          }

          if (keyString === 'replyText') {
            const match = textObject.replyText?.match(regex);
            if (match) {
              return { matchArray: acc.matchArray.concat({ replyTextMatch: match[0] }), allFound: true  }
            }
          }
        }

        return { matchArray: [], allFound: false };
      }, { matchArray: [], allFound: true  } as { matchArray: RegexFiltersMatch[], allFound: boolean });

      if (matchArray.length > 0) {
        return { matchArray, matchFound: true };
      }
    }
    return acc;
  }, { matchArray: [], matchFound: false } as RegexMatch);

  return matchArray;
};

export const highlightSyntax = (relevantText: string | undefined, messageMatch: RegexFiltersMatch[], isReact: boolean) => {
  if (relevantText) {
    const insert = (arr, index, newItem) => [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index)
    ];

    if (messageMatch.length > 0) {
      const { titleTextArray } = messageMatch.reduce((acc, regexFilterResult) => {
        if (regexFilterResult?.titleTextMatch) {
          const splitArray = acc.relevantText.split(regexFilterResult.titleTextMatch);
          const newArray = isReact
            ? insert(splitArray, 1, <span style={{ color: 'red' }}>{regexFilterResult.titleTextMatch}</span>)
            : insert(splitArray, 1, `<span style="color: red;">${regexFilterResult.titleTextMatch}</span>`);

          return { ...acc, titleTextArray: newArray };
        }
        if (regexFilterResult?.flairTextMatch) {
          const splitArray = acc.relevantText.split(regexFilterResult.flairTextMatch);
          const newArray = isReact
            ? insert(splitArray, 1, <span style={{ color: 'red' }}>{regexFilterResult.flairTextMatch}</span>)
            : insert(splitArray, 1, `<span style="color: red;">${regexFilterResult.flairTextMatch}</span>`);

          return { ...acc, titleTextArray: newArray };
        }
        if (regexFilterResult?.messageTextMatch) {
          const splitArray = acc.relevantText.split(regexFilterResult.messageTextMatch);
          const newArray = isReact
            ? insert(splitArray, 1, <span style={{ color: 'red' }}>{regexFilterResult.messageTextMatch}</span>)
            : insert(splitArray, 1, `<span style="color: red;">${regexFilterResult.messageTextMatch}</span>`);

          return { ...acc, titleTextArray: newArray };
        }

        if (regexFilterResult?.replyTextMatch) {
          const splitArray = acc.relevantText.split(regexFilterResult.replyTextMatch);
          const newArray = isReact
            ? insert(splitArray, 1, <span style={{ color: 'red' }}>{regexFilterResult.replyTextMatch}</span>)
            : insert(splitArray, 1, `<span style="color: red;">${regexFilterResult.replyTextMatch}</span>`);

          return { ...acc, titleTextArray: newArray };
        }

        return acc;
      }, { relevantText, titleTextArray: [] } as { relevantText: string, titleTextArray: any[] });

      return titleTextArray;
    }
  }
  return [ relevantText ];
};
