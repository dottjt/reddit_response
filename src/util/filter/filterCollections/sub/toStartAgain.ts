import { RegexFilters } from '../../regexUtil';

export const toStartAgainRegexArray: RegexFilters[] = [
  { titleText: /(begin|let's do this) again/i },
  { titleText: /gonna try again/i, },
  { titleText: /trying it again/i, },
  { titleText: /decided to try this again/i, },
  { titleText: /going to quit (.*)? today/i, },
  { titleText: /one last try/i, },
  { titleText: /back on my journey/i, },
  { titleText: /coming back to (nofap|no fap|no-fap)/i, },
  { titleText: /^trying again$/i, },
  { titleText: /day (1|one) again/i, },
  { titleText: /starting, again/i, },
  { titleText: /^starting again(\.)?$/i, },
  { titleText: /need to start fresh/i, },
  { titleText: /doing (nofap|no fap|no-fap) again/i, },
];