import { PopulateReceivedMessagePayload } from '../../../types/tamperMonkeyTypes'

export const toNotRespond = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/no (thank|sorry)/i).test(messagePayload.message)
  || new RegExp(/(I'm|I’m|I am|im) not interest/i).test(messagePayload.message)
  || new RegExp(/I was interest/i).test(messagePayload.message)
  || new RegExp(/not going to read/i).test(messagePayload.message)
  || new RegExp(/fuck off/i).test(messagePayload.message)
  || new RegExp(/not interested/i).test(messagePayload.message)
  || new RegExp(/No I (don’t|dont|don't) meditate/i).test(messagePayload.message)

export const toMeditateGuide = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/would love to (mediate|meditate)/i).test(messagePayload.message)
  || new RegExp(/(don't|dont|don’t) know (how|where) to start/i).test(messagePayload.message)
  || new RegExp(/tips on meditating\?/i).test(messagePayload.message)
  || new RegExp(/I (don’t|dont|don't) know how to (do meditation|meditate). Can you please suggest something/i).test(messagePayload.message)
  || new RegExp(/^How do (u|you) meditate?$/i).test(messagePayload.message)

  // I'm wondering how do u meditate

export const toHardTime = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/I (don’t|dont|don't) ?(really)? do (anything|much|a whole lot|a lot) for my mental health/i).test(messagePayload.message)
  || new RegExp(/do nothing for my mental health/i).test(messagePayload.message)
  || new RegExp(/I (don’t|dont|don't) do much/i).test(messagePayload.message)
  || new RegExp(/I haven't done much/i).test(messagePayload.message)
  || new RegExp(/I just distract myself/i).test(messagePayload.message)
  || new RegExp(/I used to ?(do)? meditation/i).test(messagePayload.message)

export const toFantastic = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/I (currently|do) meditate/i).test(messagePayload.message)
  || new RegExp(/I meditate daily/i).test(messagePayload.message)
  || new RegExp(/done a lot for my mental health/i).test(messagePayload.message)
  || new RegExp(/started Therapy/i).test(messagePayload.message)
  || new RegExp(/I meditate for/i).test(messagePayload.message)
  || new RegExp(/I meditate and workout every day/i).test(messagePayload.message)
  || new RegExp(/Yeah I do ?(transcendental)? meditation/i).test(messagePayload.message)

// I do meditate
// Bro i meditate like twice a week, workout everyday and read twice a week, maybe i should use that sex energy doing that things everyday


// OTHER
// Meditating at night can gelp witg controlling the wet dreams
// Any help or advice would be appreciated.
