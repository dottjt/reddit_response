import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toIsWatchingPornRelapseAdviceRegexArray: InitialRegExpCollection[] = [
  { ...both, titleText: /is it bad to watch porn/i },
  { ...both, titleText: /okay to still watch porn/i },
  { ...both, titleText: /Is it ok to watch porn/i },
  { ...both, titleText: /Is it okay(,)? to watch pornography/i },
];
