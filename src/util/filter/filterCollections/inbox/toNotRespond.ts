import { RegexFilters } from '../../regexUtil';

export const toNotRespondRegexArray: RegexFilters[] = [
  // MONEY
  { replyText: /(paid|free)/i },

  // NOT INTERESTED
  { replyText: /(I'm|I’m|I am|im|i m) not interest/i },
  { replyText: /not interest/i },
  { replyText: /no (thank|sorry|ty)/i },
  { replyText: /not (going|gonna) to read/i },
  { replyText: /(it’s|it's|its|it is) not for me/i },

  // WAS INTERESTED
  { replyText: /I was interest/i },
  { replyText: /was interest/i },

  // REFUSE MEDITATION
  { replyText: /No I (don’t|dont|don't) meditate/i },

  // ANGER
  { replyText: /fuck (you|off)/i },
  { replyText: /piss off/i },
  { replyText: /(flag|report) you/i },
];
