import { RegexFilters } from '../../regexUtil';

export const toMeditateGuideRegexArray: RegexFilters[] = [
  { replyText: /would love to (mediate|meditate)/i },
  { replyText: /(don't|dont|don’t) know (how|where) to start/i },
  { replyText: /tips on meditating\?/i },
  { replyText: /I (don’t|dont|don't) know how to (do meditation|meditate). Can you please suggest something/i },
  { replyText: /^How do (u|you) meditate?$/i },
  { replyText: /^How do (u|you) meditate?$/i },
  { replyText: /How does one meditate\?/i },
  { replyText: /wondering how do u meditate/i },
  { replyText: /any specific way to do it\?/i },
  { replyText: /could ?(you)? give me some (tipps|tips) for beginners/i },
];
