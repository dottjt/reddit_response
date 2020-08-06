
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
  titleText?: RegExp | RegExp[];
  flairText?: RegExp | RegExp[];
  messageText?: RegExp | RegExp[];

  replyText?: RegExp | RegExp[];

  options?: InitialRegExpCollectionOptions;
}

export type MatchValueAndRegex = {
  value: string;
  regex: string; // this is intentionally cast to a string, I'm not 100% sure why. I think it's so I can console log it.
};

export type MatchRegExpResponse = {
  titleTextMatch?: MatchValueAndRegex[],
  flairTextMatch?: MatchValueAndRegex[],
  messageTextMatch?: MatchValueAndRegex[],
  replyTextMatch?: MatchValueAndRegex[],
}

export const extractRegexMatch = (matchArray: MatchRegExpResponse[]) => {
  const items = matchArray.map(item => {
    const keys = Object.keys(item);
    const mappedKeysToString = keys.map(key => {
      const matchItems = item[key];
      const val = matchItems.map(matchItemIndividual => `${key}: ${matchItemIndividual.value}`);

      const join = val.join('');
      return join;
    })

    const finalString = mappedKeysToString.join(' - ');

    return finalString;
  });

  const actualFinalString = items[0];
  actualFinalString
  return actualFinalString;
}

export const both = { options: { both: true } };

// const match = [
//   {
//     "titleTextMatch": [
//       {
//         "value": "hocd",
//         "regex": "/hocd/i"
//       }
//     ],
//     "messageTextMatch": [
//       {
//         "value": "hocd",
//         "regex": "/hocd/i"
//       }
//     ]
//   }
// ];

// const result = extractRegexMatch(match);

// result
