import { PopulateReceivedMessagesPayload } from '../types/tamperMonkeyTypes';

export const toNoWorriesGuide = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/(What's|What’s|please share|share|want to see|send|sending me|send me|give|gimme|give me|provide me|interested in|link|me know|show me|show|link me|have|appreciate|look at|provide|like|let me see) (a|the|that|ur|your|to ur|to the|to your|with the) (web|website|guide|site|link)/i).test(messagePayload.message)
  || new RegExp(/hit me up/i).test(messagePayload.message)
  || new RegExp(/go ahead/i).test(messagePayload.message)
  || new RegExp(/took up/i).test(messagePayload.message)
  || new RegExp(/link would be (great|awesome)/i).test(messagePayload.message)
  || new RegExp(/appreciate viewing your website/i).test(messagePayload.message)
  || new RegExp(/website sounds .* interesting/i).test(messagePayload.message)
  || new RegExp(/(definetly|definitely|totally|im|I am|I'm) ?(be)? interested/i).test(messagePayload.message)
  || new RegExp(/link ?(me)? to ur (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/url for this (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(I'm|I am|I'd be) ?(certainly)? ?(super)? (interested|interessted|interesting)/i).test(messagePayload.message)
  || new RegExp(/I’ll check the link if you have it/i).test(messagePayload.message)
  || new RegExp(/send me the (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(yes|yeah) for sure/i).test(messagePayload.message)
  || new RegExp(/give (ur|your) (site|link|website|webite|guide|content|page) a visit/i).test(messagePayload.message)
  || new RegExp(/wanna visit (ur|your) site/i).test(messagePayload.message)
  || new RegExp(/yes please/i).test(messagePayload.message)
  || new RegExp(/name of (ur|your|the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/like to see (it|that)/i).test(messagePayload.message)
  || new RegExp(/send it over/i).test(messagePayload.message)
  || new RegExp(/(interested|interesting) (to know about|with|in|in viewing) (ur|your|the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(name of|checking out|check|checkout|check out|take a look at) (ur|your|the|to the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/please send it/i).test(messagePayload.message)
  || new RegExp(/if you sent ?(me)? the (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/(love|like) to (check|read|get|see|visit|hear about|look into) ?(that|the|about|ur|your)? (any|it|site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/That would be great/i).test(messagePayload.message)
  || new RegExp(/you could share/i).test(messagePayload.message)
  || new RegExp(/share ?(me)? the website/i).test(messagePayload.message)
  || new RegExp(/^sure$/i).test(messagePayload.message)
  || new RegExp(/^yes$/i).test(messagePayload.message)
  // Yes I am tell me more
  // please leave the link for the website.
  // i will check that out
  // I would like to see your website
  // Yeah i’m interested
  // Drop the link

export const toLinkYouGuide = (messagePayload: PopulateReceivedMessagesPayload): boolean =>
  new RegExp(/(what's|what is|whats) the (link|website)/i).test(messagePayload.message)
  || new RegExp(/name of (ur|your) website/i).test(messagePayload.message)
  || new RegExp(/(what is|whats|what's|called) (ur|your|the) website/i).test(messagePayload.message)
  || new RegExp(/Tell me ?(about|the name of)? (ur|your) website/i).test(messagePayload.message)
