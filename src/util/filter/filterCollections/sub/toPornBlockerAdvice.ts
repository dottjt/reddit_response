export const toPornBlockerAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/what website blocker/i).test(titleText)
  || new RegExp(/what programs do you use to block porn/i).test(titleText)
  || new RegExp(/block porn site/i).test(titleText)
