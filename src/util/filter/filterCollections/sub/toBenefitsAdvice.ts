import { RegexFilters } from '../../regexUtil';

export const toBenefitsAdviceRegexArray: RegexFilters[] = [
  { titleText: /I want to know the benefits of (NoFap|no fap|no-fap)/i },
  { titleText: /what are the benefits to quitting/i },
  { titleText: /Benefits from quitting\?/i },
  { titleText: /^beneftis(\?|.)?$/i },
  { titleText: /^(NoFap|no fap|no-fap) benefits(\?|.)?$/i },
];
