import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toNoReasonToRelapseAdviceRegexArray: InitialRegExpCollection[] = [
  { ...both, titleText: /Should I relapse/i },
  { ...both, titleText: /Should I PMO/i },
  { ...both, titleText: /Should i reset/i },
  { ...both, titleText: /might (fail|break) my streak today/i },
  // { ...both, titleText: /Relapse, or not\?/i },
];
