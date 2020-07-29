import { InitialRegExpCollection, both } from '../../../regex/regexUtil';

export const toRemoveMotivationVictoryLectureRegexArray: InitialRegExpCollection[] = [
  // LECTURE
  { titleText: /my benefits/i },
  { titleText: /read this if you/i },
  { titleText: /a piece of advice/i },

  { ...both, titleText: /once a wise man/i },
  { ...both, titleText: /(NoFap|no fap|no-fap) taught me/i },
  { ...both, titleText: /\d+ (NoFap|no fap|no-fap) benefits/i },
  { ...both, titleText: /pro tip for (NoFap|no fap|no-fap)/i },
  { ...both, titleText: /for those who relapse/i },
  { ...both, titleText: /to those struggling/i },
  { ...both, titleText: /one habit that helped me/i },
  { ...both, titleText: /HERE ARE THE TRUE BENEFITS/i },
  { ...both, titleText: /the key is/i },
  { ...both, titleText: /(a ?(friendly)? reminder|remember this)/i },
  { ...both, titleText: /strange benefit/i },
  { ...both, titleText: /found a method/i },
  { ...both, titleText: /the key to (everything|(NoFap|no fap|no-fap))/i },
  { ...both, titleText: /methods that you might like to/i },
  { ...both, titleText: /Tip that might help you/i },

  // VICTORY
  { titleText: /SUPERPOWERS ARE REAL/i },
  { titleText: /overcame my worst urge/i },
  { titleText: /I am proud of myself/i },
  { titleText: /Instead of (masturbating|PMO) i/i },
  { titleText: /finally crossed a/i },
  { titleText: /years without porn/i },
  { titleText: /(0|zero) urges to fap/i },
  { titleText: /I feel amazing/i },
  { titleText: /benefits ?(are)? becoming apparent/i },
  { titleText: /(didnt|didn't) relapse today/i },
  { titleText: /i made it/i },
  { titleText: /went for first .* in (weeks|months)/i },
  { titleText: /(celebrate)/i },
  { titleText: /found something that/i },
  { titleText: /streak for the first time/i },
  { titleText: /double digit/i },
  { titleText: /so proud of myself/i },
  { titleText: /still going strong/i },
  { titleText: /not bragging/i },
  { titleText: /just completed a/i },
  { titleText: /accomplishments on (NoFap|no fap|no-fap)/i },
  { titleText: /achieved my goal/i },
  { titleText: /finally reached \d+ days/i },
  { titleText: /longest streak yet/i },
  { titleText: /(previous record|milestone)/i },
  { titleText: /small success/i },
  { titleText: /a month of not fapping/i },
  { titleText: /finally made it to (day|week)/i },
  { titleText: /feels so .* good/i },
  { titleText: /reached day \d+ for the (first time|firsttime)/i },
  { titleText: /(1st|first) (successful|sucessful|succesful|sucesful) (week|month)/i },
  { titleText: /\d+ (days|weeks|months|years) free$/i },
  { titleText: /On my way to triumph/i },
  { titleText: /finally hit .* (weeks|days) again/i },

  { ...both, titleText: /pretty easy so far/i },

  // MOTIVATION
  { titleText: /(we will all make it|we will make it|you will make it|you can do it)/i },
  { titleText: /(Don't|Don't|dont) give up$/i },
  { titleText: /love you guys/i },
  { titleText: /(NoFap|no fap|no-fap) works/i },
  { titleText: /^Instead of watching porn/i },
  { titleText: /(NoFap|no fap|no-fap) is changing my life/i },
  { titleText: /(its|It's|It’s) never too late/i },
  { titleText: /quote/i },
  { titleText: /motivational thought/i },
  { titleText: /motivational speaker/i },
  { titleText: /(NoFap|no fap|no-fap) is ?(really)? worth it/i },
  { titleText: /do not relapse/i },
  { titleText: /^keep going/i },
  { titleText: /Our Greatest Fear Is/i },
  { titleText: /Awesome benefits/i },

  { ...both, titleText: /a poem/i },
  { ...both, titleText: /(I'm|I’m|I am|im|i m) so proud of (you|us)/i },
  { ...both, titleText: /greatest (NoFap|no fap|no-fap) inspiration/i },
];
