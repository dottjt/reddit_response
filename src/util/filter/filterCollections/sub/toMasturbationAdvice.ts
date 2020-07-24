export const toMasturbationAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/Can you still masturbate during (NoFap|no fap|no-fap)/i).test(titleText)
  || new RegExp(/Is masturbating without porn ?(a)? relapse/i).test(titleText)
  || new RegExp(/Getting urges to masturbate/i).test(titleText)
  || new RegExp(/Can I masturbate without porn/i).test(titleText)
  || new RegExp(/opinions towards fapping without porn/i).test(titleText)
  || new RegExp(/Is it ok to masturbate without watching porn/i).test(titleText)
  || new RegExp(/is it better to fap without porn/i).test(titleText)