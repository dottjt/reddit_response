import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toWetdreamAdviceRegexArray: InitialRegExpCollection[] = [
  { titleText: /^(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)$/i },

  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) advice/i },
  { ...both, titleText: /had a wet dream/i }, // - prefi with never
  { ...both, titleText: /how to stop (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /how to deal with (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /wet dreamed this morning/i },
  { ...both, titleText: /wet dream on day/i },
  { ...both, titleText: /are (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) a sign of progress/i },
  { ...both, titleText: /How do I stop (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },

  { ...both, titleText: /Do (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) count/i },
  { ...both, titleText: /Do (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) breaks ?(NoFap|no fap|no-fap)? streak/i },
  { ...both, titleText: /Lose benefits after a wet dream?/i },
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) (wont|won't) stop/i },
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) every \d+/i },
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) bad\?/i },
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) = relapse/i },
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) count as a relapse/i },
  { ...both, titleText: /Does (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) is considered as a relapse/i },
  { ...both, titleText: /Anybody have tips to avoid (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /had a (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) is it a relapse/i },
  { ...both, titleText: /Is having ?(a)? (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /What if i have (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /Do (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) interfere with (NoFap|no fap|no-fap) benefits/i },
  { ...both, titleText: /does (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) end my/i },
  { ...both, titleText: /Experienced a (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /what to do after a (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /Does (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) break my streak/i },
  { ...both, titleText: /I (had a|had|got) (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) (after|in the)/i },
  { ...both, titleText: /way(s)? to reduce (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },

  // TITLE + MESSAGE
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /any solutions\?/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /ways to avoid it\?/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Is this normal\?/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Does it reset progress\?/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Should I worry about it/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Any advice/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /how do I avoid/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Does it break my/ },

  { messageText: [ /Is it normal/, /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i ] },
];