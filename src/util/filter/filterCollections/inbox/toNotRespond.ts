import { RegexFilters } from '../../regexUtil';

export const toNotRespondRegexArray: RegexFilters[] = [
  { replyText: /no (thank|sorry)/i },
  { replyText: /(paid|free)/i },

  { replyText: /(I'm|I’m|I am|im) not interest/i },
  { replyText: /I was interest/i },
  { replyText: /not going to read/i },
  { replyText: /fuck off/i },
  { replyText: /not interested/i },
  { replyText: /No I (don’t|dont|don't) meditate/i },
];
