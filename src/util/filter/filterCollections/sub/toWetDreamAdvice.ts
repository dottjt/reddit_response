import { RegexFilters } from '../../regexUtil';

export const toWetDreamAdviceRegexArray: RegexFilters[] = [
  { titleText: /(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall) advice/i },
  { titleText: /had a wet dream/i },
  { titleText: /^(wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)$/i },
  { titleText: /how to stop (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { titleText: /how to deal with (wet dreams|wetdreams|wetdream|wet dream|nightfall|night fall)/i },
  { titleText: /wet dreamed this morning/i },
  { titleText: /wet dream on day/i },
  { titleText: /Do wet dreams count as relapsing/i },
  { titleText: /Lose benefits after a wet dream?/i },
  { titleText: /Wet dreams (wont|won't) stop/i },

  // TITLE + MESSAGE
  { titleText: /wet dream/i, messageText: /any solutions\?/ },
  { titleText: /wet dream/i, messageText: /ways to avoid it\?/ },
];