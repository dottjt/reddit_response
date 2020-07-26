import { RegexFilters } from '../../regexUtil';

export const toFantasticRegexArray: RegexFilters[] = [
  // DO MEDITATE
  { replyText: /I (currently|do) meditate for/i },
  { replyText: /I meditate daily/i },
  { replyText: /I meditate and workout every day/i },
  { replyText: /Yeah I do ?(transcendental)? meditation/i },

  // DO A LOT
  { replyText: /(done|do) a lot for my mental health/i },

  // UNSURE
  // { replyText: /started Therapy/i },
  // { replyText: /I meditate for/i },
];
