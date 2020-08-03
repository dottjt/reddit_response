import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toMasturbateWithoutPornAdviceRegexArray: InitialRegExpCollection[] = [
  // CAN STILL MASTURBATE?
  { ...both, titleText: /Can (I|you) still masturbate (while (on|doing)|during) (NoFap|no fap|no-fap)/i },

  // IS IT RELAPSE
  { ...both, titleText: /Is masturbating without porn ?(a)? relapse/i },
  { ...both, titleText: /Can I masturbate without porn/i },

  // IS IT OKAY
  { titleText: /masturbation without porn/i },

  { ...both, titleText: /is it OK to masturbate/i },
  { ...both, titleText: /Is it still ?(a)? relapse if you masturbate/i },
  { ...both, titleText: /a healthy way to (fap|masturbate)/i },
  { ...both, titleText: /Is it ok to masturbate without watching porn/i },
  { ...both, titleText: /is it better to fap without porn/i },
  { ...both, titleText: /Do you ?(guys)? still masturbate?/i },
  { ...both, titleText: /Is it ok to only fap once a/i },
  { ...both, titleText: /is masturbating to thoughts as bad as/i },
  { ...both, titleText: /confused on weather masturbating to your own thoughts is as bad/i },
  { ...both, titleText: /Is it ok to (fap|masturbate) without porn/i },
  { ...both, titleText: /Is masturbation ok\?/i },
  { ...both, titleText: /good moderation for masturbation/i },
  { ...both, titleText: /Is fapping without porn okay/i },
  { ...both, titleText: /Is it as bad if I masturbate/i },
  { ...both, titleText: /masturbate without watching porn\?/i },
  { ...both, titleText: /is fapping without porn better\?/i },

  // OPINIONS
  { ...both, titleText: /opinions towards fapping without porn/i },

  // UNVIABLE
  // { titleText: /Getting urges to masturbate/i },
];
