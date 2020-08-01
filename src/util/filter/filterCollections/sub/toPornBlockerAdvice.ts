import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toPornBlockersAdviceRegexArray: InitialRegExpCollection[] = [
  { titleText: /block porn site/i },
  { titleText: /^Porn blocker(s)?$/i },

  { titleText: /what website blocker/i },
  { titleText: /Website-blocking software/i },

  { ...both, titleText: /can I block porn on reddit/i },
  { ...both, titleText: /How do I block NSFW/i },
  { ...both, titleText: /need a porn (.*)? blocker/i },
  { ...both, titleText: /what programs do you use to block porn/i },
  { ...both, titleText: /any good (plugins|websites|apps|programs) .* blocks/i },
  { ...both, titleText: /looking for more ways to block porn/i },
  { ...both, titleText: /is there an app .* that blocks/i },
  { ...both, titleText: /Good porn blockers for (mac|pc)/i },
  { ...both, titleText: /Has anyone found a .* blocker/i },
  { ...both, titleText: /Any ?(good)? porn blockers for/i },
];
