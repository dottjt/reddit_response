
export const toBenefitsAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/I want to know the benefits of (NoFap|no fap|no-fap)/i).test(titleText)
