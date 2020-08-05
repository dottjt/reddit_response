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
  { titleText: /(can’t|can't|cant) stop relapsing/i, },
  { titleText: /^Almost Failed$/i, },

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

  { ...both, titleText: /I have no motivation no energy nothing/i },
  { ...both, titleText: /I want to kill myself badly/i },
  { ...both, titleText: /Now I feel so shit/i },
  { ...both, titleText: /I keep losing/i },
  { ...both, titleText: /feel close to Giving (Up|in)/i },
  { ...both, titleText: /guys (I’m|I'm|im|I am) struggling/i },
  { ...both, titleText: /It literally feels impossible to quit/i },
  { ...both, titleText: /^struggling (now|today|tonight)$/i },
  { ...both, titleText: /back to my addiction .* I cannot stop/i },
  { ...both, titleText: /urges hitting hard/i },
  { ...both, titleText: /I honestly do not know what to do/i },
  { ...both, titleText: /i (don’t|don't|dont) know how to just stop it/i },
  { ...both, titleText: /I (can’t|can't|cant) (stop|quit) (masturbating|porn)/i, },
  { ...both, titleText: /not able to start .* journey again/i, },
  { ...both, titleText: /failed many times/i, },

  { ...both, titleText: /So tired of relapsing/i, },
  { ...both, titleText: /having a really hard time controlling my urges\?/i, },
  { ...both, titleText: /How can I get out of this hole\?/i, },
  { ...both, titleText: /reasons so that I (don’t|don't|dont) (.*)? relapse/i, },
  { ...both, titleText: /I (don’t|don't|dont) know what to do and I need help/i, },
  { ...both, titleText: /I (don’t|don't|dont) want this anymore/i, },
  { ...both, titleText: /not sure if I can reason my way through it any longer/i, },
  { ...both, titleText: /never (been|felt) so depressed/i, },
  { ...both, titleText: /might relapse tonight/i, },
  { ...both, titleText: /please I need help/i, },
  { ...both, titleText: /struggling right now/i, },
  { ...both, titleText: /I (can’t|can't|cant) even pass 2 days /i, },

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
  { messageText: /I have a very severe porn addiction/i, },

  { ...both, titleText: /struggling so hard/i, },
  { ...both, titleText: /The struggle is real/i, },
  { ...both, titleText: /Struggling with addiction/i, },
  { ...both, titleText: /help guys what i should do/i, },
  { ...both, titleText: /Please help me out of this/i, },
  { ...both, titleText: /I (can’t|can't|cant) really keep any consistency/i, },
  { ...both, titleText: /I always end up binging/i, },
  { ...both, titleText: /I keep ?(on)? struggling with PMO/i, },
  { ...both, titleText: /I really need you guys to help me out here please/i, },
  { ...both, titleText: /feel loss and defeated/i, },

  { ...both, titleText: /I am relapsing again and again/i, },
  { ...both, titleText: /I cannot win this battle/i, },
];

