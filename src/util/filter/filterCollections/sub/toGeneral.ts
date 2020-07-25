import { RegexFilters } from '../../regexUtil';

export const toGeneralAdviceRegexArray: RegexFilters[] = [
  { titleText: /I need ?(.*) help/i },

  { titleText: /feel like shit/i },
  { titleText: /^help me$/i },
  { titleText: /need some guidance/i },
  { titleText: /I really, really need help/i },
  { titleText: /I don't know what to do/i },
  { titleText: /I need to stop/i },
  { titleText: /how do I avoid relapsing/i },
  { titleText: /what other steps/i },
  { titleText: /best way to stop masturbating\?/i },
  { titleText: /I (give up|need support|can't stop)/i },
  { titleText: /need some advice from pro/i },
  { titleText: /I have a serious addiction to masturbation/i },
  { titleText: /I need some serious motivation/i },
  { titleText: /could use some advice/i },
  { titleText: /how can I survive this journey/i },
  { titleText: /.* any tips\?$/i },

  // TOO HARD
  { titleText: /shit is getting rough/i },
  { titleText: /It's impossible/i },
  { titleText: /trying for years/i },
  { titleText: /falling badly/i },
  { titleText: /I've failed countless/i },

  // LIKE HELP
  { titleText: /would like some help/i },
  { titleText: /how can I stop/i },
  { titleText: /^Please help/i },
  { titleText: /^Need help/i },
  { titleText: /looking for some guidance/i },

  { messageText: /any improvements are welcome/i },
  { messageText: /tell me the secret/i },

  // CAN'T STOP
  { titleText: /I just can’t stop myself/i },
  { titleText: /keep relapsing everyday/i },
  { titleText: /^tips\?$/i },
  { titleText: /still can't do it/i },
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

  { messageText: /any tips on how to do it/i },
  { messageText: /I wanted to know any advice/i },
  { messageText: /How do I stop\?/i },

  { titleText: /^(no fap|nofap|no-fap)(\.)?$/i, messageText: /(Any)? (help|advice|tips)\?/i }

  // MESSAGE
  // if anybody could help or give me some pointers it would be greatly appreciated
  // what can I do to change.
  // any words of encouragement in a time of need?
  // Alright, I've been trying hard to stop it for 3 years and sometimes I do edging or proper masturbation. Please help out. I wanna stop and I can't find any distraction
  // Can anyone help me changing my habit?
  // Any advice on how to start?

  // UNSURE
  // || new RegExp(/if anyone can help/i).test(messageText)
  // || new RegExp(/urges keep coming/i).test(titleText)
  // || new RegExp(/needing advice/i).test(titleText)


  // I am Trying Nofap From Last 1.5 years But I keep Failing, is there any Improvement i can do?
  // Advice

  // message
];
