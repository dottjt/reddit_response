export const toWetDreamAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) advice/i).test(titleText)
  || new RegExp(/had a wet dream/i).test(titleText)
  || new RegExp(/^(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)$/i).test(titleText)
  || new RegExp(/how to stop (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i).test(titleText)
  || new RegExp(/how to deal with (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i).test(titleText)
  || new RegExp(/wet dreamed this morning/i).test(titleText)
  || new RegExp(/wet dream on day/i).test(titleText)
  || new RegExp(/Do wet dreams count as relapsing/i).test(titleText)