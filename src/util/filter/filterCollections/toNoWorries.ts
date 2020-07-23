import { PopulateReceivedMessagePayload } from '../../../types/tamperMonkeyTypes';

export const toNoWorriesGuide = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/(What's|What’s|please share|share|to see|send|sending me|send me|leave me|give|gimme|give me|provide me|interested in|link|me know|show me|show|link me|have|appreciate|look at|provide|like|let me see|link|drop|post|to explore|dm me) ?(please)? (a|the|that|ur|your|you|for the|to ur|to the|to your|with the) (url|web|website|guide|site|link|address)/i).test(messagePayload.message)
  || new RegExp(/took up/i).test(messagePayload.message)

  // YES
  || new RegExp(/^sure$/i).test(messagePayload.message)
  || new RegExp(/^yes$/i).test(messagePayload.message)
  || new RegExp(/^yes/i).test(messagePayload.message)
  || new RegExp(/yes please/i).test(messagePayload.message)
  || new RegExp(/i m in./i).test(messagePayload.message)
  || new RegExp(/(yes|yeah) (for sure|I am)/i).test(messagePayload.message)

  // CHECK
  || new RegExp(/(check|read| get |see|visit|hear about|curious about|know about|look into|share) ?(of)? ?(that|the|about|ur|your|this)? (any|it|site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(name of|checking out|check|checkout|check out|take a look at) (ur|your|the|that|to the) (article|site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/I’ll check the link if you have it/i).test(messagePayload.message)

  // SEND
  || new RegExp(/(sent|send) me the (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/pass me your website/i).test(messagePayload.message)
  || new RegExp(/send website link/i).test(messagePayload.message)
  || new RegExp(/send that my way/i).test(messagePayload.message)
  || new RegExp(/send over the link/i).test(messagePayload.message)
  || new RegExp(/(send it|do share)/i).test(messagePayload.message)
  || new RegExp(/go ahead and send/i).test(messagePayload.message)
  || new RegExp(/share ?(me)? the/i).test(messagePayload.message)
  || new RegExp(/give (ur|your) (site|link|web|guide|content|page) a visit/i).test(messagePayload.message)
  || new RegExp(/hit me (up|with)/i).test(messagePayload.message)
  || new RegExp(/please pass on (the|that) website info/i).test(messagePayload.message)

  // PASSIVE ASK
  || new RegExp(/May I know (your|the) website/i).test(messagePayload.message)
  || new RegExp(/could I get a link/i).test(messagePayload.message)
  || new RegExp(/could send the website/i).test(messagePayload.message)
  || new RegExp(/you could share/i).test(messagePayload.message)
  || new RegExp(/could you please direct me to it/i).test(messagePayload.message)
  || new RegExp(/Feel free to link (that|your|the) website/i).test(messagePayload.message)
  || new RegExp(/feel free to share it/i).test(messagePayload.message)
  || new RegExp(/(can|could) you ?(please)? link/i).test(messagePayload.message)
  || new RegExp(/comfortable with sharing it/i).test(messagePayload.message)
  || new RegExp(/if you sent ?(me)? the (site|link|web|guide|content|page)/i).test(messagePayload.message)

  // INTERESTED
  || new RegExp(/(I'm|I’m|I am|iam|im|I'd be) ?(certainly|really|super)? (interested|intrested|interessted|interesting)/i).test(messagePayload.message)
  || new RegExp(/(definetly|definitely|totally|I am|I'm|I’m|im|I'd|id) ?(be)? (interested|intrested)/i).test(messagePayload.message)
  || new RegExp(/(interested|intrested|interesting) (about|to know about|with|in|in viewing|in seeing) (ur|your|the) (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/website sounds .* interesting/i).test(messagePayload.message)
  || new RegExp(/i would be interested/i).test(messagePayload.message)
  || new RegExp(/the website (sound|sounds) interesting/i).test(messagePayload.message)
  || new RegExp(/like to here about your/i).test(messagePayload.message)
  || new RegExp(/shoot me the link/i).test(messagePayload.message)

  || new RegExp(/interested./i).test(messagePayload.message)
  || new RegExp(/(Sure I am|Yeah sure|Sure Bro)/i).test(messagePayload.message)
  || new RegExp(/to know more about your website/i).test(messagePayload.message)
  || new RegExp(/nice if you linked the website/i).test(messagePayload.message)

  || new RegExp(/wanna visit (ur|your) site/i).test(messagePayload.message)
  || new RegExp(/tell me more/i).test(messagePayload.message)
  || new RegExp(/like to look around at your site/i).test(messagePayload.message)
  || new RegExp(/interested in seeing your website/i).test(messagePayload.message)

  // GRATEFUL
  || new RegExp(/glad to (have|take) a look/i).test(messagePayload.message)
  || new RegExp(/That would be very welcome/i).test(messagePayload.message)
  || new RegExp(/that website would be nice/i).test(messagePayload.message)
  || new RegExp(/yes that would be helpful/i).test(messagePayload.message)
  || new RegExp(/appreciate viewing your website/i).test(messagePayload.message)
  || new RegExp(/the (website|link) would be cool/i).test(messagePayload.message)
  || new RegExp(/will have a look on your website/i).test(messagePayload.message)
  || new RegExp(/I would really (appreaciate|appreciate) that/i).test(messagePayload.message)
  || new RegExp(/(it|that|link) would be (super|awesome|great|cool)/i).test(messagePayload.message)
  || new RegExp(/happy to check out the (url|web|website|guide|site|link|address|resource)/i).test(messagePayload.message)

  // LOVE
  || new RegExp(/(id|I'd) love/i).test(messagePayload.message)
  || new RegExp(/love to (see|know) (the|your) website/i).test(messagePayload.message)
  || new RegExp(/I would love to learn more about it/i).test(messagePayload.message)
  || new RegExp(/would love to visit/i).test(messagePayload.message)
  || new RegExp(/love to see the website/i).test(messagePayload.message)
  || new RegExp(/website sounds like a huge help/i).test(messagePayload.message)
  || new RegExp(/Would love to see/i).test(messagePayload.message)
  || new RegExp(/take a look at your website/i).test(messagePayload.message)
  || new RegExp(/like to see (it|that)/i).test(messagePayload.message)

  // NEUTRAL
  || new RegExp(/(yah|ya|yeah) why not/i).test(messagePayload.message)

  // NAME
  || new RegExp(/name of (ur|your|the) (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/how is your website called/i).test(messagePayload.message)
  || new RegExp(/Whats is the website called/i).test(messagePayload.message)
  || new RegExp(/url for this (site|link|web|guide|content|page)/i).test(messagePayload.message)

  // CHECK
  || new RegExp(/check on your website/i).test(messagePayload.message)

  // LINK ME
  || new RegExp(/link ?(me)? to ur (site|link|web|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/I'll take the link/i).test(messagePayload.message)




  // unsure.
  // || new RegExp(/any advice you got for me/i).test(messagePayload.message)



  // I would love to hear your story and any advice you got for me
  //id like to here about your websitee
  // i'd be ,
    // article
  // TODO It will send in this scenario. Signifies the importance of context, not sure what to do about this.
  // Thank you for checking up on me. But I find this approach slightly ineffective. I mean, if you want more people to visit your website, make your website rank higher.


  // EDGET
  // From your experience should I go ahead with my marriage and start following nofap no pmo
  // Yes, meditation is really a key to control that urge, I have started inculcate those habits! Now I am on day 7 of nofap! It's true that mentally we have to be very strong! Thanks for your support! Means alot! 😇


