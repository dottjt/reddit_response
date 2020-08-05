import { InitialRegExpCollection, both } from '../../regex/regexUtil';

export const toDealingWithUrgesAdviceRegexArray: InitialRegExpCollection[] = [
  // URGES
  { titleText: /heavy urges/i },
  { titleText: /^getting (urges|the urge|cravings)$/i },
  { titleText: /(urges|the urge|cravings) at night/i },
  { titleText: /(urges|the urge|cravings) are strong/i },
  { titleText: /^strong urges$/i },


  { ...both, titleText: /advice on how to beat the urge/i },
  { ...both, titleText: /the urges are super strong/i },
  { ...both, titleText: /I have an urge right now/i },
  { ...both, titleText: /feeling the urge to release/i },
  { ...both, titleText: /having a really strong urge right now/i },
  { ...both, titleText: /^(urges|the urge|cravings)(\.)?$/i },
  { ...both, titleText: /(urges|the urge|cravings)(\.)? Help me/i },
  { ...both, titleText: /(I’m|im|I m|i'm) having (urges|the urge|cravings)/i },
  { ...both, titleText: /I (don’t|dont|don't) know if I can hold it/i },
  { ...both, titleText: /usually deal with (urges|the urge|cravings)/i },
  { ...both, titleText: /How long does it take for the urges/i },
  { ...both, titleText: /do the urges ever stop coming/i },
  { ...both, titleText: /feel the urge to do it/i },



  { messageText: /someone tell me when (these|this) (urge|urges) will/i },

  // ARRAY - TODO test to see if this actually works
  { messageText: [ /strong (urge|urges)/i, /(don’t|dont|don't) know how to deal with it/i ] },

  // ADVICE / HELP
  { ...both, titleText: /(cant|can't|can’t) control my (urges|the urge|cravings) for more than one day/i },
  { ...both, titleText: /advice on (fighting|resisting) (urges|the urge|cravings)/i },
  { ...both, titleText: /help (w|with) persistent urge/i },
  { ...both, titleText: /help make me stop letting my urges/i },
  { ...both, titleText: /help stop my (urges|the urge|cravings)/i },
  { ...both, titleText: /When (urges|the urge|cravings) get strong(,)? what should I do/i },
  { ...both, titleText: /my (urges|the urge|cravings) at night/i },
  { ...both, titleText: /Does anyone get (urges|the urge|cravings) at night when/i },
  { ...both, titleText: /suggestions to stop the (urges|the urge|cravings)/i },
  { ...both, titleText: /any tips on things to do when you have (urges|the urge|cravings)/i },
  { ...both, titleText: /Any tips for controlling (urges|the urge|cravings)/i },
  { ...both, titleText: /Any tips cause the (urges|the urge|cravings) are to intense/i },
  { ...both, titleText: /urges are getting (the)? better of me/i },

  // HOW TO
  { ...both, titleText: /How do I (fight|resist) (urges|the urge|cravings)/i },
  { ...both, titleText: /How do I overcome ?(.*) (urges|the urge|cravings)/i },
  { ...both, titleText: /How to (control|handle|deal with) ?(these|the)? (urges|the urge|cravings)/i },
  { ...both, titleText: /how to beat .* (urges|the urge|cravings)/i },
  { ...both, titleText: /How do you guys keep fantasizing in check/i },
  { ...both, titleText: /How do you stop the unsurmountable (urges|the urge|cravings)/i },
  { ...both, titleText: /how did you overcome the urge/i },
  { ...both, titleText: /how do i survive the urge of/i },
  { ...both, titleText: /How to kill a strong urge/i },
  { ...both, titleText: /urges all the time/i },
  { ...both, titleText: /use to beat the urges/i },
  { ...both, titleText: /How to stop thinking about/i },
  { ...both, titleText: /How do I stop these urges/i },
  { ...both, titleText: /having urges while/i },
  { ...both, titleText: /How to stop that urge/i },
  { ...both, titleText: /advices about resisting those urges/i },
  { ...both, titleText: /trying to resist my urges/i },
  { ...both, titleText: /Very strong urge to relapse/i },

  // URGES STRUGGLE
  { ...both, titleText: /urges from hell/i },
  { ...both, titleText: /very strong urges/i },
  { ...both, titleText: /the urges are unreal/i },
  { ...both, titleText: /just got the biggest urge ever/i },
  { ...both, titleText: /Really struggling with fighting (urges|the urge|cravings)/i },
  { ...both, titleText: /having trouble fighting (urges|the urge|cravings)/i },
  { ...both, titleText: /need some advice to fight (urges|the urge|cravings)/i },
  { ...both, titleText: /still struggling with (urges|the urge|cravings)/i },
  { ...both, titleText: /the (urges|the urge|cravings) are really bad/i },

  { ...both, titleText: /temptation to peak is too damn high/i },
  { ...both, titleText: /best way to fight (urges|the urge|cravings)/i },
  { ...both, titleText: /(couple of|past few) days .* constant (urges|the urge|cravings)/i },
  { ...both, titleText: /(it’s|it's|its|it is) hard to resist/i },
  { ...both, titleText: /today was ?(really)? hard on (for me|me) to control the (urges|the urge|cravings)/i },

  { ...both, titleText: /urges are ?(getting|becoming)? bigger and bigger/i },
];
