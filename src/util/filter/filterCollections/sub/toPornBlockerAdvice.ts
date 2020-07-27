import { RegexFilters, both } from '../../regexUtil';

export const toPornBlockersAdviceRegexArray: RegexFilters[] = [
  { titleText: /block porn site/i },
  { titleText: /what website blocker/i },
  { titleText: /Website-blocking software/i },

  { ...both, titleText: /can I block porn on reddit/i },
  { ...both, titleText: /How do I block NSFW/i },
  { ...both, titleText: /need a porn (.*)? blocker/i },
  { ...both, titleText: /what programs do you use to block porn/i },
  { ...both, titleText: /any good (plugins|websites|apps|programs) .* blocks/i },
  { ...both, titleText: /looking for more ways to block porn/i },
];
