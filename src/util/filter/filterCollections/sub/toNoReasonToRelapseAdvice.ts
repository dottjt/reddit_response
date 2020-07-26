import { RegexFilters, both } from '../../regexUtil';

export const toNoReasonToRelapseAdviceRegexArray: RegexFilters[] = [
  { ...both, titleText: /Should I relapse/i },
];
