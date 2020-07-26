import { RegexFilters, both } from '../../regexUtil';

export const toDealingWithUrgesAdviceRegexArray: RegexFilters[] = [
  // URGES
  { titleText: /^getting urges$/i },

  { ...both, titleText: /having a really strong urge right now/i },
  { ...both, titleText: /^urges(\.)?$/i },
  { ...both, titleText: /Urges(\.)? Help me/i },
  { ...both, titleText: /(I’m|im|I m|i'm) having urges/i },

  { messageText: /someone tell me when (these|this) (urge|urges) will/i },

  // ADVICE / HELP
  { ...both, titleText: /advice on (fighting|resisting) urges/i },
  { ...both, titleText: /help (w|with) persistent urge/i },
  { ...both, titleText: /help make me stop letting my urges/i },
  { ...both, titleText: /help stop my urges/i },
  { ...both, titleText: /When urges get strong(,)? what should I do/i },
  { ...both, titleText: /my urges at night/i },
  { ...both, titleText: /Does anyone get urges at night when/i },
  { ...both, titleText: /suggestions to stop the urges/i },

  // HOW TO
  { ...both, titleText: /How do I (fight|resist) the urge/i },
  { ...both, titleText: /How do I overcome ?(.*) urges/i },
  { ...both, titleText: /How to (control|handle|deal with) ?(these|the)? urges/i },
  { ...both, titleText: /how to beat .* urges/i },

  // URGES STRUGGLE
  { ...both, titleText: /urges from hell/i },
  { ...both, titleText: /very strong urges/i },
  { ...both, titleText: /urges are ?(getting|becoming)? bigger and bigger/i },
];
