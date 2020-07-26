import { RegexFilters, both } from '../../regexUtil';

export const toBenefitsAdviceRegexArray: RegexFilters[] = [
  // TITLE BENEFITS
  { titleText: /^beneftis(\?|.)?$/i },
  { titleText: /^(NoFap|no fap|no-fap) benefits(\?|.)?$/i },

  // WANT TO KNOW BENEFITS
  { ...both, titleText: /I want to know the benefits of (NoFap|no fap|no-fap)/i },
  { ...both, titleText: /what are the benefits to quitting/i },
  { ...both, titleText: /Benefits from quitting\?/i },
  { ...both, titleText: /What are the benefits\?/i },

  // SHARE BENEFITS
  { ...both, titleText: /share some ?(overall)? benefits you (have|guys) experienced/i },
  { ...both, titleText: /Can you ?(guys)? share some benefits/i },
];
