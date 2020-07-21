export const toStartedAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/starting .* journey/i).test(titleText)
  || new RegExp(/starting .* challenge/i).test(titleText)
  || new RegExp(/(quitting|quiting|starting) ?(.*) (now|today)/i).test(titleText)
  || new RegExp(/(first|1st) (step|day)/i).test(titleText)
  || new RegExp(/(starting|started|starts) (now|today)/i).test(titleText)
  || new RegExp(/(starting|started) .* (streak|first|run)/i).test(titleText)
  || new RegExp(/(starting|started) days of (nofap|no fap|no-fap)/i).test(titleText)
  || new RegExp(/going to stop watching porn from now/i).test(titleText)
  || new RegExp(/changing for the better/i).test(titleText)
  || new RegExp(/first timer/i).test(titleText)
  || new RegExp(/(let's|lets) start/i).test(titleText)
  || new RegExp(/(journey) (start|begins)/i).test(titleText)
  || new RegExp(/(start|beginning) (of a|of my|my) (nofap|no fap|no-fap|journey)/i).test(titleText)
  || new RegExp(/New to (NoFap|no fap|no-fap)/i).test(titleText)
  || new RegExp(/new here/i).test(titleText)
  || new RegExp(/^first time here$/i).test(titleText)
  || new RegExp(/fapped for the last time today/i).test(titleText)
  || new RegExp(/my decision to start (NoFap|no fap|no-fap)/i).test(titleText)
  || new RegExp(/starting (NoFap|no fap|no-fap)/i).test(titleText)
  || new RegExp(/(I'm|im) done with this ?(.*) feeling/i).test(titleText)
  || new RegExp(/Day 1 Started/i).test(titleText)
  || new RegExp(/^(starting|started)(\.|\!)?$)/i).test(titleText)
  || new RegExp(/we start today/i).test(titleText)
  // || new RegExp(/this ends now/i).test(titleText)
  || new RegExp(/^Day 1(\.|\!)?$/i).test(titleText)
  || new RegExp(/officially day 1/i).test(titleText)
  || new RegExp(/the cycle stops here/i).test(titleText)
  || new RegExp(/starting my journey/i).test(titleText)
  || new RegExp(/the beginning\.\./i).test(titleText)
  // || new RegExp(/my first post/i).test(titleText) // potentially inaccurate
  || new RegExp(/try to do this (NoFap|no fap|no-fap)/i).test(titleText)
  || new RegExp(/(wanna|want|trying) to start/i).test(titleText)
  || new RegExp(/start of the journey/i).test(titleText)
  || new RegExp(/(Let's|lets) do this/i).test(titleText)
  || new RegExp(/(it's|its|it is) time to change/i).test(titleText)
  || new RegExp(/day 1 of (no fap|reboot|re boot)/i).test(titleText)
  || new RegExp(/new beginning/i).test(titleText)
  || new RegExp(/any tips on getting started/i).test(titleText)
  || new RegExp(/about to start/i).test(titleText)
  || new RegExp(/How to start\?/i).test(titleText)
  || new RegExp(/just joined (nofap|no fap|no-fap)/i).test(titleText)
  || new RegExp(/stopping for good/i).test(titleText)
  || new RegExp(/(NoFap|no fap|no-fap) from today/i).test(titleText)
  || new RegExp(/Start of a New Journey/i).test(titleText)
  || new RegExp(/Start to my Journey/i).test(titleText)
  || new RegExp(/journey to porn free/i).test(titleText)
  || new RegExp(/Beginning of my Journey in (NoFap|no fap|no-fap)/i).test(titleText)
  || new RegExp(/started (nofap|no fap|no-fap) today/i).test(titleText)
  || new RegExp(/(just) (begun|started)/i).test(titleText)
  || new RegExp(/why (I'm|im) starting/i).test(titleText)
  || new RegExp(/day 0/i).test(titleText)
  || new RegExp(/first post/i).test(titleText)

  || new RegExp(/This is gonna be my first day to nofap/i).test(messageText)
  || new RegExp(/I am starting today/i).test(messageText)





    // decided to quit .* today
    // Day 1
    // Need Help + Flair New Never Fapper
    // Need help + Flair motivate me
    // Let's do this
    // new here

    // toStartAdvice + flair
    // New to NoFap + Day 1

export const toStartedAgainAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/(begin|let's do this) again/i).test(titleText)
  || new RegExp(/gonna try again/i).test(titleText)
  || new RegExp(/trying it again/i).test(titleText)
  || new RegExp(/one last try/i).test(titleText)
  || new RegExp(/day (1|one) again/i).test(titleText)
  || new RegExp(/starting, again/i).test(titleText)
  || new RegExp(/^starting again$/i).test(titleText)
  || new RegExp(/need to start fresh/i).test(titleText)
  || new RegExp(/doing (nofap|no fap|no-fap) again/i).test(titleText)
