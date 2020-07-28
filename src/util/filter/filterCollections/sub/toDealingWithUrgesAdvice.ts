import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toDealingWithUrgesAdviceRegexArray: InitialRegExpCollection[] = [
  // URGES
  { titleText: /^getting urges$/i },
  { titleText: /Urges at night/i },

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
  { ...both, titleText: /How do you guys keep fantasizing in check/i },
  { ...both, titleText: /How do you stop the unsurmountable urges/i },


  // URGES STRUGGLE
  { ...both, titleText: /urges from hell/i },
  { ...both, titleText: /very strong urges/i },
  { ...both, titleText: /the urges are unreal/i },
  { ...both, titleText: /just got the biggest urge ever/i },
  { ...both, titleText: /Really struggling with fighting (urges|the urge)/i },
  { ...both, titleText: /having trouble fighting (urges|the urge)/i },
  { ...both, titleText: /need some advice to fight (urges|the urge)/i },

  { ...both, titleText: /temptation to peak is too damn high/i },
  { ...both, titleText: /(couple of|past few) days .* constant urges/i },
  { ...both, titleText: /(it’s|it's|its|it is) hard to resist/i },


  { ...both, titleText: /urges are ?(getting|becoming)? bigger and bigger/i },
];
