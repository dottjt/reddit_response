import { RegexFilters } from '../../regexUtil';

export const toStruggleAdviceRegexArray: RegexFilters[] = [
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

  // ABOUT TO RELAPSE
  { titleText: /I am about to relapse/i, },
  { titleText: /encourage me not to/i, },
  { titleText: /I keep relapsing/i, },

  // EXHAUSTED
  { titleText: /^emotionally exhausted$/i, },
  { titleText: /So desensitized I literally feel nothing/i, },

  // MESSAGE
  // I can't really keep any consistency
  // I always end up binging porn after a few days.
];

