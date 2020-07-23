export const toDealingWithUrgesAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/advice on fighting urges/i).test(titleText)
  || new RegExp(/how to deal with ?(the)? urges/i).test(titleText)
  || new RegExp(/urges from hell/i).test(titleText)
  || new RegExp(/how to beat .* urges/i).test(titleText)
  || new RegExp(/^urges(\.)?$/i).test(titleText)
  || new RegExp(/How do I overcome ?(.*) urges/i).test(titleText)
  || new RegExp(/Urges(\.)? Help me/i).test(titleText)