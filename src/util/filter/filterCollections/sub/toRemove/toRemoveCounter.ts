import { InitialRegExpCollection, both } from '../../../regex/regexUtil';

export const toRemoveCounter: InitialRegExpCollection[] = [
  // COUNTER
  { titleText: /profile/i },
  { titleText: /(days|day) flair/i },
  { titleText: /name tag/i },
  { titleText: /(Don't|Don't|dont) mind me/i },
  { titleText: /journal entry/i }, // look into this.
  { titleText: /journal check in/i }, // look into this.
  { titleText: /diary/i },
  { titleText: /libido/i },
  { titleText: /(weekly|daily) journal/i },
  { titleText: /(tracker|counting|counter)/i },
  { titleText: /accountability post/i },


  { ...both, titleText: /^counter$/i },
  { ...both, titleText: /How do u get a number/i },
  { ...both, titleText: /numbers by ur name/i },
  { ...both, titleText: /just to see the days/i },
  { ...both, titleText: /add that day count/i },
  { ...both, titleText: /to see my streak/i },
  { ...both, titleText: /I want a flair/i },
  { ...both, titleText: /checking my day count/i },
  { ...both, titleText: /How Do I Put The Numbers Of Days/i },
  { ...both, titleText: /How to reset the timer/i },
  { ...both, titleText: /How do you add ?(the)? days/i },
  { ...both, titleText: /tell me how to add days/i },
  { ...both, titleText: /How do I get the number of days/i },
  { ...both, titleText: /next to (ur|your) (name|tag)/i },
  { ...both, titleText: /tag that shows your streak/i },
  { ...both, titleText: /Where is the tag that/i },
  { ...both, titleText: /someone put a counter/i },
  { ...both, titleText: /How to add day streak/i },
  { ...both, titleText: /How to add how many days/i },
  { ...both, titleText: /Where can I see my (NoFap|no fap|no-fap) counter/i },
];
