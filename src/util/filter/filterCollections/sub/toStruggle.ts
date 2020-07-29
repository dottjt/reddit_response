import { InitialRegExpCollection, both } from '../../regex/regexUtil';

// remove from
// I was about to relapse again
// (almost) lost my longest streak

export const toStruggleAdviceRegexArray: InitialRegExpCollection[] = [
  // STRUGGLE
  { titleText: /Feel like ?(I’m|I'm|im|I am)? slipping/i, },
  { titleText: /(I’m|I'm|im|I am) really struggling/i, },
  { titleText: /^help!$/i, },
  { titleText: /I CANT STOP(P)? HELP/i, },
  { titleText: /this is getting harder/i, },
  { titleText: /I really (can’t|can't|cant) stop/i, },
  { titleText: /why is this so hard/i, },
  { titleText: /I (can’t|can't|cant) get past the .* mark/i, },
  { titleText: /I (can’t|can't|cant) get past day .*/i, },
  { titleText: /(can’t|can't|cant) get a streak going/i, },
  { titleText: /Struggling to (break|kick) this addiction/i, },
  { titleText: /Struggling to to get a new streak/i, },
  { titleText: /^Struggling$/i, },
  { titleText: /^Struggling on day /i, },
  { titleText: /been failing miserably/i, },
  { titleText: /already tempted to relapse/i, },
  { titleText: /tried countless of times before/i, },
  { titleText: /I (can’t|can't|cant) get my mind (of|off) it/i, },
  { titleText: /Still Struggling/i, },
  { titleText: /I just have to stop/i, },
  { titleText: /how do i get past day 1\?/i, },
  { titleText: /I ?(just)? (give up|need support|(can’t|can't|cant) stop)/i },

  { ...both, titleText: /i dont know how to just stop it/i },
  { ...both, titleText: /I (can’t|can't|cant) (stop|quit) (masturbating|porn)/i, },
  { ...both, titleText: /not able to start .* journey again/i, },
  { ...both, messageText: /having a really hard time controlling my urges\?/i, },
  { ...both, messageText: /How can I get out of this hole\?/i, },
  { ...both, messageText: /reasons so that I (don’t|don't|dont) (.*)? relapse/i, },
  { ...both, messageText: /I (don’t|don't|dont) know what to do and I need help/i, },
  { ...both, messageText: /I (don’t|don't|dont) want this anymore/i, },
  { ...both, messageText: /not sure if I can reason my way through it any longer/i, },
  { ...both, messageText: /never (been|felt) so depressed/i, },

  // ABOUT TO RELAPSE
  { titleText: /(I’m|I'm|im|I am) about to relapse/i, },
  { titleText: /(I’m|I'm|im|I am) ?(really)? close to relapsing/i, },
  { titleText: /encourage me not to/i, },
  { titleText: /I keep relapsing/i, },
  { titleText: /^almost relapsed(\.)?$/i, },
  { titleText: /Feel Like (I’m|I'm|im|I am) Going To Relapse/i, },

  // EXHAUSTED
  { titleText: /^emotionally exhausted$/i, },
  { titleText: /So desensitized I literally feel nothing/i, },

  // * MESSAGES *
  { messageText: /Help me guys/i, },
  { messageText: /Any motivation would be great now/i, },
  { messageText: /Please motivate me to do better/i, },

  { ...both, messageText: /help guys what i should do/i, },
  { ...both, messageText: /Please help me out of this/i, },
  { ...both, messageText: /I (can’t|can't|cant) really keep any consistency/i, },
  { ...both, messageText: /I always end up binging/i, },
  { ...both, messageText: /I keep ?(on)? struggling with PMO/i, },
  { ...both, messageText: /I really need you guys to help me out here please/i, },

  { ...both, titleText: / I am relapsing again and again/i, },
];

