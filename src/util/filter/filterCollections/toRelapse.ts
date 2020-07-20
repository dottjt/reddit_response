export const toRelapseAdvice = (titleText: string, flairText: string): boolean =>
  flairText === 'Relapse Report'
  || new RegExp(/failed first attempt/i).test(titleText)
  || new RegExp(/relapse report/i).test(titleText)
  || new RegExp(/(I|I've|just) ?(have)? (relapsed|failed)/i).test(titleText)
  || new RegExp(/(relapse|relapsed) (after|on day|again)/i).test(titleText) // relapsed today DOES NOT work, because it can be used in other contexts.
  || new RegExp(/(failed|lost) (at|on) day/i).test(titleText)
  || new RegExp(/(broke my|broke the|lost my) ?(.*) (streak)/i).test(titleText)
  || new RegExp(/^relapsed\.?$/i).test(titleText)
  || new RegExp(/^relapse\.?$/i).test(titleText)
  || new RegExp(/^relapsed (last night|today)/i).test(titleText)
  || new RegExp(/^failed\.?$/i).test(titleText)
  || new RegExp(/relapsing after a/i).test(titleText)
  || new RegExp(/relapsed \d+ times today/i).test(titleText)
  // relapsed (will have to look into this)
  || new RegExp(/(Relapsed|relapse) at \d+ days/i).test(titleText)
  || new RegExp(/(Relapsed|relapse) at day \d+/i).test(titleText)
  || new RegExp(/I slipped/i).test(titleText)
  || new RegExp(/my first fail/i).test(titleText)
  || new RegExp(/back to day (one|1)/i).test(titleText)
  // - relapsed
