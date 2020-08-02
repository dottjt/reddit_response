import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toPartnerAdviceRegexArray: InitialRegExpCollection[] = [
  { ...both, titleText: /My husband is starting his nofap journey/i },
  { ...both, titleText: /How can I be supportive to him/i },
];
