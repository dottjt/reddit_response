import { RegexFilters, both } from '../../regexUtil';

export const toWhenDoesItGetEasierAdviceRegexArray: RegexFilters[] = [
  { ...both, titleText: /does it get easier\?/i },
  { ...both, titleText: /When does the withdrawal period depression start to fade\?/i },
  { ...both, titleText: /How long before the effects of porn disappear\?/i },
];

