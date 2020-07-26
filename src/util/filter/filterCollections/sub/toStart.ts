import { RegexFilters, both } from '../../regexUtil';

// TODO fix this up

export const toStartAdviceRegexArray: RegexFilters[] = [

  // NEW
  { titleText: /^newbie/i },
  { titleText: /my first post/i }, // potentially inaccurate
  { titleText: /here for (nofap|no fap|no-fap)/i },

  // DECISION
  { titleText: /will finally commit to (nofap|no fap|no-fap)/i },
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
  { titleText: /(it’s|it's|its|it is) time to change/i },
  { titleText: /this ends now/i },
  { titleText: /(Let's|let’s|lets) (start|do this)/i },
  { titleText: /(start|beginning) (of a|of my|my) (nofap|no fap|no-fap|journey)/i },

  { ...both, titleText: /try to do this (NoFap|no fap|no-fap)/i },
  { ...both, titleText: /(masturbated|watched porn|fapped) for the last time today/i },
  { ...both, titleText: /start of something amazing/i },
  { ...both, titleText: /going to (stop|quit) (.*)? today/i, },
  { ...both, titleText: /I have started my journey/i },

  // ADVICE
  { titleText: /any tips on getting started/i },
  { messageText: /Any advice on how to start/i },

  // JOINED / NEW
  { titleText: /just joined (nofap|no fap|no-fap)/i },
  { titleText: /new here/i },
  { titleText: /^(I’m|I'm|im|I am) new/i },
  { titleText: /new to (NoFap|no fap|no-fap|this)/i },

  // STARTS NOW
  { titleText: /we start today/i },
  { titleText: /today I start/i },
  { titleText: /(NoFap|no fap|no-fap) from today/i },
  { titleText: /(gonna|going to) start today/i },
  { titleText: /(quitting|quiting|starting) ?(.*) (now|today)/i },
  { titleText: /(gonna|going) ?(to)? start (nofap|no fap|no-fap)/i },
  { titleText: /gonna start to stop watching porn from now/i },
  { titleText: /journey (start|begins)/i },
  { titleText: /it begins here/i },
  { titleText: /(here|now) it begins/i },
  { titleText: /the cycle stops here/i },

  // BEGINNING
  { titleText: /beginning of my Journey in (NoFap|no fap|no-fap)/i },
  { titleText: /beginning the Challenge/i },
  { titleText: /the beginning/i },
  { titleText: /So finally (Let's|let’s|lets) begin/i },

  // START
  { titleText: /about to start/i },
  { titleText: /How to start\?/i },
  { titleText: /a new start/i },
  { titleText: /(I’m|I'm|im|I am) ready to start/i },
  { titleText: /where to start/i },
  { titleText: /(wanna|want|trying) to start/i },

  // STARTING
  { titleText: /starting (NoFap|no fap|no-fap)/i },
  { titleText: /why (I’m|I'm|im|I am) starting/i },
  { titleText: /^(starting|started)(\.|\!)?$/i },
  { titleText: /starting my journey/i },
  { titleText: /(starting|started|starts) (now|today)/i },
  { titleText: /(starting|started) .* (streak|first|run)/i },
  { titleText: /(starting|started) days of (nofap|no fap|no-fap)/i },
  { titleText: /starting .* challenge/i },
  { titleText: /(I’m|I'm|im|I am) starting/i },
  { titleText: /starting .* journey/i },

  { messageText: /starting from today/i },
  { messageText: /starting today i am done/i },

  // STARTED
  { titleText: /started (nofap|no fap|no-fap) today/i },
  { titleText: /(just) (begun|started)/i },
  { titleText: /getting started/i },

  // START JOURNEY
  { titleText: /start to my Journey/i },
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
  { ...both, titleText: /^day 1(\.|\!)?$/i },
  { ...both, titleText: /officially day (1|one)/i },
  { ...both, titleText: /today is day (1|one)/i },
  { ...both, titleText: /^day (one|1) of (no fap|reboot|re boot)/i },
  { ...both, titleText: /^day (one|1) no/i },
  { ...both, titleText: /^day (one|1)$/i }, // could be relapse

  // FIRST
  { titleText: /first post/i },
  { titleText: /first time doing this/i },
  { titleText: /(first|1st) (step|day)/i },
  { titleText: /first timer/i },
  { titleText: /^first time here$/i },

  { messageText: /this is gonna be my first day to nofap/i },

  // FLAIR
  // { flairText: /New To NoFap/i }, // please don't do this again, it's simply not useful and is not actually new people half the time. 
];
