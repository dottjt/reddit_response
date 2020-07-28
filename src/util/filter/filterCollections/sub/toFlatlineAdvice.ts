import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toFlatlineAdviceRegexArray: InitialRegExpCollection[] = [
  { titleText: /\d+ days in and flatl/i },
  { titleText: /flatl/i, messageText: /Any advice on whether this is normal/i },

  { ...both, titleText: /How long do flatlines last/i, },
];
