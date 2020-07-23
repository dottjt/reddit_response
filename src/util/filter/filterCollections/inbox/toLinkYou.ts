import { PopulateReceivedMessagePayload } from '../../../../types/tamperMonkeyTypes';

export const toLinkYouGuide = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/(what's|What’s|what is|whats) the (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/name of (ur|your) website/i).test(messagePayload.message)
  || new RegExp(/(what is|whats|what's|called) (ur|your|the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/Tell me ?(about|the name of)? ?(ur|your|the)? (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
  || new RegExp(/What site have you/i).test(messagePayload.message)
  || new RegExp(/Where can I find this resource/i).test(messagePayload.message)
  || new RegExp(/what is this website\?/i).test(messagePayload.message)
  || new RegExp(/where can i find the website/i).test(messagePayload.message)
  || new RegExp(/links to any resources/i).test(messagePayload.message)
  || new RegExp(/What website is it/i).test(messagePayload.message)
