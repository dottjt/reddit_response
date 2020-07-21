export const toStruggleAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/(im|i'm) really struggling already/i).test(titleText)
  || new RegExp(/^emotionally exhausted$/i).test(titleText)
  || new RegExp(/I am about to relapse/i).test(titleText)
  || new RegExp(/encourage me not to/i).test(titleText)
  || new RegExp(/this is getting harder/i).test(titleText)
  || new RegExp(/I (cant|can't) get past the .* mark/i).test(titleText)
