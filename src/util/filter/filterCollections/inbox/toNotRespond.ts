import { PopulateReceivedMessagePayload } from '../../../../types/tamperMonkeyTypes'

export const toNotRespond = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/no (thank|sorry)/i).test(messagePayload.message)
  || new RegExp(/(I'm|I’m|I am|im) not interest/i).test(messagePayload.message)
  || new RegExp(/I was interest/i).test(messagePayload.message)
  || new RegExp(/not going to read/i).test(messagePayload.message)
  || new RegExp(/fuck off/i).test(messagePayload.message)
  || new RegExp(/not interested/i).test(messagePayload.message)
  || new RegExp(/No I (don’t|dont|don't) meditate/i).test(messagePayload.message)
