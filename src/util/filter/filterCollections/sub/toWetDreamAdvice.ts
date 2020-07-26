import { RegexFilters, both } from '../../regexUtil';

export const toWetDreamAdviceRegexArray: RegexFilters[] = [
  { titleText: /^(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)$/i },
  
  { ...both, titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) advice/i },
  { ...both, titleText: /had a wet dream/i },
  { ...both, titleText: /how to stop (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /how to deal with (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { ...both, titleText: /wet dreamed this morning/i },
  { ...both, titleText: /wet dream on day/i },
  { ...both, titleText: /Do wet dreams count as relapsing/i },
  { ...both, titleText: /Lose benefits after a wet dream?/i },
  { ...both, titleText: /Wet dreams (wont|won't) stop/i },
  { ...both, titleText: /Wet dreams every \d+/i },
  { ...both, titleText: /Wet dreams bad\?/i },

  // TITLE + MESSAGE
  { titleText: /wet dream/i, messageText: /any solutions\?/ },
  { titleText: /wet dream/i, messageText: /ways to avoid it\?/ },
  { titleText: /wet dream/i, messageText: /Is this normal\?/ },
  { titleText: /wet dream/i, messageText: /Does it reset progress\?/ },
];