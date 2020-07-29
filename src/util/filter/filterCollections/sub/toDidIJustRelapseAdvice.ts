import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toDidIJustRelapseAdviceRegexArray: InitialRegExpCollection[] = [
  // DID I JUST RELAPSE?
  { ...both, titleText: /did I just relapse\?/i },
  { ...both, titleText: /Is this a relapse\?/i },

  // COUNT AS RELAPSE
  { ...both, titleText: /count as ?(a)? relapse\?/i },
  { ...both, titleText: /do I have to (restart|reset) my streak/i },
];
