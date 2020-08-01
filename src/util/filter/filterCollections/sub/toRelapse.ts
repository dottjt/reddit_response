import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toRelapseAdviceRegexArray: InitialRegExpCollection[] = [
  { titleText: /I relapsed/i },

  { ...both, titleText: /failed first attempt/i },
  { ...both, titleText: /Failed my \d+ day streak/i },
  { ...both, titleText: /relapse report/i },
  { ...both, titleText: /(I've|just) ?(have)? (relapsed|failed)/i }, // too broad, I failed is way, way too broad
  { ...both, titleText: /(failed|lost) (at|on) day/i },
  { ...both, titleText: /relapsed hard/i },
  { ...both, titleText: /^relapsed\./i },
  { ...both, titleText: /^failed again$/i },
  { ...both, titleText: /(broke my|broke a|broke the|lost my|lost a|lost an) ?(.*) (streak)/i },
  { ...both, titleText: /^relapsed\.?$/i },
  { ...both, titleText: /^relapse\.?$/i },
  { ...both, titleText: /^relapsed (last night|today|yesterday)/i },
  { ...both, titleText: /I relapsed (last night|today|yesterday)/i },
  { ...both, titleText: /^failed\.?$/i },
  { ...both, titleText: /Just PMO’d (for|after)/i },
  { ...both, titleText: /I released my load yesterday/i },
  { ...both, titleText: /Full blown relapse/i },
  { ...both, titleText: /I ruined my streak of/i },
  { ...both, titleText: /I recently relapsed/i },
  { ...both, titleText: /After a \d+ (day|days) streak/i },
  { ...both, titleText: /^slipped$/i },
  { ...both, titleText: /Guys I had bad relapse/i },
  { ...both, titleText: /Relapsed now feeling/i },
  { ...both, titleText: /I relapsed a few (hours|minutes)/i },
  { ...both, titleText: /I jerked off today/i },

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
  { ...both, titleText: /Ended my \d+ day streak/i },
  { ...both, titleText: /I lost ?(the)? battle today/i },
  { ...both, titleText: /Gave in last night/i },
  { ...both, titleText: /caved into a relapse already/i },
  { ...both, titleText: /Relaspsed because i had/i },



  { messageText: /was going strong till today/i },
  { messageText: /Yesterday I relapsed again/i },

  { ...both, titleText: /relapsed (after|on day|again)/i }, // relapsed today DOES NOT work, because it can be used in other contexts.
  { ...both, titleText: /relapse (after|on day)/i }, // relapsed today DOES NOT work, because it can be used in other contexts.

];