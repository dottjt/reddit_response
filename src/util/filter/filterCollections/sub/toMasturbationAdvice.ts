export const toMasturbationAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/Can you still masturbate during (NoFap|no fap|no-fap)/i).test(titleText)
  || new RegExp(/Is masturbating without porn ?(a)? relapse/i).test(titleText)
  || new RegExp(/Can I masturbate without porn/i).test(titleText)
  || new RegExp(/opinions towards fapping without porn/i).test(titleText)
