import { PopulateReceivedMessagePayload } from '../../../../types/tamperMonkeyTypes'

export const toHardTime = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/I (don’t|dont|don't) ?(really)? do (anything|much|a whole lot|a lot) for my mental health/i).test(messagePayload.message)
  || new RegExp(/do nothing for my mental health/i).test(messagePayload.message)
  || new RegExp(/I (don’t|dont|don't) (meditate|do much)/i).test(messagePayload.message)
  || new RegExp(/I haven't done much/i).test(messagePayload.message)
  || new RegExp(/I just distract myself/i).test(messagePayload.message)
  || new RegExp(/I used to ?(do)? meditation/i).test(messagePayload.message)
  || new RegExp(/I used to ?(do)? meditation/i).test(messagePayload.message)
