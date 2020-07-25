import { RegexFilters } from '../../regexUtil';

export const toJoinSubredditRegexArray: RegexFilters[] = [
  { replyText: /(ty|thank you|thanks|thankyou|thank u)/i },
  { replyText: /(I'll||I’ll|ill|I will) ?(.*) (check|checkout|check it|check out)/i },
  { replyText: /will visit/i },
  { replyText: /visit ?(.*) today/i },
  { replyText: /(wow|cheers)/i },
  { replyText: /I ?(genuinely)? appreciate/i },
  { replyText: /for sharing/i },
  { replyText: /thanks for/i },
  { replyText: /thanks (man|bro)/i },
  { replyText: /great resource/i },

// Thank you i will check both of them out
];
