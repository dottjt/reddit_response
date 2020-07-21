export const toStruggleAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/(im|i'm) really struggling already/i).test(titleText)
  || new RegExp(/^emotionally exhausted$/i).test(titleText)
  || new RegExp(/I am about to relapse/i).test(titleText)
  || new RegExp(/encourage me not to/i).test(titleText)
  || new RegExp(/this is getting harder/i).test(titleText)

export const toWetDreamAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) advice/i).test(titleText)
  || new RegExp(/had a wet dream/i).test(titleText)
  || new RegExp(/^(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)$/i).test(titleText)
  || new RegExp(/how to stop (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i).test(titleText)

export const toAccountabilityPartner = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/seeking a partner/i).test(titleText)
  || new RegExp(/Looking for an accountability/i).test(titleText)
  || new RegExp(/accountability partner/i).test(titleText)
  || new RegExp(/need (AP|accountability partner)/i).test(titleText)

export const toMasturbationAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/Can you still masturbate during (NoFap|no fap|no-fap)/i).test(titleText)

export const toDealingWithUrgesAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/advice on fighting urges/i).test(titleText)
  || new RegExp(/how to deal with ?(the)? urges/i).test(titleText)
  || new RegExp(/urges from hell/i).test(titleText)

export const toBenefitsAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/I want to know the benefits of (NoFap|no fap|no-fap)/i).test(titleText)

export const toPornBlockerAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/what programs do you use to block porn/i).test(titleText)

export const toDidIJustRelapseAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/did I just relapse\?/i).test(titleText)
  || new RegExp(/count as relapse\?/i).test(titleText)

export const toWhenDoesItGetEasierAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/does it get easier\?/i).test(titleText)


  // will nofap cure my cuckhold fetish