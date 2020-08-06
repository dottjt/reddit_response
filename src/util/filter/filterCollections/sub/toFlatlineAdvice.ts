import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toFlatlineAdviceRegexArray: InitialRegExpCollection[] = [
  { titleText: /\d+ days in and flatl/i },
  { titleText: /flatl/i, messageText: /Any advice on whether this is normal/i },

  { ...both, titleText: /^flatline$/i, },
  { ...both, titleText: /How long do flatlines last/i, },
  { ...both, titleText: /Flatline depression\?/i, },
  { ...both, titleText: /(what's|What’s) the flatline/i, },
  { ...both, titleText: /\d+ days and flatlining/i, },


  { ...both, titleText: /how does one know when (they're|they’re) going through ?(the)? flatline/i, },
];
