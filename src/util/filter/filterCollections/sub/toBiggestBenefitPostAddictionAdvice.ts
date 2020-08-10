import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toBiggestBenefitPostAddictionAdviceRegexArray: InitialRegExpCollection[] = [
  // TITLE BENEFITS
  { titleText: /^beneftis(\?|.)?$/i },
  { titleText: /^(NoFap|no fap|no-fap) benefits(\?|.)?$/i },

  // WANT TO KNOW BENEFITS
  { ...both, titleText: /I want to know the benefits of (NoFap|no fap|no-fap)/i },
  { ...both, titleText: /what are the benefits (of|to) quitting/i },
  { ...both, titleText: /Can anyone explain the benefits/i },
  { ...both, titleText: /Benefits from quitting\?/i },
  { ...both, titleText: /pros and cons/i },
  { ...both, titleText: /What are the benefits\?/i },
  { ...both, titleText: /Why should one stop fapping/i },
  { ...both, titleText: /(you have|you've|you’ve) noticed since stopping/i },
  { ...both, titleText: /(which|What) benefits did you gain/i },
  { ...both, titleText: /benefits that you have gained/i },
  { ...both, titleText: /reasons to stop/i },
  { ...both, titleText: /what is the effects on health/i },
  { ...both, titleText: /what are the benefits (of|to) (NoFap|no fap|no-fap)/i },

  { ...both, titleText: /Are there any benefits from (NoFap|no fap|no-fap)/i },
  { ...both, titleText: /benefits of semen retention/i },
  { ...both, titleText: /the effort is really worth/i },
  { ...both, titleText: /is it really worth the effort/i },
  // SHARE BENEFITS
  { ...both, titleText: /share some ?(overall)? benefits you (have|guys) experienced/i },
  { ...both, titleText: /Can you ?(guys)? share some benefits/i },
];
