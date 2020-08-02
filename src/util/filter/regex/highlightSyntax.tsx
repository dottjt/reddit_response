import { createElement } from 'inferno-create-element';
import { MatchRegExpResponse, MatchValueAndRegex } from './regexUtil';
import { access } from 'fs';

export enum RelevantType {
  Title='Title',
  Message='Message',
  Flair='Flair',
  Reply='Reply',
}

type StepOneTextMatch = {
  text: string;
  isMatch: boolean;
}

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
];

const flatten = (arr) =>  arr.reduce((flat, next) => flat.concat(next), []);

const stepOneFindAllMatches = (relevantText: string, matchesArray: MatchValueAndRegex[]): StepOneTextMatch[] => {
  const { splitArray } = matchesArray.reduce((acc, valueAndRegex) => {
    const newSplitArray = acc.splitArray.map(textObj => {

      const splitTextArray = textObj.text.split(valueAndRegex.value).map(mapText => ({ text: mapText, isMatch: false }));
      if (splitTextArray.length === 1) return splitTextArray;

      const finalSplitArray = insert(splitTextArray, 1, { text: valueAndRegex.value, isMatch: true });
      return finalSplitArray;
     });

    return { splitArray: flatten(newSplitArray) };
  }, { splitArray: [ { text: relevantText, isMatch: false } ] });

  return splitArray;
}

const stepTwoTrimArray = (splitArray: StepOneTextMatch[]): StepOneTextMatch[] => {
  //     if (Boolean(splitArray[0])) {
  //       const firstPartOfSentence: string[] = splitArray[0].split('.').filter(p => p)
  //       if (firstPartOfSentence.length > 0) {
  //         const firstText = firstPartOfSentence[firstPartOfSentence.length - 1];
  //         splitArray[0] = firstText;
  //       }
  //     } // it would be good to split it to the nearest .
  // I imagine it would have to be come kind of complex reduce, where you track sentences backwards, collecting sentence length.

  // NOTE: Means there has been no match
  if (splitArray.length === 1) {
    splitArray[0].text = splitArray[0].text.slice(0, 200);
    return splitArray;
  }

  splitArray[0].text = splitArray[0].text.slice(-80);
  splitArray[splitArray.length - 1].text = splitArray[splitArray.length - 1].text.slice(0, 80);

  return splitArray;
};

const stepThreeToJSX = (splitArrayTrim: StepOneTextMatch[], isReact: boolean) => {
  return splitArrayTrim.map((textMatch) => {
    const color: string = textMatch.isMatch ? 'red' : 'black';

    if (isReact) {
      return <span style={{ color, 'line-height': '1.4rem' }}>{textMatch.text}</span>;
    } else {
      return `<span style="color: ${color}; line-height: 1.4rem;">${textMatch.text}</span>`;
    }
  });
}

type HighlightSyntaxReduceProps = {
  relevantText: string,
  expressionArray: (string|JSX.Element)[],
  foundMatch: boolean
}

export const highlightSyntax = (relevantText: string | undefined, messageMatch: MatchRegExpResponse[], isReact: boolean): (JSX.Element|string)[] => {
  if (relevantText && messageMatch.length > 0) {
    const { expressionArray, foundMatch } = messageMatch.reduce((acc: HighlightSyntaxReduceProps, regexFilterResult: MatchRegExpResponse) => {

      if (!acc.foundMatch) {
        const relevantKey = Object.keys(regexFilterResult)[0];

        const splitArray: StepOneTextMatch[] = stepOneFindAllMatches(relevantText, regexFilterResult[relevantKey]);
        const splitArrayTrim: StepOneTextMatch[] = stepTwoTrimArray(splitArray);
        const newArray = stepThreeToJSX(splitArrayTrim, isReact);

        return { ...acc, expressionArray: newArray, foundMatch: true };
      }

      return acc;
    }, { relevantText, expressionArray: [], foundMatch: false } as HighlightSyntaxReduceProps);

    if (foundMatch) return expressionArray;
  }

  return isReact ? [ <span>{relevantText?.slice(0, 200) || ''}</span> ] : [ relevantText || '' ];
};
