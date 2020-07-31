import { InitialRegExpCollection } from '../../regex/regexUtil';

export const toFantasticRegexArray: InitialRegExpCollection[] = [
  // DO MEDITATE
  { replyText: /I (currently|do) meditate for/i },
  { replyText: /I meditate daily/i },
  { replyText: /by meditating 10 minutes daily/i },
  { replyText: /I meditate and workout every day/i },
  { replyText: /I have been meditating for about a year/i },

  { replyText: /Yeah I do ?(transcendental)? meditation/i },
  { replyText: /^Yes(,)? I do \d+ minutes ?(of)? meditation(\.)? ?(each day|everyday|every day|daily)?$/i },


  // DO A LOT
  { replyText: /(done|do) a lot for my mental health/i },

  // UNSURE
  // { replyText: /started Therapy/i },
  // { replyText: /I meditate for/i },
];
