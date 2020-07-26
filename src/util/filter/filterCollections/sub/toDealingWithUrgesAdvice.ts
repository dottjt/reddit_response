import { RegexFilters, both } from '../../regexUtil';

export const toDealingWithUrgesAdviceRegexArray: RegexFilters[] = [
  // URGES
  { ...both, titleText: /^urges(\.)?$/i },
  { ...both, titleText: /Urges(\.)? Help me/i },
  { ...both, titleText: /(I’m|im|I m|i'm) having urges/i },

  // ADVICE / HELP
  { ...both, titleText: /advice on (fighting|resisting) urges/i },
  { ...both, titleText: /help (w|with) persistent urge/i },
  { ...both, titleText: /help make me stop letting my urges/i },
  { ...both, titleText: /help stop my urges/i },
  { ...both, titleText: /When urges get strong(,)? what should I do/i },

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
