import { createElement } from 'inferno-create-element';
import { MatchRegExpResponse } from './regexUtil';

export enum RelevantType {
  Title='Title',
  Message='Message',
  Flair='Flair',
  Reply='Reply',
}

const highlightArrayInsert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
];

const generateNodeSplitArray = (splitArray: string[], regexFilterResult: MatchRegExpResponse, relevantKey: string, isReact: boolean) => {
  try {
    if (regexFilterResult?.messageTextMatch) {
      if (Boolean(splitArray[0])) {
        const firstPartOfSentence: string[] = splitArray[0].split('.').filter(p => p)
        if (firstPartOfSentence.length > 0) {
          const firstText = firstPartOfSentence[firstPartOfSentence.length - 1];
          splitArray[0] = firstText;
        }
      }
      if (Boolean(splitArray[1])) {
        const lastPartOfSentence: string[] = splitArray[1].split('.').filter(p => p);
        if (lastPartOfSentence.length > 0) {
          const lastText = lastPartOfSentence[0]?.trimRight();
          splitArray[1] = lastText.slice(0, 40);
        }
      }
    }

    const splitArraySpan = splitArray.map(string => isReact ? <span>{string}</span> : string);
    const newArray = isReact
      ? highlightArrayInsert(splitArraySpan, 1, <span style={{ color: 'red', 'line-height': '1.4rem' }}>{regexFilterResult[relevantKey].value}</span>)
      : highlightArrayInsert(splitArraySpan, 1, `<span style="color: red; line-height: 1.4rem;">${regexFilterResult[relevantKey].value}</span>`);

    return { newArray };
  } catch (error) {
    throw new Error(`generateNodeSplitArray - ${error} - ${splitArray}`);
  }
}

type HighlightSyntaxReduceProps = {
  relevantText: string,
  expressionArray: (string|JSX.Element)[],
  foundMatch: boolean
}

// TODO Checking for relevant type is not relevant. It is not needed BECAUSE titleText splits into titleText or messageText on BOTH.
export const highlightSyntax = (relevantText: string | undefined, messageMatch: MatchRegExpResponse[], isReact: boolean): (JSX.Element|string)[] => {
  if (relevantText && messageMatch.length > 0) {
    const { expressionArray, foundMatch } = messageMatch.reduce((acc: HighlightSyntaxReduceProps, regexFilterResult: MatchRegExpResponse) => {

      if (!acc.foundMatch) {
        const relevantKey = Object.keys(regexFilterResult)[0];

        const splitArray = acc.relevantText.split(regexFilterResult[relevantKey].value);
        if (splitArray.length === 1) return acc;

        const { newArray } = generateNodeSplitArray(splitArray, regexFilterResult, relevantKey, isReact);
        return { ...acc, expressionArray: newArray, foundMatch: true };
      }

      return acc;
    }, { relevantText, expressionArray: [], foundMatch: false } as HighlightSyntaxReduceProps);

    if (foundMatch) return expressionArray;
  }

  return isReact ? [ <span>{relevantText?.slice(0, 200) || ''}</span> ] : [ relevantText || '' ];
};
