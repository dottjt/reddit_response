import { RegexFilters } from '../../regexUtil';

export const toHardTimeRegexArray: RegexFilters[] = [
  // DON'T DO ANYTHING / MUCH
  { replyText: /I (don’t|dont|don't) ?(really)? do (anything|much|a whole lot|a lot) for my mental health/i },
  { replyText: /do nothing for my mental health/i },
  { replyText: /I (haven't|haven’t|have not) done much/i },
  { replyText: /never really done (much|a lot) for my mental health/i },
  { replyText: /I (don’t|don't|dont) take any measures to (improve|help) my mental health/i },
  { replyText: /I (don’t|don't|dont) (place|put) much attention on my mental health/i },

  // DON'T MEDITATE
  { replyText: /I (don’t|dont|don't) (mediate|meditate|do much)/i },
  { replyText: /I used to ?(do)? (mediate|meditate|meditation)/i },
  { replyText: /I used to (mediate|meditate) .* but (I've|I’ve|Ive|I) stopped/i },

  // DISTRACT
  { replyText: /I just distract myself/i },
];
