import { RegexFilters } from '../../regexUtil';

export const toStruggleAdviceRegexArray: RegexFilters[] = [
  // FLAIR
  { flairText: /Slip-Up Prevention/i },

  // STRUGGLE
  { titleText: /(im|i'm) really struggling/i, },
  { titleText: /^help!$/i, },
  { titleText: /I CANT STOP(P)? HELP/i, },
  { titleText: /this is getting harder/i, },
  { titleText: /I really can't stop/i, },
  { titleText: /why is this so hard/i, },
  { titleText: /I (cant|can't) get past the .* mark/i, },
  { titleText: /(cant|can't) get a streak going/i, },
  { titleText: /Struggling to (break|kick) this addiction/i, },
  { titleText: /Struggling to to get a new streak/i, },
  { titleText: /^Struggling$/i, },
  { titleText: /^Struggling on day /i, },
  { titleText: /been failing miserably/i, },

  // ABOUT TO RELAPSE
  { titleText: /I am about to relapse/i, },
  { titleText: /encourage me not to/i, },
  { titleText: /I keep relapsing/i, },

  // EXHAUSTED
  { titleText: /^emotionally exhausted$/i, },
  { titleText: /So desensitized I literally feel nothing/i, },

  // * MESSAGES *
  { messageText: /Help me guys/i, },
  { messageText: /Please help me out of this/i, },
  { messageText: /I can't really keep any consistency/i, },
  { messageText: /I always end up binging/i, },
  { messageText: /I keep ?(on)? struggling with PMO/i, },
  { messageText: /Any motivation would be great now/i, },
];

