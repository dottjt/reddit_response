export const toStruggleAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/(im|i'm) really struggling already/i).test(titleText)

export const toWetDreamAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/wet dream advice/i).test(titleText)
  || new RegExp(/had a wet dream/i).test(titleText)
  || new RegExp(/^wet dreams$/i).test(titleText)

export const toAccountabilityPartner = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/seeking a partner/i).test(titleText)
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
  new RegExp(/what programs do you use to block porn?/i).test(titleText)
