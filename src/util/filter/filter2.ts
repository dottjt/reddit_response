import { PopulateReceivedMessagesPayload } from '../../types/tamperMonkeyTypes';

export const toNotRespond = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/no thank/i).test(messagePayload.message)
  || new RegExp(/(I'm|I’m|I am|im) not interest/i).test(messagePayload.message)

export const toNoWorriesGuide = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/(What's|What’s|please share|share|to see|send|sending me|send me|leave me|give|gimme|give me|provide me|interested in|link|me know|show me|show|link me|have|appreciate|look at|provide|like|let me see|link|drop|post|to explore) ?(please)? (a|the|that|ur|your|you|for the|to ur|to the|to your|with the) (web|website|guide|site|link|address)/i).test(messagePayload.message)
  || new RegExp(/hit me (up|with)/i).test(messagePayload.message)
  || new RegExp(/go ahead/i).test(messagePayload.message)
  || new RegExp(/took up/i).test(messagePayload.message)
  || new RegExp(/appreciate viewing your website/i).test(messagePayload.message)
  || new RegExp(/website sounds .* interesting/i).test(messagePayload.message)
  || new RegExp(/(definetly|definitely|totally|I am|I'm|I’m|im|I'd|id) ?(be)? (interested|intrested)/i).test(messagePayload.message)
  || new RegExp(/link ?(me)? to ur (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/url for this (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(I'm|I’m|I am|im|I'd be) ?(certainly|really|super)? (interested|intrested|interessted|interesting)/i).test(messagePayload.message)
  || new RegExp(/I’ll check the link if you have it/i).test(messagePayload.message)
  || new RegExp(/(sent|send) me the (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(yes|yeah) (for sure|I am)/i).test(messagePayload.message)
  || new RegExp(/give (ur|your) (site|link|web|guide|content|page) a visit/i).test(messagePayload.message)
  || new RegExp(/wanna visit (ur|your) site/i).test(messagePayload.message)
  || new RegExp(/yes please/i).test(messagePayload.message)
  || new RegExp(/name of (ur|your|the) (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/like to see (it|that)/i).test(messagePayload.message)
  || new RegExp(/(interested|intrested|interesting) (about|to know about|with|in|in viewing|in seeing) (ur|your|the) (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(name of|checking out|check|checkout|check out|take a look at) (ur|your|the|that|to the) (article|site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(send it|do share)/i).test(messagePayload.message)
  || new RegExp(/if you sent ?(me)? the (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(check|read| get |see|visit|hear about|curious about|know about|look into|share) ?(of)? ?(that|the|about|ur|your|this)? (any|it|site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(it|that|link) would be (super|awesome|great|cool)/i).test(messagePayload.message)
  || new RegExp(/you could share/i).test(messagePayload.message)
  || new RegExp(/(id|I'd) love/i).test(messagePayload.message)
  || new RegExp(/tell me more/i).test(messagePayload.message)
  || new RegExp(/share ?(me)? the/i).test(messagePayload.message)
  || new RegExp(/(can|could) you ?(please)? link/i).test(messagePayload.message)
  || new RegExp(/^sure$/i).test(messagePayload.message)
  || new RegExp(/^yes$/i).test(messagePayload.message)
  || new RegExp(/website sounds like a huge help/i).test(messagePayload.message)
  || new RegExp(/comfortable with sharing it/i).test(messagePayload.message)
  || new RegExp(/to know more about your website/i).test(messagePayload.message)
  || new RegExp(/how is your website called/i).test(messagePayload.message)
  || new RegExp(/i m in./i).test(messagePayload.message)
  || new RegExp(/(Sure I am|Yeah sure|Sure Bro)/i).test(messagePayload.message)
  || new RegExp(/will have a look on your website/i).test(messagePayload.message)
  || new RegExp(/please pass on (the|that) website info/i).test(messagePayload.message)
  || new RegExp(/feel free to share it/i).test(messagePayload.message)
  || new RegExp(/any advice you got for me/i).test(messagePayload.message)
  || new RegExp(/I would really (appreaciate|appreciate) that/i).test(messagePayload.message)
  || new RegExp(/like to look around at your site/i).test(messagePayload.message)
  || new RegExp(/the (website|link) would be cool/i).test(messagePayload.message)
  || new RegExp(/send that my way/i).test(messagePayload.message)
  || new RegExp(/interested./i).test(messagePayload.message)
  || new RegExp(/would love to visit/i).test(messagePayload.message)
  || new RegExp(/nice if you linked the website/i).test(messagePayload.message)
  || new RegExp(/glad to (have|take) a look/i).test(messagePayload.message)
  || new RegExp(/That would be very welcome/i).test(messagePayload.message)
  || new RegExp(/could I get a link?/i).test(messagePayload.message)
  || new RegExp(/May I know your website?/i).test(messagePayload.message)
  || new RegExp(/pass me your website/i).test(messagePayload.message)

  // I would love to hear your story and any advice you got for me
  // i'd be ,
    // article
// TODO It will send in this scenario. Signifies the importance of context, not sure what to do about this.
// Thank you for checking up on me. But I find this approach slightly ineffective. I mean, if you want more people to visit your website, make your website rank higher.



export const toLinkYouGuide = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/(what's|what is|whats) the (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/name of (ur|your) website/i).test(messagePayload.message)
  || new RegExp(/(what is|whats|what's|called) (ur|your|the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/Tell me ?(about|the name of)? ?(ur|your|the)? (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/What site have you/i).test(messagePayload.message)
  || new RegExp(/Where can I find this resource?/i).test(messagePayload.message)
  || new RegExp(/what is this website?/i).test(messagePayload.message)
  || new RegExp(/where can i find the website?/i).test(messagePayload.message)


export const toMeditateGuide = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/would love to (mediate|meditate)/i).test(messagePayload.message)
  || new RegExp(/(don't|dont|don’t) know (how|where) to start/i).test(messagePayload.message)
  || new RegExp(/tips on meditating?/i).test(messagePayload.message)
  || new RegExp(/I (don’t|dont|don't) know how to (do meditation|meditate). Can you please suggest something/i).test(messagePayload.message)
  || new RegExp(/^How do you meditate?$/i).test(messagePayload.message)

export const toHardTime = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/I (don’t|dont|don't) ?(really)? do (anything|much) for my mental health/i).test(messagePayload.message)
  || new RegExp(/do nothing for my mental health/i).test(messagePayload.message)

export const toJoinSubreddit = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/(ty|thank you|thanks)/i).test(messagePayload.message)
  || new RegExp(/(I'll||I’ll|ill|I will) ?(.*) (check|checkout|check it|check out)/i).test(messagePayload.message)
  || new RegExp(/will visit/i).test(messagePayload.message)
  || new RegExp(/visit ?(.*) today/i).test(messagePayload.message)
  || new RegExp(/(wow|cheers)/i).test(messagePayload.message)
  || new RegExp(/I ?(genuinely)? appreciate/i).test(messagePayload.message)
  || new RegExp(/for sharing/i).test(messagePayload.message)
// Thank you i will check both of them out

export const toFantastic = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/I (currently|do) meditate/i).test(messagePayload.message)
  || new RegExp(/I meditate daily/i).test(messagePayload.message)

// That's Fantasti
// Yeah I do transcendental meditation twice a day




// OTHER
// Meditating at night can gelp witg controlling the wet dreams


// Any help or advice would be appreciated.

