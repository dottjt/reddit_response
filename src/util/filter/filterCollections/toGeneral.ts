export const toGeneralAdvice = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/I need ?(.*) help/i).test(titleText)
  || new RegExp(/feel like shit/i).test(titleText)
  || new RegExp(/need some guidance/i).test(titleText)
  // || new RegExp(/needing advice/i).test(titleText)
  || new RegExp(/I really, really need help/i).test(titleText)
  || new RegExp(/how do I avoid relapsing/i).test(titleText)
  || new RegExp(/what other steps/i).test(titleText)
  || new RegExp(/I (give up|need support|can't stop)/i).test(titleText)
  || new RegExp(/It's impossible/i).test(titleText)
  || new RegExp(/trying for years/i).test(titleText)
  || new RegExp(/still can't do it/i).test(titleText)
  || new RegExp(/^please help me(\.|\?)?$/i).test(titleText)
  || new RegExp(/can't control help me please/i).test(titleText)
  || new RegExp(/It's time to stop/i).test(titleText)
  || new RegExp(/Beginner, need some advice/i).test(titleText)
  || new RegExp(/need some general advice/i).test(titleText)
  || new RegExp(/I want to stop masturbat/i).test(titleText)
  || new RegExp(/how to get past .* (week|days|day)/i).test(titleText)
  || new RegExp(/Trying Nofap .* years/i).test(titleText)
  || new RegExp(/I keep failing/i).test(titleText)
  || new RegExp(/need ?(some)? help with stopping/i).test(titleText)
  || new RegExp(/need help before (it|it is|it's) too late/i).test(titleText)
  || new RegExp(/starting over/i).test(titleText)
  || new RegExp(/need (nofap|no fap) tips/i).test(titleText)

  || new RegExp(/any tips on how to do it/i).test(messageText)
  || new RegExp(/I wanted to know any advice/i).test(messageText)

  // || new RegExp(/urges keep coming/i).test(titleText)

  // I am Trying Nofap From Last 1.5 years But I keep Failing, is there any Improvement i can do?
  // Advice
