import { PopulateReceivedMessagePayload } from '../../../../types/tamperMonkeyTypes'

export const toFantastic = (messagePayload: PopulateReceivedMessagePayload): boolean =>
new RegExp(/I (currently|do) meditate/i).test(messagePayload.message)
  || new RegExp(/I meditate daily/i).test(messagePayload.message)
  || new RegExp(/done a lot for my mental health/i).test(messagePayload.message)
  || new RegExp(/started Therapy/i).test(messagePayload.message)
  || new RegExp(/I meditate for/i).test(messagePayload.message)
  || new RegExp(/I meditate and workout every day/i).test(messagePayload.message)
  || new RegExp(/Yeah I do ?(transcendental)? meditation/i).test(messagePayload.message)
