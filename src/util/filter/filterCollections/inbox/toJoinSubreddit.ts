import { PopulateReceivedMessagePayload } from '../../../../types/tamperMonkeyTypes';

export const toJoinSubreddit = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/(ty|thank you|thanks|thankyou|thank u)/i).test(messagePayload.message)
  || new RegExp(/(I'll||I’ll|ill|I will) ?(.*) (check|checkout|check it|check out)/i).test(messagePayload.message)
  || new RegExp(/will visit/i).test(messagePayload.message)
  || new RegExp(/visit ?(.*) today/i).test(messagePayload.message)
  || new RegExp(/(wow|cheers)/i).test(messagePayload.message)
  || new RegExp(/I ?(genuinely)? appreciate/i).test(messagePayload.message)
  || new RegExp(/for sharing/i).test(messagePayload.message)
  || new RegExp(/thanks for/i).test(messagePayload.message)
  || new RegExp(/thanks (man|bro)/i).test(messagePayload.message)
  || new RegExp(/great resource/i).test(messagePayload.message)

// Thank you i will check both of them out