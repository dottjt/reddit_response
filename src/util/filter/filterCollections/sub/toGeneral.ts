import { RegexFilters } from '../../regexUtil';

export const toGeneralAdviceRegexArray: RegexFilters[] = [
  { titleText: /I need ?(.*) help/i },

  { titleText: /feel like shit/i },
  { titleText: /need some guidance/i },
  { titleText: /I need to stop/i },
  { titleText: /how do I avoid relapsing/i },
  { titleText: /what other steps/i },
  { titleText: /I have a serious addiction to masturbation/i },

  // LOST
  { titleText: /I don't know what to do/i },

  // MOTIVATION
  { titleText: /I need some serious motivation/i },

  // TIPS
  { titleText: /^tips\?$/i },
  { titleText: /.* any tips\?$/i },
  { titleText: /^Need advice$/i },

  // HOW TO
  { titleText: /^how to quit(\?)?$/i },
  { titleText: /best way to stop masturbating\?/i },
  { titleText: /how can I survive this journey/i },

  // ADVICE
  { titleText: /could use some advice/i },
  { titleText: /need some advice from pro/i },

  // TOO HARD
  { titleText: /shit is getting rough/i },
  { titleText: /It's impossible/i },
  { titleText: /trying for years/i },
  { titleText: /falling badly/i },
  { titleText: /addicted like hell/i },
  { titleText: /I've failed countless/i },

  // HELP
  { titleText: /would like some help/i },
  { titleText: /how can I stop/i },
  { titleText: /^Please help/i },
  { titleText: /^Need help/i },
  { titleText: /looking for some guidance/i },
  { titleText: /need help and advice/i },
  { titleText: /I really, really need help/i },
  { titleText: /^help me$/i },


  { messageText: /any improvements are welcome/i },
  { messageText: /tell me the secret/i },

  // CAN'T STOP
  { titleText: /I just can’t stop myself/i },
  { titleText: /I (give up|need support|can't stop)/i },

  // RELAPSE
  { titleText: /keep relapsing everyday/i },
  { titleText: /I feel like relapsing/i },

  { titleText: /still can't do it/i },
  { titleText: /what have I become?/i },
  { titleText: /How not to get into an Addiction/i },
  { titleText: /trying to make this attempt count/i },
  { titleText: /^please help me(\.|\?)?$/i },
  { titleText: /can't control help me please/i },
  { titleText: /It's time to stop/i },
  { titleText: /I (dont|don't) know what to do/i },
  { titleText: /Beginner, need some advice/i },
  { titleText: /need some general advice/i },
  { titleText: /I want to stop masturbat/i },
  { titleText: /no (masterbation|masturbation) is hard for me/i },
  { titleText: /how to get past .* (week|days|day)/i },
  { titleText: /Trying Nofap .* years/i },
  { titleText: /I keep failing/i },
  { titleText: /need ?(some)? help with stopping/i },
  { titleText: /need help before (it|it is|it's) too late/i },
  { titleText: /starting over/i },
  { titleText: /need (nofap|no fap) tips/i },
  { titleText: /I need some ?(more)? inspiration/i },
  { titleText: /trying hard to stop masturbation/i },
  { titleText: /things are getting worse/i },
  { titleText: /any tips to stop (fapping|mast)/i },
  { titleText: /(cant|can't|can’t) make it more than/i },
  { titleText: /help me out from relapsing/i },
  { titleText: /I want to quit porn/i },
  { titleText: /I (don't|dont) (wanna|want to) masturbate anymore/i },

  // * MESSAGES *
  { messageText: /any tips on how to do it/i },
  { messageText: /I wanted to know any advice/i },
  { messageText: /How do I stop\?/i },
  { messageText: /anyone plzzzz/i },
  { messageText: /Any advice is ?(much)? appreci/i },
  { messageText: /anybody could help/i },
  { messageText: /give me some pointers/i },
  { messageText: /what can I do to change/i },
  { messageText: /any words of encouragement/i },
  { messageText: /been trying hard to stop .* for/i },
  { messageText: /Can anyone help me/i },
  { messageText: /looking for something that will make me stop/i },
  { messageText: /I would appreciate (any|all the) advice/i },


  { titleText: /^(no fap|nofap|no-fap)(\.)?$/i, messageText: /(Any)? (help|advice|tips)\?/i }

  // MESSAGE

  // UNSURE
  // || new RegExp(/if anyone can help/i).test(messageText)
  // || new RegExp(/urges keep coming/i).test(titleText)
  // || new RegExp(/needing advice/i).test(titleText)


  // I am Trying Nofap From Last 1.5 years But I keep Failing, is there any Improvement i can do?
  // Advice

  // message
];
