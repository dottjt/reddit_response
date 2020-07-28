import { InitialRegExpCollection, both } from '../../regex/regexUtil';

// TODO FIX THIS UP

export const toGeneralAdviceRegexArray: InitialRegExpCollection[] = [

  // MOTIVATION
  { titleText: /please I need motivation/i },
  { titleText: /I have a serious addiction to masturbation/i },

  { ...both, titleText: /need some ?(more|serious)? (inspiration|motivation)/i },

  { messageText: /any motivation or advice is welcome/i },
  { messageText: /any words of encouragement/i },
  { messageText: /(I’ll|ill|I'll)  definitely be open to anything/i },

  // ADVICE

  { titleText: /I need ?(.*) help/i },
  { titleText: /Looking for Tips/i },
  { titleText: /^tips\?$/i },
  { titleText: /.* any tips\?$/i },
  { titleText: /^need tips$/i },
  { titleText: /^Need advice$/i },
  { titleText: /could use some advice/i },
  { titleText: /Beginner, need some advice/i },
  { titleText: /what other steps/i },
  { titleText: /any help or advice/i },
  { titleText: /does anyone have tips/i },

  { ...both, titleText: /any ideas or advice on (quitting|quiting)/i },
  { ...both, titleText: /any tips on how to maintain a ?(long)? streak/i },
  { ...both, titleText: /please give your suggestions and tips/i },
  { ...both, titleText: /please suggest how can I/i },
  { ...both, titleText: /Looking for advice on my relapses/i },
  { ...both, titleText: /need (NoFap|no fap|no-fap) tips/i },
  { ...both, titleText: /any tips to stop (fapping|mast)/i },
  { ...both, titleText: /any tips to (stop|quit)\?/i },
  { ...both, titleText: /Tips for (quitting|quiting) (porn|masturbation)/i },

  { ...both, titleText: /need some general advice/i },
  { ...both, titleText: /I really want to stop fapping and watching porn/i },
  { ...both, titleText: /scared that i will relapse(,)? some tips/i },
  { ...both, titleText: /Need Advice to fight porn addiction/i },
  { ...both, titleText: /(I’m|im|I'm|I am) an addict please help me with some advice/i },
  { ...both, titleText: /if anyone has (advice|tips) for a (beginner|novice)/i },

  { messageText: /Can anyone help me/i },
  { messageText: /What do (you|u) do when (you|u) really want to do it/i },
  { messageText: /what can I do to change/i },
  { messageText: /give me some pointers/i },
  { messageText: /any tips on how to do it/i },
  { messageText: /looking for something that will make me stop/i },
  { messageText: /I wanted to know any advice/i },
  { messageText: /Any advice is ?(much)? appreci/i },
  { messageText: /anybody could help/i },
  { messageText: /I would appreciate (any|all the) advice/i },
  { messageText: /please tell me what (should I|to) do\?/i },
  { messageText: /share their conclusions about how they overcame/i },
  { messageText: /any improvements are welcome/i },
  { messageText: /wondering if there are other techniques and suggestions/i },

  { titleText: /^(no fap|nofap|no-fap)(\.)?$/i, messageText: /(Any)? (help|advice|tips)\?/i },

  // UNABLE TO STOP
  { titleText: /I keep failing/i },
  { titleText: /I ?(still)? (don’t|don't|dont) know what to do/i },
  { titleText: /still can't do it/i },
  { messageText: /How do I stop\?/i },
  { messageText: /anyone plzzzz/i },
  { messageText: /I (don’t|don't|dont) know how to convince (my self|myself) to give ?(it)? up/i },

  // HOW TO
  { ...both, titleText: /^how to quit(\?)?$/i },
  { ...both, titleText: /best way to stop masturbating\?/i },
  { ...both, titleText: /how can I (stop|survive this journey)/i },
  { ...both, titleText: /how do I avoid relapsing/i },
  { ...both, titleText: /How not to get into an Addiction/i },
  { ...both, titleText: /how to get past .* (week|days|day)/i },
  { ...both, titleText: /someone tell me how to (stop|quit)/i },
  { ...both, titleText: /How do I regain (self control|self-control)/i },

  // STRUGGLE
  { titleText: /no (masterbation|masturbation) is hard for me/i },
  { titleText: /shit is getting rough/i },
  { titleText: /(It’s|its|It's|it is) impossible/i },
  { titleText: /trying for years/i },
  { titleText: /(failing|falling|struggling) badly/i },
  { titleText: /addicted like hell/i },
  { titleText: /(I've|I’ve|Ive) failed countless/i },
  { titleText: /feel like shit/i },
  { titleText: /things are getting worse/i },
  { titleText: /Trying Nofap .* years/i },
  { titleText: /(cant|can't|can’t) make it more than/i },
  { titleText: /I feel like relapsing/i },

  { ...both, titleText: /I ?(really)? (don’t|don't|dont) know what to do/i },

  // HELP
  { titleText: /^Need help/i },
  { titleText: /^Please help/i },
  { titleText: /^please help me(\.|\?)?$/i },
  { titleText: /^help me please(\.|\?)?$/i },
  { titleText: /^help me$/i },
  { titleText: /need help and advice/i },
  { titleText: /I really, really need help/i },
  { titleText: /How do i recover my (mind|body)/i },
  { titleText: /need ?(some)? help with stopping/i },
  { titleText: /(cant|can't|can’t) control help me please/i },
  { titleText: /help me out from relapsing/i },

  { ...both, titleText: /help me with this addiction/i },

  { messageText: /So please guys, I need your help/i },
  { messageText: /I just want to stop this thing/i },
  { messageText: /What did you guys do to stop ?(thinking about)? (porn|fapping)/i },

  // GUIDANCE
  { titleText: /need some guidance/i },
  { titleText: /looking for some guidance/i },
  { titleText: /would like some help/i },
  { titleText: /need some advice from pro/i },

  { messageText: /tell me the secret/i },
  { messageText: /someone please guide me/i },
  { messageText: /what steps should I take\?/i },
  { messageText: /I would be grateful if someone could help me (on|in) this journey?/i },
  { messageText: /What tips do you ?(guys)? have to build (self discipline|self-discipline)\?/i },

  { ...both, titleText: /keep relapsing everyday/i },
  { ...both, titleText: /how to stop relapsing on day/i },

  // EXPECTATION
  { titleText: /(need|want) to (quit|stop) (masturbating|porn)/i },
  { titleText: /(It’s|its|It's|it is)  time to stop/i },
  { titleText: /what have I become?/i },
  { titleText: /trying to make this attempt count/i },
  { titleText: /need help before (It’s|its|It's|it is) too late/i },

  { titleText: /I (don’t|don't|dont) (wanna|want to) masturbate anymore/i },

  { ...both, titleText: /trying hard to stop/i },
  { ...both, titleText: /How can you ?(guys)? just stop/i },

  // UNVIABLE
  // || new RegExp(/if anyone can help/i).test(messageText)
  // || new RegExp(/urges keep coming/i).test(titleText)
  // || new RegExp(/needing advice/i).test(titleText)
];
