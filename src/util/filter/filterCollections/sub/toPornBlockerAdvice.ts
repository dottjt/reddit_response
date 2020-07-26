import { RegexFilters, both } from '../../regexUtil';

export const toPornBlockerAdviceRegexArray: RegexFilters[] = [
  { titleText: /block porn site/i },
  { titleText: /what website blocker/i },
  { titleText: /Website-blocking software/i },

  { ...both, titleText: /How do I block NSFW/i },
  { ...both, titleText: /need a porn (.*)? blocker/i },
  { ...both, titleText: /what programs do you use to block porn/i },
];
