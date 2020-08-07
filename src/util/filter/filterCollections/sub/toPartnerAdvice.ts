import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toPartnerAdviceRegexArray: InitialRegExpCollection[] = [
  { ...both, titleText: /My husband is starting his nofap journey/i },
  { ...both, titleText: /How can I be supportive to him/i },
  { ...both, titleText: /How would I support/i },
  { ...both, titleText: /My boyfriend has been struggling/i },
  { ...both, titleText: /Trying to help him/i },
  { ...both, titleText: /Partner with a porn addiction/i },
  { ...both, titleText: /help me support my partner/i },

  { titleText: [/Partner/i, /porn addiction/i] },

  // Hi all - I am looking for resources to help me support my partner while he is in recovery. Does anyone have anything they’d recommend to me?
];
