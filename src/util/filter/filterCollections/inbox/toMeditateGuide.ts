import { RegexFilters } from '../../regexUtil';

export const toMeditateGuideRegexArray: RegexFilters[] = [
  { replyText: /would love to (mediate|meditate)/i },
  { replyText: /(don't|dont|don’t) know (how|where) to start/i },
  { replyText: /tips on meditating\?/i },
  { replyText: /I (don’t|dont|don't) know how to (do meditation|meditate). Can you please suggest something/i },
  { replyText: /^How do (u|you) meditate?$/i },
  // How does one meditate?
  // I'm wondering how do u meditate
  // Thank you so much for reaching out. I’ve never tried meditation but I’ve heard it helps a lot, is there any specific way to do it? Are there different methods?
];
