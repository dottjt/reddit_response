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


// EDGE - I think this stopped it.
// Hey, I greatly appreciated your response to my post.

// Yes I agree that it really is hard to control yourself and thats what I'm doing although I failed but I can restart again. But I don't want to restart often cause I'm just disappointing myself more.

// No, I don't do literally anything about my mental health. So thanks for pointing it out, I tried inhaling-exhaling this day and it really works so well.

// Yes, I'm interested in the website of yours. I'd read it on my free time or any time I get really bored and have an urge.

// Thanks again and also forgive me if this doesn't seem to formal of an email lol

