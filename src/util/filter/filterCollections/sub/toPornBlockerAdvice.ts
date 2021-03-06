import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toPornBlockersAdviceRegexArray: InitialRegExpCollection[] = [
  { titleText: /block porn site/i },
  { titleText: /^Porn blocker(s)?$/i },

  { titleText: /what website blocker/i },
  { titleText: /Website-blocking software/i },

  { ...both, titleText: /Porn blocker for (android|iPhone|pc|mac)/i },
  { ...both, titleText: /how to block porn/i },
  { ...both, titleText: /way to ban porn/i },
  { ...both, titleText: /(perfect|best) porn blocker/i },
  { ...both, titleText: /ban porn sites/i },
  { ...both, titleText: /internet filters/i },
  { ...both, titleText: /way to block porn/i },
  { ...both, titleText: /Advice on Porn Block/i },
  { ...both, titleText: /please advice any porn block/i },
  { ...both, titleText: /Mac site blockers/i },
  { ...both, titleText: /block adult content/i },
  { ...both, titleText: /Good Blocker\?/i },

  { ...both, titleText: /finding a porn blocker/i },
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
  { ...both, titleText: /Blockers for adult content/i },
  { ...both, titleText: /looking for a way to block/i },
  { ...both, titleText: /know any browser extensions/i },
  { ...both, titleText: /can i block a website/i },
  { ...both, titleText: /some way of blocking/i },
  { ...both, titleText: /help applying filters/i },
  { ...both, titleText: /how can I disable my/i },
  { ...both, titleText: /Need Porn blocker/i },
  { ...both, titleText: /recommend an app to block/i },
  { ...both, titleText: /program that disables/i },

  { messageText: [ /an app/, /can block websites/ ] },
];
