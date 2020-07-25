import { RegexFilters } from '../../regexUtil';

export const toNoWorriesGuideRegexArray: RegexFilters[] = [
  { replyText: /(What's|What’s|please share|share|to see|send|sending me|send me|leave me|give|gimme|give me|provide me|interested in|link|me know|show me|show|link me|have|appreciate|look at|provide|like|let me see|link|drop|post|to explore|dm me) ?(please)? (a|the|that|ur|your|you|for the|to ur|to the|to your|with the) (url|web|website|guide|site|link|address)/i },
  { replyText: /took up/i },

  // YES
  { replyText: /^sure$/i },
  { replyText: /^yes$/i },
  { replyText: /^yes/i }, // too broad
  { replyText: /(Yaa|ya) sure/i },
  { replyText: /yes please/i },
  { replyText: /(im|I'm|i m) in./i },
  { replyText: /(yes|yeah) (for sure|I am)/i },
  { replyText: /shoot me a link to the website/i },

  // CHECK
  { replyText: /(check|read| get |see|visit|hear about|curious about|know about|look into|share) ?(of)? ?(that|the|about|ur|your|this)? (any|it|site|link|web|guide|content|page)/i },
  { replyText: /(name of|checking out|check|checkout|check out|take a look at) (ur|your|the|that|to the) (article|site|link|web|guide|content|page)/i },
  { replyText: /I’ll check the link if you have it/i },

  // SEND
  { replyText: /(sent|send) me the (site|link|web|guide|content|page)/i },
  { replyText: /pass me your website/i },
  { replyText: /send website link/i },
  { replyText: /send that my way/i },
  { replyText: /send over the link/i },
  { replyText: /(send it|do share)/i },
  { replyText: /go ahead and send/i },
  { replyText: /share ?(me)? the/i },
  { replyText: /give (ur|your) (site|link|web|guide|content|page) a visit/i },
  { replyText: /hit me (up|with)/i },
  { replyText: /please pass on (the|that) website info/i },
  { replyText: /send me your website/i },
  { replyText: /send me this website/i },

  // PASSIVE ASK
  { replyText: /May I know (your|the) website/i },
  { replyText: /could I get a link/i },
  { replyText: /could send the website/i },
  { replyText: /you could share/i },
  { replyText: /could you please direct me to it/i },
  { replyText: /Feel free to link (that|your|the) website/i },
  { replyText: /feel free to share it/i },
  { replyText: /(can|could) you ?(please)? link/i },
  { replyText: /comfortable with sharing it/i },
  { replyText: /if you sent ?(me)? the (site|link|web|guide|content|page)/i },

  // SHARE
  { replyText: /can share me ur site/i },

  // INTERESTED
  { replyText: /(I'm|I’m|I am|iam|im|I'd be) ?(certainly|really|super)? (interested|intrested|interessted|interesting)/i },
  { replyText: /(definetly|definitely|totally|I am|I'm|I’m|im|I'd|id) ?(be)? (interested|intrested)/i },
  { replyText: /(interested|intrested|interesting) (about|to know about|with|in|in viewing|in seeing) (ur|your|the) (site|link|web|guide|content|page)/i },
  { replyText: /website sounds .* interesting/i },
  { replyText: /i would be interested/i },
  { replyText: /the website (sound|sounds) interesting/i },
  { replyText: /like to here about your/i },
  { replyText: /shoot me the link/i },
  { replyText: /Yea absolutely that'd be interesting/i },

  { replyText: /interested./i },
  { replyText: /(Sure I am|Yeah sure|Sure Bro)/i },
  { replyText: /to know more about your website/i },
  { replyText: /nice if you linked the website/i },

  { replyText: /wanna visit (ur|your) site/i },
  { replyText: /tell me more/i },
  { replyText: /like to look around at your site/i },
  { replyText: /interested in seeing your website/i },
  { replyText: /actually really interested in your website/i },
  { replyText: /I’d like to try any resources you’re willing to share/i },
  { replyText: /I appreciate any info/i },

  // GRATEFUL
  { replyText: /the website would be quite helpful/i },
  { replyText: /glad to (have|take) a look/i },
  { replyText: /That would be very welcome/i },
  { replyText: /would like to see what the website is/i },
  { replyText: /that website would be nice/i },
  { replyText: /yes that would be helpful/i },
  { replyText: /that would be really helpful/i },
  { replyText: /appreciate viewing your website/i },
  { replyText: /the (website|link) would be cool/i },
  { replyText: /will have a look on your website/i },
  { replyText: /I would really (appreaciate|appreciate) that/i },
  { replyText: /(it|that|link) would be (super|awesome|great|cool)/i },
  { replyText: /happy to check out the (url|web|website|guide|site|link|address|resource)/i },


  // LOVE
  { replyText: /(id|I'd) love/i },
  { replyText: /love to (see|know) (the|your) website/i },
  { replyText: /I would love to learn more about it/i },
  { replyText: /would love to visit/i },
  { replyText: /love to see the website/i },
  { replyText: /would love that website/i },
  { replyText: /website sounds like a huge help/i },
  { replyText: /Would love to see/i },
  { replyText: /take a look at your website/i },
  { replyText: /like to see (it|that)/i },

  // NEUTRAL
  { replyText: /(yah|ya|yeah) why not/i },

  // NAME
  { replyText: /name of (ur|your|the) (site|link|web|guide|content|page)/i },
  { replyText: /how is your website called/i },
  { replyText: /Whats is the website called/i },
  { replyText: /url for this (site|link|web|guide|content|page)/i },

  // CHECK
  { replyText: /check on your website/i },

  // LINK ME
  { replyText: /link ?(me)? to ur (site|link|web|guide|content|page)/i },
  { replyText: /I'll take the link/i },

  // UNSORTED
  { replyText: /Sure, I am looking for source material/i },
  // Sure, I am looking for source material which explains the process and not just the success stories

  // TODO
  // the website sounds great I’ll give it a look

  // UNSURE
  // || new /any advice you got for me/i).test(messagePayload.message)


  // I would love to hear your story and any advice you got for me
  //id like to here about your websitee
  // i'd be ,
    // article
  // TODO It will send in this scenario. Signifies the importance of context, not sure what to do about this.
  // Thank you for checking up on me. But I find this approach slightly ineffective. I mean, if you want more people to visit your website, make your website rank higher.


  // EDGET
  // From your experience should I go ahead with my marriage and start following nofap no pmo
  // Yes, meditation is really a key to control that urge, I have started inculcate those habits! Now I am on day 7 of nofap! It's true that mentally we have to be very strong! Thanks for your support! Means alot! 😇
  // Yes I meditate once a day, and pray constantly. I’m not afraid to ask God for help. (look into this, it shouldn't have triggered)

];