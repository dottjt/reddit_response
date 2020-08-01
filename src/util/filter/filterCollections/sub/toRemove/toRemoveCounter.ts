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
  { titleText: /checking my day count/i },
  { titleText: /accountability post/i },

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
];
