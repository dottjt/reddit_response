import { RegexFilters, both } from '../../regexUtil';

export const toWetDreamAdviceRegexArray: RegexFilters[] = [
  { titleText: /^(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)$/i },

  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) advice/i },
  { ...both, titleText: /had a wet dream/i },
  { ...both, titleText: /how to stop (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /how to deal with (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /wet dreamed this morning/i },
  { ...both, titleText: /wet dream on day/i },
  { ...both, titleText: /Do (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) count as relapsing/i },
  { ...both, titleText: /Do (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) breaks ?(NoFap|no fap|no-fap)? streak/i },
  { ...both, titleText: /Lose benefits after a wet dream?/i },
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) (wont|won't) stop/i },
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) every \d+/i },
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) bad\?/i },
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) = relapse/i },

  // TITLE + MESSAGE
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /any solutions\?/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /ways to avoid it\?/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Is this normal\?/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Does it reset progress\?/ },
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i, messageText: /Should I worry about it/ },
];