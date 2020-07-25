import { RegexFilters } from '../../regexUtil';

export const toRelapseAdviceRegexArray: RegexFilters[] = [
  { flairText: /Relapse Report/i },

  { titleText: /failed first attempt/i },
  { titleText: /relapse report/i },
  { titleText: /(I|I've|just) ?(have)? (relapsed|failed)/i },
  { titleText: /(relapse|relapsed) (after|on day|again)/i }, // relapsed today DOES NOT work, because it can be used in other contexts.
  { titleText: /(failed|lost) (at|on) day/i },
  { titleText: /(broke my|broke a|broke the|lost my|lost a|lost an) ?(.*) (streak)/i },
  { titleText: /^relapsed\.?$/i },
  { titleText: /^relapse\.?$/i },
  { titleText: /^relapsed (last night|today)/i },
  { titleText: /^failed\.?$/i },
  { titleText: /relapsing after a/i },
  { titleText: /relapsed \d+ times today/i },
  { titleText: /any tips after a relapse/i },
  // relapsed (will have to look into this)
  { titleText: /(Relapsed|relapse) at \d+ days/i },
  { titleText: /(Relapsed|relapse) at day \d+/i },
  { titleText: /I slipped/i },
  { titleText: /^Failed after/i },
  { titleText: /made it .* and relapsed/i },
  { titleText: /my first fail/i },
  { titleText: /I had a relapse/i },
  { titleText: /back to day (one|1)/i },
// - relapsed
];