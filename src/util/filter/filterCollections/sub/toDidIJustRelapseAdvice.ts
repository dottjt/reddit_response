import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toDidIJustRelapseAdviceRegexArray: InitialRegExpCollection[] = [
  // DID I JUST RELAPSE?
  { ...both, titleText: /^relapse\?/i },
  { ...both, titleText: /did I just relapse\?/i },
  { ...both, titleText: /did I lose\?/i },
  { ...both, titleText: /Is this ?(a)? relapse\?/i },
  { ...both, titleText: /Have I relapsed\?/i },
  { ...both, titleText: /was it a relapse\?/i },

  // COUNT AS RELAPSE
  { ...both, titleText: /Does (this|that) count as a/i },
  { ...both, titleText: /count as ?(a)? relapse\?/i },
  { ...both, titleText: /do I have to (restart|reset) my streak/i },
  { ...both, titleText: /does that mean I failed\?/i },
  { ...both, titleText: /Did i break the rules/i },
  { ...both, titleText: /Do i need to start again/i },
  { ...both, titleText: /Does precum count/i },
];
