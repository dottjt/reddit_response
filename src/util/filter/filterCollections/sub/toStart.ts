import { RegexFilters } from '../../regexUtil';

export const toStartAdviceRegexArray: RegexFilters[] = [
  { flairText: /New To NoFap/i },

  { titleText: /starting .* journey/i },
  { titleText: /^newbie/i },
  { titleText: /starting .* challenge/i },
  { titleText: /(quitting|quiting|starting) ?(.*) (now|today)/i },
  { titleText: /(gonna|going) ?(to)? start (nofap|no fap|no-fap)/i },
  { titleText: /gonna start  to stop watching porn from now/i },
  { titleText: /^day one no/i },
  { titleText: /will finally commit to (nofap|no fap|no-fap)/i },
  { titleText: /^day one$/i }, // could be relapse
  { titleText: /I'm starting/i },
  { titleText: /So finally let's begin/i },

  { titleText: /here for (nofap|no fap|no-fap)/i },
  { titleText: /it begins here/i },
  { titleText: /changing for the better/i },

  { titleText: /(let's|lets) start/i },
  { titleText: /(journey) (start|begins)/i },

  { titleText: /fapped for the last time today/i },
  { titleText: /Committing to a new lifestyle/i },
  { titleText: /my decision to start (NoFap|no fap|no-fap)/i },
  { titleText: /(I'm|im) done with this ?(.*) feeling/i },
  { titleText: /this ends now/i },
  { titleText: /my first post/i }, // potentially inaccurate
  { titleText: /try to do this (NoFap|no fap|no-fap)/i },
  { titleText: /(here|now) it begins/i },
  { titleText: /(Let's|lets) do this/i },
  { titleText: /(it's|its|it is) time to change/i },

  // FINALLY
  { titleText: /finally try to get things turned around/i, },
  { titleText: /I’m finally quitting/i },

  // START
  { titleText: /we start today/i },
  { titleText: /today I start/i },

  // RATIONALISE DECISION
  { titleText: /I have made the right decision/i },
  { titleText: /finally admitting that (I'm|I’m) addicted/i },

  // ADVICE
  { titleText: /any tips on getting started/i },

  { messageText: /Any advice on how to start/i },

  // JOINED / NEW
  { titleText: /just joined (nofap|no fap|no-fap)/i },
  { titleText: /new here/i },
  { titleText: /^(I'm|im) new/i },
  { titleText: /New to (NoFap|no fap|no-fap)/i },

  // STOPPING
  { titleText: /stopping for good/i },
  { titleText: /the cycle stops here/i },

  // BEGINNING
  { titleText: /Beginning of my Journey in (NoFap|no fap|no-fap)/i },
  { titleText: /Beginning the Challenge/i },
  { titleText: /the beginning/i },

  // DECLARATION
  { titleText: /(start|beginning) (of a|of my|my) (nofap|no fap|no-fap|journey)/i },
  { titleText: /start of something amazing/i },

  // START
  { titleText: /about to start/i },
  { titleText: /How to start\?/i },
  { titleText: /a new start/i },
  { titleText: /(I'm|im) ready to start/i },
  { titleText: /where to start/i },
  { titleText: /(wanna|want|trying) to start/i },

  // STARTING
  { titleText: /starting (NoFap|no fap|no-fap)/i },
  { titleText: /why (I'm|im) starting/i },
  { titleText: /^(starting|started)(\.|\!)?$/i },
  { titleText: /starting my journey/i },
  { titleText: /(starting|started|starts) (now|today)/i },
  { titleText: /(starting|started) .* (streak|first|run)/i },
  { titleText: /(starting|started) days of (nofap|no fap|no-fap)/i },

  { messageText: /starting from today/i },

  // STARTED
  { titleText: /started (nofap|no fap|no-fap) today/i },
  { titleText: /(just) (begun|started)/i },
  { titleText: /getting started/i },

  // START JOURNEY
  { titleText: /Start to my Journey/i },
  { titleText: /journey to porn free/i },
  { titleText: /Start of a New Journey/i },
  { titleText: /start of the journey/i },

  { messageText: /Today (starts|i start) my journey/i },
  { messageText: /I am starting today/i },

  // DAY ZERO
  { titleText: /day 0/i },

  // DAY ONE
  { titleText: /Day (one|1) of /i },
  { titleText: /day (one|1) without fapping/i },
  { titleText: /this is day one/i },
  { titleText: /Day 1 Started/i },
  { titleText: /Day 1 (lets|let's) go/i },
  { titleText: /^Day 1(\.|\!)?$/i },
  { titleText: /officially day 1/i },
  { titleText: /day 1 of (no fap|reboot|re boot)/i },

  // FIRST
  { titleText: /first post/i },
  { titleText: /first time doing this/i },
  { titleText: /(first|1st) (step|day)/i },
  { titleText: /first timer/i },
  { titleText: /^first time here$/i },

  { messageText: /This is gonna be my first day to nofap/i },

  // TODAY
  { titleText: /(NoFap|no fap|no-fap) from today/i },
  { titleText: /(gonna|going to) start today/i },


    // decided to quit .* today
    // Day 1
    // Need Help + Flair New Never Fapper
    // Need help + Flair motivate me
    // Let's do this
    // new here

    // toStartAdvice + flair
    // New to NoFap + Day 1
];
