import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toWhenDoesItGetEasierAdviceRegexArray: InitialRegExpCollection[] = [
  { ...both, titleText: /does it get (better|easier)/i },
  { ...both, titleText: /do they ever go away\?/i },
  { ...both, titleText: /wondering if it gets easier/i },
  { ...both, titleText: /When does the withdrawal period depression start to fade\?/i },
  { ...both, titleText: /How long before the effects of porn disappear\?/i },
  { ...both, titleText: /How does it (get|become) easier to\?/i },
];

