import { InitialRegExpCollection, both } from '../../../regex/regexUtil';

export const toRemoveCounter: InitialRegExpCollection[] = [
  // COUNTER
  { titleText: /profile/i },
  { titleText: /(days|day) flair/i },
  { titleText: /name tag/i },
  { titleText: /How do you add ?(the)? days/i },
  { titleText: /tell me how to add days/i },

  { titleText: /(Don't|Don't|dont) mind me/i },
  { titleText: /journal entry/i }, // look into this.
  { titleText: /journal check in/i }, // look into this.
  { titleText: /diary/i },
  { titleText: /libido/i },
  { titleText: /(weekly|daily) journal/i },
  { titleText: /(tracker|counting|counter)/i },
  { titleText: /checking my day count/i },
  { titleText: /accountability post/i },
  { titleText: /next to (ur|your) (name|tag)/i },
  { titleText: /Where is the tag that/i },
  { titleText: /tag that shows your streak/i },
  { titleText: /someone put a counter/i },
];
