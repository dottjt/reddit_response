import { InitialRegExpCollection } from '../../regex/regexUtil';

export const toLinkYouGuideRegexArray: InitialRegExpCollection[] = [
  // WHAT IS NAME
  { replyText: /(what's|What’s|what is|whats) the (name|site|link|website|web site|webite|guide|content|page)/i },
  { replyText: /(what is|whats|what's|called) (ur|your|the) (name|site|link|website|web site|webite|guide|content|page)/i },
  { replyText: /name of (ur|your) (site|link|website|web site|webite|guide|content|page)/i },

  // TELL ME MORE
  { replyText: /Tell me ?(about|the name of)? ?(ur|your|the)? (site|link|website|web site|webite|guide|content|page)/i },

  // WHERE TO FIND
  { replyText: /where can i find (this|the) (site|link|website|web site|webite|guide|content|page)/i },
  { replyText: /(Im|I'm) considering reading/i },
  { replyText: /How can i see your (site|link|website|web site|webite|guide|content|page)/i },
  { replyText: /which is the URL/i },
  { replyText: /where is the guide/i },

  // WHAT
  { replyText: /What (site|link|website|web site|webite|guide|content|page) have you/i },
  { replyText: /What (site|link|website|web site|webite|guide|content|page) (is it|would that be)/i },
  { replyText: /what is this (name|site|link|website|web site|webite|guide|content|page|it)\?/i },
  { replyText: /yeah what is it/i },

  { replyText: /would you mind sharing that/i },
  { replyText: /which is your website/i },
  { replyText: /what is it called/i },
  { replyText: /Sure (what’s|what is|what's) it called/i },

  // HOW
  { replyText: /How can I access (your|ur|the) (name|site|link|website|web site|webite|guide|content|page|it)/i },

  // LINKS
  { replyText: /(link|links) to any resources/i },
];