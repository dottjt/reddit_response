import { PopulateReceivedMessagePayload } from '../../../../types/tamperMonkeyTypes'

export const toMeditateGuide = (messagePayload: PopulateReceivedMessagePayload): boolean =>
  new RegExp(/would love to (mediate|meditate)/i).test(messagePayload.message)
  || new RegExp(/(don't|dont|don’t) know (how|where) to start/i).test(messagePayload.message)
  || new RegExp(/tips on meditating\?/i).test(messagePayload.message)
  || new RegExp(/I (don’t|dont|don't) know how to (do meditation|meditate). Can you please suggest something/i).test(messagePayload.message)
  || new RegExp(/^How do (u|you) meditate?$/i).test(messagePayload.message)
  // How does one meditate?
  // I'm wondering how do u meditate
  // Thank you so much for reaching out. I’ve never tried meditation but I’ve heard it helps a lot, is there any specific way to do it? Are there different methods?
