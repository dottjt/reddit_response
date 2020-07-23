export const toDidIJustRelapseAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/did I just relapse\?/i).test(titleText)
  || new RegExp(/count as relapse\?/i).test(titleText)
