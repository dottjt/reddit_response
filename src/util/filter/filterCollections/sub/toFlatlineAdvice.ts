import { RegexFilters, both } from '../../regexUtil';

export const toFlatlineAdviceRegexArray: RegexFilters[] = [
  { titleText: /\d+ days in and flatl/i },
  { titleText: /flatl/i, messageText: /Any advice on whether this is normal/i },
];
