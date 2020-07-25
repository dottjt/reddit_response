import { RegexFilters } from '../../regexUtil';

export const toHardTimeRegexArray: RegexFilters[] = [
  { replyText: /I (don’t|dont|don't) ?(really)? do (anything|much|a whole lot|a lot) for my mental health/i },
  { replyText: /do nothing for my mental health/i },
  { replyText: /I (don’t|dont|don't) (meditate|do much)/i },
  { replyText: /I haven't done much/i },
  { replyText: /I just distract myself/i },
  { replyText: /never really done a lot for my mental health/i },
  { replyText: /I used to ?(do)? meditation/i },
  { replyText: /Personally I (don’t|don't|dont) take any measures to help my mental health/i },
];
