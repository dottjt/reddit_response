import { RegexFilters } from '../../regexUtil';

export const toMeditateGuideRegexArray: RegexFilters[] = [
  // EXPRESS INTERESTED
  { replyText: /would love to (mediate|meditate)/i },
  { replyText: /tips on meditating\?/i },

  // NOT SURE HOW TO BEGIN
  { replyText: /I (don’t|dont|don't) know how to (do meditation|meditation|meditate). (could|can) you please suggest something/i },
  { replyText: /(don't|dont|don’t) know (how|where) to start/i },
  { replyText: /How (to|do) ?(u|you)? (mediate|meditate)/i },
  { replyText: /How does one (mediate|meditate)\?/i },
  { replyText: /could ?(you)? give me some (tipps|tips|advice) for begin/i },
  { replyText: /any specific way to (do it|meditate)\?/i },
];
