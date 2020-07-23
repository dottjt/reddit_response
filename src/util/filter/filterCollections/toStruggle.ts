export const toStruggleAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  // STRUGGLE
  new RegExp(/(im|i'm) really struggling already/i).test(titleText)
  || new RegExp(/^help!$/i).test(titleText)
  || new RegExp(/I CANT STOP(P)? HELP/i).test(titleText)
  || new RegExp(/this is getting harder/i).test(titleText)
  || new RegExp(/I (cant|can't) get past the .* mark/i).test(titleText)

  // ABOUT TO RELAPSE
  || new RegExp(/I am about to relapse/i).test(titleText)
  || new RegExp(/encourage me not to/i).test(titleText)

  // EXHAUSTED
  || new RegExp(/^emotionally exhausted$/i).test(titleText)
  || new RegExp(/So desensitized I literally feel nothing/i).test(titleText)

