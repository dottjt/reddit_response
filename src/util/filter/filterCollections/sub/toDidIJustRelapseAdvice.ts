import { RegexFilters, both } from '../../regexUtil';

export const toDidIJustRelapseAdviceRegexArray: RegexFilters[] = [
  // DID I JUST RELAPSE?
  { ...both, titleText: /did I just relapse\?/i },


  // COUNT AS RELAPSE
  { ...both, titleText: /count as relapse\?/i },
  { ...both, titleText: /do I have to (restart|reset) my streak/i },
];
