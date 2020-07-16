import { PopulateReceivedMessagesPayload } from '../../types/tamperMonkeyTypes';

export const toNoWorriesGuide = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/(What's|What’s|please share|share|to see|send|sending me|send me|leave me|give|gimme|give me|provide me|interested in|link|me know|show me|show|link me|have|appreciate|look at|provide|like|let me see|link|drop|post) ?(please)? (a|the|that|ur|your|for the|to ur|to the|to your|with the) (web|website|guide|site|link|address)/i).test(messagePayload.message)
  || new RegExp(/hit me up/i).test(messagePayload.message)
  || new RegExp(/go ahead/i).test(messagePayload.message)
  || new RegExp(/took up/i).test(messagePayload.message)
  || new RegExp(/link would be (great|awesome)/i).test(messagePayload.message)
  || new RegExp(/appreciate viewing your website/i).test(messagePayload.message)
  || new RegExp(/website sounds .* interesting/i).test(messagePayload.message)
  || new RegExp(/(definetly|definitely|totally|I am|I'm|I’m|im|I'd|id) ?(be)? interested/i).test(messagePayload.message)
  || new RegExp(/link ?(me)? to ur (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/url for this (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(I'm|I’m|I am|I'd be) ?(certainly)? ?(super)? (interested|interessted|interesting)/i).test(messagePayload.message)
  || new RegExp(/I’ll check the link if you have it/i).test(messagePayload.message)
  || new RegExp(/send me the (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(yes|yeah) (for sure|I am)/i).test(messagePayload.message)
  || new RegExp(/give (ur|your) (site|link|website|webite|guide|content|page) a visit/i).test(messagePayload.message)
  || new RegExp(/wanna visit (ur|your) site/i).test(messagePayload.message)
  || new RegExp(/yes please/i).test(messagePayload.message)
  || new RegExp(/name of (ur|your|the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/like to see (it|that)/i).test(messagePayload.message)
  || new RegExp(/send it over/i).test(messagePayload.message)
  || new RegExp(/(interested|interesting) (to know about|with|in|in viewing) (ur|your|the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(name of|checking out|check|checkout|check out|take a look at) (ur|your|the|that|to the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/please send it/i).test(messagePayload.message)
  || new RegExp(/if you sent ?(me)? the (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(check|read|get|see|visit|hear about|look into) ?(of)? ?(that|the|about|ur|your)? (any|it|site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(it|That) would be (super|great|cool)/i).test(messagePayload.message)
  || new RegExp(/you could share/i).test(messagePayload.message)
  || new RegExp(/(id|I'd) love/i).test(messagePayload.message)
  || new RegExp(/tell me more/i).test(messagePayload.message)
  || new RegExp(/share ?(me)? the website/i).test(messagePayload.message)
  || new RegExp(/(can|could) you ?(please)? link/i).test(messagePayload.message)
  || new RegExp(/^sure$/i).test(messagePayload.message)
  || new RegExp(/^yes$/i).test(messagePayload.message)

export const toLinkYouGuide = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/(what's|what is|whats) the (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/name of (ur|your) website/i).test(messagePayload.message)
  || new RegExp(/(what is|whats|what's|called) (ur|your|the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/Tell me ?(about|the name of)? ?(ur|your|the)? (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/What site have you/i).test(messagePayload.message)

export const toHardTime = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/I (don’t|don't) do much for my mental health/i).test(messagePayload.message)
// i don’t but i’d like to


export const toJoinSubreddit = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/(ty|thank you|thanks)/i).test(messagePayload.message)
  || new RegExp(/(I'll|I will) ?(.*) (check|checkout|check it|check out)/i).test(messagePayload.message)
  || new RegExp(/will visit/i).test(messagePayload.message)
  || new RegExp(/visit ?(.*) today/i).test(messagePayload.message)
  || new RegExp(/(wow|cheers)/i).test(messagePayload.message)
  || new RegExp(/I ?(genuinely)? appreciate/i).test(messagePayload.message)
  || new RegExp(/for sharing/i).test(messagePayload.message)

