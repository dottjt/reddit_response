export const toStartedAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/starting .* journey/i).test(titleText)
  || new RegExp(/starting .* challenge/i).test(titleText)
  || new RegExp(/(quitting|quiting|starting) ?(.*) (now|today)/i).test(titleText)
  || new RegExp(/(first|1st) (step|day)/i).test(titleText)
  || new RegExp(/(starting|started|starts) (now|today)/i).test(titleText)
  || new RegExp(/(starting|started) .* (streak|first|run)/i).test(titleText)
  || new RegExp(/(starting|started) days of (nofap|no fap)/i).test(titleText)
  || new RegExp(/starting, again/i).test(titleText)
  || new RegExp(/(journey) (start|begins)/i).test(titleText)
  || new RegExp(/(start|beginning) (of a|of my|my) (nofap|no fap|journey)/i).test(titleText)
  || new RegExp(/New to (NoFap|no fap)/i).test(titleText)
  || new RegExp(/new here/i).test(titleText)
  || new RegExp(/starting (NoFap|no fap)/i).test(titleText)
  || new RegExp(/(I'm|im) done with this ?(.*) feeling/i).test(titleText)
  || new RegExp(/Day 1 Started/i).test(titleText)
  || new RegExp(/^Day 1$/i).test(titleText)
  || new RegExp(/officially day 1/i).test(titleText)
  // || new RegExp(/my first post/i).test(titleText) // potentially inaccurate
  || new RegExp(/try to do this (NoFap|no fap)/i).test(titleText)
  || new RegExp(/(wanna|want|trying) to start/i).test(titleText)
  || new RegExp(/start of the journey/i).test(titleText)
  || new RegExp(/(Let's|lets) do this/i).test(titleText)
  || new RegExp(/(it's|its|it is) time to change/i).test(titleText)
  || new RegExp(/day 1 of (no fap|reboot|re boot)/i).test(titleText)
  || new RegExp(/new beginning/i).test(titleText)
  || new RegExp(/about to start/i).test(titleText)
  || new RegExp(/How to start?/i).test(titleText)
  || new RegExp(/just joined (nofap|no fap)/i).test(titleText)
  || new RegExp(/stopping for good/i).test(titleText)
  || new RegExp(/(NoFap|no fap) from today/i).test(titleText)
  || new RegExp(/Start of a New Journey/i).test(titleText)
  || new RegExp(/Start to my Journey/i).test(titleText)
  || new RegExp(/Beginning of my Journey in (NoFap|no fap)/i).test(titleText)
  || new RegExp(/started (nofap|no fap) today/i).test(titleText)
  || new RegExp(/(just) (begun|started)/i).test(titleText)
  || new RegExp(/why (I'm|im) starting/i).test(titleText)
  || new RegExp(/day 0/i).test(titleText)
  || new RegExp(/first post/i).test(titleText)


    // decided to quit .* today
    // Day 1
    // Need Help + Flair New Never Fapper
    // Need help + Flair motivate me
    // Let's do this
    // new here

    // toStartAdvice + flair
    // New to NoFap + Day 1

export const toStartedAgainAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/(begin|let's do this) again/i).test(titleText)
  || new RegExp(/gonna try again/i).test(titleText)
  || new RegExp(/one last try/i).test(titleText)
  || new RegExp(/day (1|one) again/i).test(titleText)
  || new RegExp(/^starting again$/i).test(titleText)
  || new RegExp(/need to start fresh/i).test(titleText)
  || new RegExp(/doing (nofap|no fap) again/i).test(titleText)
