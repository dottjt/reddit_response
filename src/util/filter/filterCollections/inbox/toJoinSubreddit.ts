import { RegexFilters } from '../../regexUtil';

export const toJoinSubredditRegexArray: RegexFilters[] = [
  // THANK YOU
  { replyText: /^ty$/i },
  { replyText: /(thank you|thanks|thankyou|thank u)/i }, // don't have ty, it's too broad.
  { replyText: /(wow|cheers)/i },

  // CHECK IT
  { replyText: /(I'll||I’ll|ill|I will) ?(.*) (check|checkout|check it|check out)/i },

  // VISIT
  { replyText: /will visit/i },
  { replyText: /visit ?(.*) today/i },

  // APPRECIATION
  { replyText: /I ?(genuinely)? appreciate/i },
  { replyText: /great resource/i },
];
