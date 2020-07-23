export const toWhenDoesItGetEasierAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/does it get easier\?/i).test(titleText)
  || new RegExp(/When does the withdrawal period depression start to fade\?/i).test(titleText)

