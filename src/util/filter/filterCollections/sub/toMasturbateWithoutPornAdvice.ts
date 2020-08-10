import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toMasturbateWithoutPornAdviceRegexArray: InitialRegExpCollection[] = [
  // CAN STILL MASTURBATE?
  { ...both, titleText: /Can (I|you) still mast(u|e)rbate (while (on|doing)|during) (NoFap|no fap|no-fap)/i },

  // IS IT RELAPSE
  { ...both, titleText: /Is masturbating without porn ?(a)? relapse/i },
  { ...both, titleText: /Can I mast(u|e)rbate without porn/i },

  // IS IT OKAY
  { titleText: /masturbation without porn/i },

  { ...both, titleText: /is it OK to mast(u|e)rbate/i },
  { ...both, titleText: /is it OK to fap/i },
  { ...both, titleText: /Is it still ?(a)? relapse if you mast(u|e)rbate/i },
  { ...both, titleText: /a healthy way to (fap|mast(u|e)rbate)/i },
  { ...both, titleText: /Is it ok to mast(u|e)rbate without watching porn/i },
  { ...both, titleText: /is it better to fap without porn/i },
  { ...both, titleText: /Do you ?(guys)? still mast(u|e)rbate?/i },
  { ...both, titleText: /Is it ok to only fap once a/i },
  { ...both, titleText: /is masturbating to thoughts as bad as/i },
  { ...both, titleText: /confused on weather masturbating to your own thoughts is as bad/i },
  { ...both, titleText: /Is it ok to (fap|mast(u|e)rbate) without porn/i },
  { ...both, titleText: /Is masturbation ok\?/i },
  { ...both, titleText: /good moderation for masturbation/i },
  { ...both, titleText: /Is fapping without porn okay/i },
  { ...both, titleText: /thoughts on fapping without porn/i },
  { ...both, titleText: /What about fapping without porn/i },

  { ...both, titleText: /Is it as bad if I mast(u|e)rbate/i },
  { ...both, titleText: /mast(u|e)rbate without watching porn\?/i },
  { ...both, titleText: /is fapping without porn better\?/i },
  { ...both, titleText: /Should I (give up|stop) (masturbating|masturbation)/i },
  { ...both, titleText: /can I touch my pp during nofap/i },
  { ...both, titleText: /Is masturbation without watching porn/i },
  { ...both, titleText: /Is it bad to mast(u|e)rbate/ },

  { ...both, titleText: /Bad to mast(u|e)rbate in general/ },

  { ...both, titleText: /fapping to ?(the)? girlfriend/ },


  // OPINIONS
  { ...both, titleText: /opinions towards fapping without porn/i },

  // UNVIABLE
  // { titleText: /Getting urges to masturbate/i },
];
