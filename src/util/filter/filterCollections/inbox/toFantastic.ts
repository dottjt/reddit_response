import { RegexFilters } from '../../regexUtil';

export const toFantasticRegexArray: RegexFilters[] = [
  { replyText: /I (currently|do) meditate/i },
  { replyText: /I meditate daily/i },
  { replyText: /done a lot for my mental health/i },
  { replyText: /Yes I do meditate for 5 minutes each day/i },
  { replyText: /I meditate and workout every day/i },
  { replyText: /Yeah I do ?(transcendental)? meditation/i },

  // UNSURE
  // { replyText: /started Therapy/i },
  // { replyText: /I meditate for/i },
];
