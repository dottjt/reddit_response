import { RegexFilters } from '../../regexUtil';

export const toBenefitsAdviceRegexArray: RegexFilters[] = [
  { titleText: /I want to know the benefits of (NoFap|no fap|no-fap)/i },
  { titleText: /^beneftis(\?|.)?$/i },
];
