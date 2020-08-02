import { createElement } from 'inferno-create-element';
import { MatchRegExpResponse, MatchValueAndRegex } from './regexUtil';
import { access } from 'fs';

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
          // TODO we'll have to do all these trim things at the end
          splitArray[1] = lastText.slice(0, 40);
        }
      }
    }

    // Step Three - To JSX
    const newArray = stepThreeToJSX(splitArray, regexFilterResult, relevantKey, isReact);
    return { newArray };
  } catch (error) {
    throw new Error(`generateNodeSplitArray - ${error} - ${splitArray}`);
  }
}

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
];

const flatten = (arr) =>  arr.reduce((flat, next) => flat.concat(next), []);

type StepOneTextMatch = {
  text: string;
  isMatch: boolean;
}

// const stepOneFindAllMatches = (relevantText: string, matchesArray: MatchValueAndRegex[]): StepOneTextMatch[] => {
//   const { splitArray } = matchesArray.reduce((acc, valueAndRegex) => {
//     const newSplitArray = acc.splitArray.map(textObj => {

//       const splitTextArray = textObj.text.split(valueAndRegex.value).map(mapText => ({ text: mapText, isMatch: false }));
//       if (splitTextArray.length === 1) return splitTextArray;

//       const finalSplitArray = insert(splitTextArray, 1, { text: valueAndRegex.value, isMatch: true });
//       return finalSplitArray;
//      });

//     return { splitArray: flatten(newSplitArray) };
//   }, { splitArray: [ { text: relevantText, isMatch: false } ] });

//   return splitArray;
// }

// const stepTwoTrimArray = (splitArray: StepOneTextMatch[]): StepOneTextMatch[] => {
//   return splitArray
// };

// const stepThreeToJSXToBe = (splitArrayTrim: StepOneTextMatch[], isReact: boolean) => {
//   return splitArrayTrim.map((textMatch) => {
//     const color: string = textMatch.isMatch ? 'red' : 'black';

//     if (isReact) {
//       return <span style={{ color: 'red', 'line-height': '1.4rem' }}>{textMatch.text}</span>;
//     } else {
//       return `<span style="color: red; line-height: 1.4rem;">${textMatch.text}</span>`;
//     }
//   });
// }

const stepThreeToJSX = (splitArray, regexFilterResult, relevantKey, isReact) => {
  const splitArraySpan = splitArray.map(string => isReact ? <span>{string}</span> : string);

  const newArray = isReact
  // TODO: THis shouldn't be [0] when we get multiple values.
    ? highlightArrayInsert(splitArraySpan, 1, <span style={{ color: 'red', 'line-height': '1.4rem' }}>{regexFilterResult[relevantKey][0].value}</span>)
    : highlightArrayInsert(splitArraySpan, 1, `<span style="color: red; line-height: 1.4rem;">${regexFilterResult[relevantKey][0].value}</span>`);

  return newArray;
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

        // console.log('relevantKey', relevantKey);
        // So  regexFilterResult[relevantKey] is an array

        // console.log (regexFilterResult);
        // this is currently [0] until I figure out how to iterate through it to work.

        // 1st step: Find all the matches. But, don't put it in Javascript yet. Just put it in an object { text: string, toHighlight: boolean }
        // 2nd step: Trim it. The last and first things of the array.
        // 3rd step: replace it with JS. Turn it

        const splitArray = acc.relevantText.split(regexFilterResult[relevantKey][0].value);
        // const splitArray: StepOneTextMatch[] = stepOneFindAllMatches(relevantText, regexFilterResult[relevantKey]);

        // const splitArrayTrim: StepOneTextMatch[] = stepTwoTrimArray(splitArray);
        // const newArray = stepThreeToJSX(splitArrayTrim);
        if (splitArray.length === 1) return acc;

        // console.log('splitArray', splitArray)
        const { newArray } = generateNodeSplitArray(splitArray, regexFilterResult, relevantKey, isReact);
        // console.log('newArray', newArray)

        return { ...acc, expressionArray: newArray, foundMatch: true };
      }

      return acc;
    }, { relevantText, expressionArray: [], foundMatch: false } as HighlightSyntaxReduceProps);

    if (foundMatch) return expressionArray;
  }

  return isReact ? [ <span>{relevantText?.slice(0, 200) || ''}</span> ] : [ relevantText || '' ];
};
