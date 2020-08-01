import { InitialRegExpCollection } from '../../regex/regexUtil';

export const toMeditateGuideRegexArray: InitialRegExpCollection[] = [
  // EXPRESS INTERESTED
  { replyText: /would love to (mediate|meditate)/i },
  { replyText: /tips on meditating\?/i },
  { replyText: /you have any meditation tips\?/i },
  { replyText: /How would you go about doing meditation\?/i },

  // NOT SURE HOW TO BEGIN
  { replyText: /I (don’t|dont|don't) know how to (do meditation|meditation|meditate). (could|can) you please suggest something/i },
  { replyText: /(don't|dont|don’t) know (how|where) to start/i },
  { replyText: /How (to|do) ?(u|you)? (mediate|meditate)/i },
  { replyText: /Do you have any tips for meditation\?/i },
  { replyText: /How does one (mediate|meditate)\?/i },
  { replyText: /could ?(you)? give me some (tipps|tips|advice) for begin/i },
  { replyText: /I (want to|wanna) start meditation(,)? but I (don't|dont|don’t) know how/i },
  { replyText: /I ?(truly)? do not (mediate|meditate) because I do not know (how|to do it)/i },

  // EDGE
  // I know how to mediate as I have quite a bit of experience with it - how to mediate
];
