import { RegexFilters, both } from '../../regexUtil';

export const toMasturbateWithoutPornAdviceRegexArray: RegexFilters[] = [
  // CAN STILL MASTURBATE?
  { ...both, titleText: /Can (I|you) still masturbate (while (on|doing)|during) (NoFap|no fap|no-fap)/i },

  // IS IT RELAPSE
  { ...both, titleText: /Is masturbating without porn ?(a)? relapse/i },
  { ...both, titleText: /Can I masturbate without porn/i },

  // IS IT OKAY
  { titleText: /masturbation without porn/i },

  { ...both, titleText: /Is it ok to masturbate without watching porn/i },
  { ...both, titleText: /is it better to fap without porn/i },


  // OPINIONS
  { ...both, titleText: /opinions towards fapping without porn/i },

  // UNVIABLE
  // { titleText: /Getting urges to masturbate/i },
];
