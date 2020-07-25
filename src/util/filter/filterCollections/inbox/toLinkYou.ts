import { RegexFilters } from '../../regexUtil';

export const toLinkYouGuideRegexArray: RegexFilters[] = [
  { replyText: /(what's|What’s|what is|whats) the (site|link|website|webite|guide|content|page)/i },
  { replyText: /name of (ur|your) website/i },
  { replyText: /(what is|whats|what's|called) (ur|your|the) (site|link|website|webite|guide|content|page)/i },
  { replyText: /Tell me ?(about|the name of)? ?(ur|your|the)? (site|link|website|webite|guide|content|page)/i },
  { replyText: /What site have you/i },
  { replyText: /Where can I find this resource/i },
  { replyText: /what is this website\?/i },
  { replyText: /where can i find the website/i },
  { replyText: /links to any resources/i },
  { replyText: /What website is it/i },
  { replyText: /what website would that be/i },
  { replyText: /How can I access the guide/i },
];