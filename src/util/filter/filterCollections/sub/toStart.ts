import { InitialRegExpCollection, both } from '../../regex/regexUtil';

// TODO fix this up

export const toStartAdviceRegexArray: InitialRegExpCollection[] = [

  // NEW
  { titleText: /^newbie/i },
  { titleText: /my first post/i }, // potentially inaccurate
  { titleText: /^First day$/i }, // potentially inaccurate
  { titleText: /here for (nofap|no fap|no-fap)/i },

  // DECISION
  { titleText: /will finally commit to (nofap|no fap|no-fap)/i },
  { titleText: /a new beginning/i },
  { titleText: /^new beginning$/i },
  { titleText: /changing for the better/i },
  { titleText: /decided (I’m|I'm|im|I am) quitting this/i },
  { titleText: /committing to a new lifestyle/i },
  { titleText: /(I’ve|I've|I have) made the right decision/i },
  { titleText: /finally admitting that (I’m|I'm|im|I am) addicted/i },
  { titleText: /(I’m|I'm|im|I am) finally quitting/i },
  { titleText: /finally try to get things turned around/i, },
  { titleText: /my decision to start (NoFap|no fap|no-fap)/i },
  { titleText: /(I’m|I'm|im|I am) done with this ?(.*) feeling/i },
  { titleText: /stopping for good/i },
  { titleText: /Going on a \d+ day trial/i },
  { titleText: /Going to try \d+ day/i },

  { titleText: /(it’s|it's|its|it is) time to (quit|change)/i },
  { titleText: /this ends now/i },
  { titleText: /(Let's|let’s|lets) (start|do this)/i },
  { titleText: /(start|beginning) (of a|of my|my) (nofap|no fap|no-fap|journey)/i },

  { ...both, titleText: /Let the challenge begin/i },
  { ...both, titleText: /Have decided to start/i },
  { ...both, titleText: /How to begin\?/i },
  { ...both, titleText: /This is the day where i begin my journey/i },
  { ...both, titleText: /(I’m|I'm|im) starting this journey because/i },
  { ...both, titleText: /(I’m|I'm|im) joining in for the challenge/i },
  { ...both, titleText: /day (one|1) (.*)? here we go/i },
  { ...both, titleText: /(I’m|I'm|im) new to Reddit/i },
  { ...both, titleText: /(I’m|I'm|im) new and need some help/i },
  { ...both, titleText: /I will be attempting (NoFap|no fap|no-fap) for the first time/i },
  { ...both, titleText: /Today I decided to try ?(the)? (nofap|no fap|no-fap) challenge/i },
  { ...both, titleText: /try to do this (NoFap|no fap|no-fap)/i },
  { ...both, titleText: /(masturbated|watched porn|fapped) for the last time today/i },
  { ...both, titleText: /start of something amazing/i },
  { ...both, titleText: /going to (stop|quit) (.*)? today/i, },
  { ...both, titleText: /(I’m|I'm|im|I am) gonna try this ?(nofap|no fap|no-fap)? Challenge/i },
  { ...both, titleText: /(I’m|I'm|im|I am) starting my (nofap|no fap|no-fap) journey from today/i },
  { ...both, titleText: /I have started my journey/i },
  { ...both, titleText: /(Here's|here’s) to a new beginning/i },
  { ...both, titleText: /Might as well start now/i },

  // ADVICE
  { titleText: /any tips on getting started/i },

  { ...both, titleText: /Advice on How to Start/i },

  // JOINED / NEW
  { titleText: /just joined (nofap|no fap|no-fap)/i },
  { titleText: /new here/i },
  { titleText: /^(I’m|I'm|im|I am) new/i },
  { titleText: /new to (NoFap|no fap|no-fap|this)/i },

  // STARTS NOW
  { titleText: /we start today/i },
  { ...both, titleText: /today I start/i },
  { ...both, titleText: /(NoFap|no fap|no-fap) from today/i },
  { ...both, titleText: /(gonna|going to) start today/i },
  { ...both, titleText: /(quitting|quiting|starting) ?(NoFap|no fap|no-fap)? (now|today)/i },
  { ...both, titleText: /(gonna|going) ?(to)? start (nofap|no fap|no-fap)/i },
  { ...both, titleText: /gonna start to stop watching porn from now/i },
  { ...both, titleText: /journey (start|begins)/i },
  { ...both, titleText: /it begins here/i },
  { ...both, titleText: /(here|now) it begins/i },
  { ...both, titleText: /the cycle stops here/i },
  { ...both, titleText: /officially starting (NoFap|no fap|no-fap)/i },

  // BEGINNING
  { titleText: /beginning of my Journey in (NoFap|no fap|no-fap)/i },
  { titleText: /beginning the Challenge/i },
  { titleText: /the beginning/i },
  { titleText: /So finally (Let's|let’s|lets) begin/i },

  // START
  { titleText: /day (1|one) (bby|baby)/i },
  { titleText: /about to start/i },
  { titleText: /How to start\?/i },
  { titleText: /a new start/i },
  { titleText: /trying to begin/i },
  { titleText: /(I’m|I'm|im|I am) ready to start/i },
  { titleText: /I start my journey from now/i },
  { titleText: /where to start/i },
  { titleText: /(wanna|want|trying) to start/i },


  { ...both, titleText: /Start of \d+ days/i },
  { ...both, titleText: /how do I start\?/i },
  { ...both, titleText: /Day 1(\:|\.)? Here we go/i },

  // STARTING


  { titleText: /why (I’m|I'm|im|I am) starting/i },
  { titleText: /^(starting|started)(\.|\!)?$/i },
  { titleText: /starting my journey/i },
  { titleText: /Starting this properly now/i },
  { titleText: /finally starting tonight/i },
  { titleText: /(starting|started|starts) (now|today)/i },
  { titleText: /(starting|started) .* (streak|first|run)/i },
  { titleText: /(starting|started) days of (nofap|no fap|no-fap)/i },
  { titleText: /starting .* challenge/i },
  { titleText: /(I’m|I'm|im|I am) starting/i },
  { titleText: /starting .* journey/i },
  { titleText: /just starting out/i },
  { titleText: /today I stop forever/i },
  // { titleText: /starting (NoFap|no fap|no-fap)/i }, // too broad in my opinion

  { messageText: /starting ?(from)? today/i },
  { messageText: /starting today i am done/i },

  { ...both, titleText: /starting at \d+/i },

  // STARTED
  { titleText: /started (nofap|no fap|no-fap) today/i },
  { titleText: /(just) (begun|started)/i },
  { titleText: /getting started/i },
  { titleText: /\d+ year(s)? old starting (nofap|no fap|no-fap)/i },

  { ...both, titleText: /how do I begin/i },
  { ...both, titleText: /Streak starts here/i },

  // START JOURNEY
  { titleText: /start to my Journey/i },
  { titleText: /Just began my journey/i },
  { titleText: /journey to porn free/i },
  { titleText: /start of (a new|the) journey/i },

  { messageText: /Today (starts|i start) my journey/i },
  { messageText: /(I’m|I'm|im|i am) starting today/i },

  // DAY ZERO
  { ...both, titleText: /day (0|zero)/i },

  // DAY ONE
  { ...both, titleText: /day (one|1) of /i },
  { ...both, titleText: /day (one|1) without fapping/i },
  { ...both, titleText: /this is day (one|1)/i },
  { ...both, titleText: /day (one|1) Started/i },
  { ...both, titleText: /day (one|1) (Let's|let’s|lets) go/i },
  { ...both, titleText: /(Let's|let’s|lets) go (nofap|no fap|no-fap) day (one|1)/i },
  { ...both, titleText: /(Let's|let’s|lets) get this started/i },

  { ...both, titleText: /^day 1(\.|\!)?$/i },
  { ...both, titleText: /^day 1 start/i },
  { ...both, titleText: /^day 1 of (nofap|no fap|no-fap) journey/i },
  { ...both, titleText: /^1 day of (nofap|no fap|no-fap) journey/i },

  { ...both, titleText: /officially day (1|one)/i },
  { ...both, titleText: /today is day (1|one)/i },
  { ...both, titleText: /^day (one|1) of (no fap|reboot|re boot)/i },
  { ...both, titleText: /^day (one|1) no/i },
  { ...both, titleText: /^day (one|1)$/i }, // could be relapse

  // FIRST
  { titleText: /first post/i },
  { titleText: /first time doing this/i },
  { titleText: /first time .* looking for advice/i },
  { titleText: /first time (nofap|no fap|no-fap)/i },
  { titleText: /(first|1st) (day)/i },
  { titleText: /first timer/i },
  { titleText: /^first time here$/i },

  { messageText: /this is gonna be my first day to nofap/i },
];
