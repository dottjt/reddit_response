import { RegexFilters, both } from '../../regexUtil';

export const toRelapseAdviceRegexArray: RegexFilters[] = [
  { ...both, titleText: /failed first attempt/i },
  { ...both, titleText: /relapse report/i },
  { ...both, titleText: /(I|I've|just) ?(have)? (relapsed|failed)/i },
  { ...both, titleText: /(failed|lost) (at|on) day/i },
  { ...both, titleText: /relapsed hard/i },
  { ...both, titleText: /(broke my|broke a|broke the|lost my|lost a|lost an) ?(.*) (streak)/i },
  { ...both, titleText: /^relapsed\.?$/i },
  { ...both, titleText: /^relapse\.?$/i },
  { ...both, titleText: /^relapsed (last night|today)/i },
  { ...both, titleText: /^failed\.?$/i },
  { ...both, titleText: /relapsing after a/i },
  { ...both, titleText: /relapsed once again/i },
  { ...both, titleText: /relapsed \d+ times today/i },
  { ...both, titleText: /any tips after a relapse/i },
  { ...both, titleText: /(Relapsed|relapse) at \d+ days/i },
  { ...both, titleText: /(Relapsed|relapse) at day \d+/i },
  { ...both, titleText: /I slipped/i },
  { ...both, titleText: /^Failed after/i },
  { ...both, titleText: /^terrible relapse$/i },
  { ...both, titleText: /made it .* and relapsed/i },
  { ...both, titleText: /my first fail/i },
  { ...both, titleText: /I had a relapse/i },
  { ...both, titleText: /.* made me relapse$/i },
  { ...both, titleText: /back to day (one|1)/i },
  { ...both, titleText: /lost my streak of/i },
  { ...both, titleText: /Failed \.* again/i },


  { messageText: /was going strong till today/i },
  { messageText: /Yesterday I relapsed again/i },

  { ...both, titleText: /(relapse|relapsed) (after|on day|again)/i }, // relapsed today DOES NOT work, because it can be used in other contexts.

  { flairText: /Relapse Report/i },
];