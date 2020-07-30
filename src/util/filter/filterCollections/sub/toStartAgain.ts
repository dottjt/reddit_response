import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toStartAgainAdviceRegexArray: InitialRegExpCollection[] = [
// TODO, not sure about making this a `both` - but we'll see.

  // AGAIN
  { ...both, titleText: /(begin|(Let's|let’s|lets) do this) again/i },
  { ...both, titleText: /gonna try again/i, },
  { ...both, titleText: /^Beginning Again$/i, },

  { ...both, titleText: /trying ?(nofap|no fap|no-fap|this|it)? again/i, },
  { ...both, titleText: /Trying to start ?(nofap|no fap|no-fap|this)? again/i, },
  { ...both, titleText: /decided to try ?(nofap|no fap|no-fap|this)? again/i, },
  { ...both, titleText: /^trying again$/i, },
  { ...both, titleText: /day (1|one) again/i, },
  { ...both, titleText: /starting, again/i, },
  { ...both, titleText: /^Starting again../i, },
  { ...both, titleText: /giving (nofap|no fap|no-fap|this) another go/i, },

  { ...both, titleText: /Any advices for my second attempt/i, },
  { ...both, titleText: /starting (nofap|no fap|no-fap) again/i, },
  { ...both, titleText: /^starting ?(nofap|no fap|no-fap|this|it)? again(\.)?$/i, },
  { ...both, titleText: /doing (nofap|no fap|no-fap) again/i, },
  { ...both, titleText: /(Let's|let’s|lets) start ?(nofap|no fap|no-fap|this)? again/i, },
  { ...both, titleText: /Back at it again/i, },
  { ...both, titleText: /(It’s|It's|its) my second attempt/i, },
  { ...both, titleText: /once again (going for|attempt)/i, },
  { ...both, titleText: /day (1|0) yet again/i, },

  // RETURNING
  { ...both, titleText: /back on my ?(nofap|no fap|no-fap)? journey/i, },
  { ...both, titleText: /coming back to (nofap|no fap|no-fap)/i, },

  // TRY AGAIN
  { titleText: /one last try/i, },
  { titleText: /starting over/i },
  { titleText: /need to start fresh/i, },
  { messageText: /I will give (nofap|no fap|no-fap|it) another try/i, },
];