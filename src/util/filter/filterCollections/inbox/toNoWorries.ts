import { InitialRegExpCollection } from '../../regex/regexUtil';

// TODO SORT AND FIGURE OUT, IT IS SUPER BLOATED

export const toNoWorriesGuideRegexArray: InitialRegExpCollection[] = [
  { replyText: /(What's|What’s|please share|share|to see|send|sending me|send (ne|me|us)|leave me|give|gimme|give me|provide me|interested in|link|me know|show me|show|link me|have|appreciate|look at|provide|like|let me see|link|drop|post|to explore|dm me) ?(please)? (a|the|that|ur|your|you|for the|to ur|to the|to your|with the) (url|website|web site|guide|site|link|address)/i },
  { replyText: /took up/i },

  // YES

  { replyText: /^Sure\!/i },
  { replyText: /^sure$/i },
  { replyText: /^yes$/i },
  { replyText: /^(Yaa|ya)$/i },
  { replyText: /(Yaa|ya) sure/i },
  { replyText: /yes(,)? please/i },
  { replyText: /^(im|I'm|i m) in(\.)?$/i },
  { replyText: /(yes|yeah) (for sure|I am)/i },
  { replyText: /shoot me a link/i },
  { replyText: /whats also your website/i },
  { replyText: /shoot the link over/i },
  { replyText: /open to looking at your website/i },
  { replyText: /^Definitely yes$/i },
  { replyText: /can you send me/i },
  { replyText: /Any resources I can use/i },
  { replyText: /Please share details/i },
  { replyText: /know more about the website/i },
  { replyText: /know more about this site/i },

  // { replyText: /^yes I am interested/i }, // too broad

  // CHECK
  { replyText: /(check|read| get |visit|hear about|curious about|know about|look into|share) ?(of)? ?(that|the|about|ur|your|this)? (any|it|site|link|web|guide|content|page)/i },
  { replyText: /(name of|check|checkout|check out|take a look at) (ur|your|the|that|to the) (article|site|link|web|guide|content|page)/i },
  { replyText: /interested in checking out (ur|your|the|that|to the) (article|site|link|web|guide|content|page)/i },
  { replyText: /I’ll check the link if you have it/i },
  { replyText: /keen to check out your website/i },
  { replyText: /feel free to give me the link/i },
  { replyText: /Feel free to link the website/i },
  { replyText: /feel free to send me the link/i },
  { replyText: /would be glad to check your website/i },
  { replyText: /send me website/i },
  { replyText: /I (wouldn’t|wouldn't) (mine|mind) checking it out/i },

  // SEND
  { replyText: /send (me|over) the link/i },
  { replyText: /send me ?(a|the)? link/i },
  { replyText: /(send it|do share)/i },
  { replyText: /go ahead and send/i },
  { replyText: /share ?(me)? the/i },
  { replyText: /give (ur|your) (site|link|web|guide|content|page) a visit/i },
  { replyText: /hit me (up|with)/i },
  { replyText: /hit me what (you’ve|you've) got/i },
  { replyText: /please pass on (the|that) website info/i },
  { replyText: /send me (your|this) (page|website)/i },
  { replyText: /(sent|send|pass) me (your|the) (site|link|web|guide|content|page)/i },
  { replyText: /send link to website/i },
  { replyText: /send ?(that)? my way/i },
  { replyText: /send website link/i },
  { replyText: /send your guide/i },
  { replyText: /Send me bro\./i },
  { replyText: /share with me the website/i },
  { replyText: /Send dat link/i },
  { replyText: /give me link/i },
  { replyText: /would like to see this website/i },
  { replyText: /interested in viewing the website/i },

  { replyText: /provide me with some link/i },
  { replyText: /Suggest me your website/i },
  { replyText: /send link pls/i },
  { replyText: /feel free on sending me a link to your site/i },
  { replyText: /would be amazing if I could see that guide/i },
  { replyText: /that link would be useful/i },
  { replyText: /please send on any advise you have/i },

  // PASSIVE ASK

  { replyText: /can link me to this website/i },
  { replyText: /May I know (your|the) website/i },
  { replyText: /glad to know your website/i },
  { replyText: /could I get a link/i },
  { replyText: /could send the website/i },
  { replyText: /you could share/i },
  { replyText: /I could take a look/i },
  { replyText: /could you please direct me to it/i },
  { replyText: /Feel free to link (that|your|the) website/i },
  { replyText: /feel free to share it/i },
  { replyText: /feel free to send me (the|a) link/i },
  { replyText: /would like to discover page/i },
  { replyText: /that website could be great/i },
  { replyText: /left the link of the website/i },
  { replyText: /can have a read into your website/i },
  { replyText: /be thankful for that link/i },
  { replyText: /would appreciate if you could help me/i },
  { replyText: /would like to look your website/i },
  { replyText: /could use anything that would help me/i },
  { replyText: /love to check out your resources/i },
  { replyText: /intrested in seeing ur work/i },
  { replyText: /love to look at your website/i },
  { replyText: /hear more about the website/i },

  { replyText: /^Ya I interested/i },
  { replyText: /would be very interested/i },

  { replyText: /^Yeah I'm interested/i },

  { replyText: /(can|could) you ?(please)? link/i },
  { replyText: /comfortable with sharing it/i },
  { replyText: /what the link/i },
  { replyText: /Fire away with your website/i },
  { replyText: /sure (I’ll|ill|I'll) take a look/i },
  { replyText: /if you sent ?(me)? the (site|link|web|guide|content|page)/i },
  { replyText: /(wouldn’t|wouldn't) mind checking out your website/i },
  { replyText: /if you could link it/i },
  { replyText: /take all the help I can get/i },
  { replyText: /check out your NoFap website/i },
  { replyText: /share with me the link/i },
  { replyText: /get a link to website/i },
  { replyText: /Can I see this website/i },
  { replyText: /so interested in this website/i },
  { replyText: /interested in the site/i },
  { replyText: /send me the link/i },
  { replyText: /Shoot me your website/i },

  // SHARE
  { replyText: /can share me (your|ur) site/i },
  { replyText: /feel free to share your website/i },
  { replyText: /could you share your mediation website/i },
  { replyText: /Feel free to share the link of your website/i },
  { replyText: /glad if (you|u) share/i },
  { replyText: /Link it pls/i },
  { replyText: /Sure(,)? link it/i },

  { replyText: /pass on the link/i },
  { replyText: /shoot your website/i },
  { replyText: /be down to read that/i },
  { replyText: /if u could send me/i },

  // INTERESTED
  { replyText: /(I'm|I’m|I am|iam|im|I'd be|I'd|I’d) ?(certainly|certainly be|really|super)? (interested|intrested|interessted|interesting)/i },
  { replyText: /(I'm|I’m|I am|iam|im) interested in the website/i },
  { replyText: /(I'm|I’m|I am|iam|im) absolutely interested/i },
  { replyText: /(I'd|id|I’d) be interested in checking it/i },
  { replyText: /I am interested in your site/i },
  { replyText: /I highly interested/i },
  { replyText: /Am so interested/i },

  { replyText: /interested to follow your website/i },
  { replyText: /interested in having a look at your website/i },
  { replyText: /interested in the information/i },
  { replyText: /would be interesting to read/i },
  { replyText: /deffo interested/i },
  { replyText: /I Definitely am interested/i },
  { replyText: /Website would be interesting/i },

  { replyText: /(definetly|definitely|totally|I am|I'm|I’m|im|I'd|id) ?(be|very)? (interested|intrested)/i },
  { replyText: /(interested|intrested|interesting) (about|to know about|with|in|in viewing|in seeing) (ur|your|the) (site|link|web|guide|content|page)/i },
  { replyText: /website sounds .* interesting/i },
  { replyText: /i would be (intrested|interested)/i },
  { replyText: /I'm very much (intrested|interested)/i },

  { replyText: /the website (sound|sounds) interesting/i },
  { replyText: /like to here about your/i },
  { replyText: /shoot me the link/i },
  { replyText: /Yea absolutely that'd be interesting/i },
  { replyText: /interesting in looking at your website/i },

  { replyText: /interested in looking at your .* website/i },
  { replyText: /(Sure I am|Yeah sure|Sure Bro)/i },
  { replyText: /to know more about your website/i },
  { replyText: /nice if you linked the website/i },
  { replyText: /like to take a look at it/i },

  { replyText: /wanna visit (ur|your) site/i },
  { replyText: /tell me more/i },
  { replyText: /Tell me about this website/i },
  { replyText: /like to look around at your site/i },
  { replyText: /interested in seeing your website/i },
  { replyText: /actually really interested in your website/i },
  { replyText: /(I'd|id|I’d) like to try any resources you’re willing to share/i },
  { replyText: /I appreciate any info/i },
  { replyText: /(I'd|id|I’d) like to see that/i },

  // GRATEFUL
  { replyText: /the website would be quite helpful/i },
  { replyText: /glad to (have|take) a look/i },
  { replyText: /That would be very welcome/i },
  { replyText: /would like to see what the website is/i },
  { replyText: /that website would be (great|nice)/i },
  { replyText: /yes that would be helpful/i },
  { replyText: /that would be really helpful/i },
  { replyText: /appreciate viewing your (web site|website)/i },
  { replyText: /the (website|link) would be cool/i },
  { replyText: /Any information you could/i },
  { replyText: /would (definitely|definelty) read thorugh it/i },
  { replyText: /will have a look on your (web site|website)/i },
  { replyText: /I would really (appreaciate|appreciate) that/i },
  { replyText: /(it|that|link) would be (super|awesome|great|cool)/i },
  { replyText: /happy to check out the (url|web site|website|guide|site|link|address|resource)/i },

  // LOVE
  { replyText: /(id|I'd|I’d) love/i },
  { replyText: /love to (see|know) (the|your) (web site|website)/i },
  { replyText: /I would love to learn more about it/i },
  { replyText: /would love to visit/i },
  { replyText: /love to see the (web site|website)/i },
  { replyText: /would love that (web site|website)/i },
  { replyText: /website sounds like a huge help/i },
  { replyText: /Would love to see/i },
  { replyText: /take a look at your (web site|website)/i },
  { replyText: /like to see (it|that)/i },
  { replyText: /love to go through your website/i },
  { replyText: /i could go over your website/i },

  // NEUTRAL
  { replyText: /(yah|ya|yeah) why not/i },

  // NAME
  { replyText: /name of (ur|your|the) (site|link|web|guide|content|page)/i },
  { replyText: /how is your website called/i },
  { replyText: /Whats is the website called/i },
  { replyText: /url for this (site|link|web|guide|content|page)/i },

  // CHECK
  { replyText: /check on your website/i },
  { replyText: /what is this website called/i },

  // LINK ME
  { replyText: /link ?(me)? to ur (site|link|web|guide|content|page)/i },
  { replyText: /(I’ll|ill|I'll) take the link/i },

  // UNSORTED

  { replyText: /Sure, I am looking for source material/i },
  { replyText: /Any help or resources you have/i },
  { replyText: /source material which explains the process/i },
  { replyText: /sounds great/i },
  { replyText: /would love to hear your story/i },
  { replyText: /like to here about your/i },

  // TODO
  //   Any particular advice you care to give will be greatly appreciated.
  // give me your best advice that helped you beat this addiction.


  // UNVIABLE
  // || new /any advice you got for me/i).test(messagePayload.message) // too broad

  // article
  // TODO It will send in this scenario. Signifies the importance of context, not sure what to do about this.

  // EDGET
  // From your experience should I go ahead with my marriage and start following nofap no pmo
  // Yes, meditation is really a key to control that urge, I have started inculcate those habits! Now I am on day 7 of nofap! It's true that mentally we have to be very strong! Thanks for your support! Means alot! 😇
  // Yes I meditate once a day, and pray constantly. I’m not afraid to ask God for help. (look into this, it shouldn't have triggered)
  // Thank you for checking up on me. But I find this approach slightly ineffective. I mean, if you want more people to visit your website, make your website rank higher.
];


