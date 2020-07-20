export const toWetDreamAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/wet dream advice/i).test(titleText)
  || new RegExp(/had a wet dream/i).test(titleText)
  || new RegExp(/^wet dreams$/i).test(titleText)

export const toAccountabilityPartner = (titleText: string, flairText: string): boolean =>
  new RegExp(/seeking a partner/i).test(titleText)
  || new RegExp(/accountability partner/i).test(titleText)
  || new RegExp(/need (AP|accountability partner)/i).test(titleText)

// I do meditate
// Bro i meditate like twice a week, workout everyday and read twice a week, maybe i should use that sex energy doing that things everyday
