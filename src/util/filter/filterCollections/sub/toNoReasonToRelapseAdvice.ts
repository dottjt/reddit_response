import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toNoReasonToRelapseAdviceRegexArray: InitialRegExpCollection[] = [
  { ...both, titleText: /Should I relapse/i },
];
