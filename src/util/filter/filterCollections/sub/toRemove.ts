import { RegexFilters, both } from '../../regexUtil'

export const toRemoveInitialDay = (titleText: string, flairText: string, messageText: string): boolean =>
  (
    new RegExp(/^(day|days|week) \d+(\.|\!*)?$/i).test(titleText)
    || new RegExp(/^(day|days|week) \d+ (passed|completed|done)/i).test(titleText)
    || new RegExp(/^\d+ (day|days|week) (baby|bby)/i).test(titleText)
    || new RegExp(/profile/i).test(titleText)
    || new RegExp(/^day \d+ clean/i).test(titleText)
    || new RegExp(/^d\+th (day|week)\.?$/i).test(titleText)
  ) &&
  (
    new RegExp(/^finally$/i).test(messageText)
    || new RegExp(/^day \d+ clean/i).test(titleText)
    || new RegExp(/^(day|days|week) \d+(\.|\!*)?$/i).test(messageText)
    || new RegExp(/^(day|days|week) \d+ (passed|completed|done)/i).test(titleText)
    || new RegExp(/^\d+ (day|days|week) (baby|bby)/i).test(titleText)
    || new RegExp(/had no urges/i).test(messageText)
    || new RegExp(/sparta/i).test(messageText)
    || new RegExp(/\./i).test(messageText)
    || new RegExp(/^d\+th (day|week)\.?$/i).test(titleText)
  )

// TODO Fix this up

export const toRemoveInitialRegexArray: RegexFilters[] = [
  // FLAIR
  { flairText: /Success Story/i },

  // DAY MILESTONES
  { titleText: /180 day/i },

  // COUNTER
  { titleText: /profile/i },
  { titleText: /(days|day) flair/i },
  { titleText: /name tag/i },
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
  { titleText: /I need methods to keep count/i },

  { messageText: /get a tag with your streak/i },

  // LECTURE
  { titleText: /(NoFap|no fap|no-fap) taught me/i },
  { titleText: /\d+ (NoFap|no fap|no-fap) benefits/i },
  { titleText: /a piece of advice/i },
  { titleText: /read this if you/i },
  { titleText: /pro tip for (NoFap|no fap|no-fap)/i },
  { titleText: /for those who relapse/i },
  { titleText: /to those struggling/i },
  { titleText: /one habit that helped me/i },
  { titleText: /the key is/i },
  { titleText: /my benefits/i },
  { titleText: /(a reminder|remember this)/i },
  { titleText: /strange benefit/i },
  { titleText: /found a method/i },
  { titleText: /the key to (everything|(NoFap|no fap|no-fap))/i },
  { titleText: /methods that you might like to/i },

  // VICTORY
  { titleText: /overcame my worst urge/i },
  { titleText: /I am proud of myself/i },
  { titleText: /Instead of (masturbating|PMO) i/i },
  { titleText: /finally crossed a/i },
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
  { titleText: /do not relapse/i },
  { titleText: /^keep going/i },
  { titleText: /Our Greatest Fear Is/i },

  { ...both, titleText: /greatest nofap inspiration/i },

  // RATIONALISATIONS
  { titleText: /(down side|downside)/i },
  { titleText: /relapsed intentionally/i },
  { titleText: /any evidence that/i },
  { titleText: /harmful effect/i },
  { titleText: /a study/i },
  { titleText: /future (son|daughter)/i },

  // SEXUAL / MEDICAL CONDITIONS
  { ...both, titleText: /(balls|penis|pelvic|genital|testic)/i },
  { ...both, titleText: /(cancer|prostatitis|erection)/i },
  { ...both, titleText: /(erectile|disfunction|erectile dysfunction)/i },
  { ...both, titleText: /(grip|syndrome)/i },
  { ...both, titleText: /(hair|skin|acne|sperm)/i },
  { ...both, titleText: /medication/i },
  { ...both, titleText: /(premature|ejaculation|precum|cum)/i },
  { ...both, titleText: /(pied|peid|get it up|shrink)/i },
  { ...both, titleText: /(semen|urine|anal)/i },
  { ...both, titleText: /scientific/i },
  { ...both, titleText: /super sensitive/i },
  { ...both, titleText: /testosterone/i },
  { ...both, titleText: /baldness/i },
  { ...both, titleText: /weight loss/i },
  { ...both, titleText: /health problems/i },
  { ...both, titleText: /hypnotherapy/i },
  { ...both, titleText: /hypnosis/i },
  { ...both, titleText: /circumcised/i },

  { titleText: /(boner|morning wood)/i },

  // SEX / WOMEN
  { titleText: /finally got a girlfriend/i },
  { titleText: /sexting/i },
  { titleText: /(virgin|virginity)/i },
  { titleText: /women attraction/i },
  { titleText: /got laid (1st|first) time/i },

  // POINTLESS QUESTIONS
  { titleText: /counts as relapse/i }, // look into this.
  { titleText: /why do you fap\?/i },

  // IRRELEVANT TOPICS
  { titleText: /beast mode/i },
  { titleText: /gift/i },
  { titleText: /hunger/i },
  { titleText: /(insta|instagram)/i },
  { titleText: /illusion/i },
  { titleText: /monk/i },
  { titleText: /moral/i },
  { titleText: /(mum|dad)/i }, // look into this.
  { titleText: /(vivid|weird) dream/i }, // look into this.
  { titleText: /(tik tok|tiktok)/i },
  { titleText: /(wim hof)/i }, // cold shower
  { titleText: /weed/i },
  
  { ...both, titleText: /sex before marriage/i },

  // DOUBTS
  { titleText: /placebo/i },

  // OTHER TOPICS
  { titleText: /is it worth it/i },
  { titleText: /libido/i },
  { titleText: /sex on (nofap|no fap|no-fap)/i },
  { titleText: /no urges yet/i },
  { titleText: /(hard mode|hardmode)/i },

  { ...both, titleText: /negatives of masturbating/i },
  { ...both, titleText: /am I addicted to (porn|pron)/i },
  { ...both, titleText: /What does PMO stand for/i },

  // UNSORTED
  { titleText: /benefits till now/i },
  { titleText: /does not fap/i },
  { titleText: /download the app/i },
  { titleText: /interesting dream/i },
  { titleText: /just rejected a ?(hot)? girl/i },
  { titleText: /remember these \d+/i },
  { titleText: /really helpful app/i },

  // NOT WORKING
  // { titleText: /God/ }, // doesn't work for like oh God
  // || new RegExp(/girlfriend/i).test(titleText) // look into this
  // || new RegExp(/app/i).test(titleText) // look into (doesn't work because porn blocking app )
  // || new RegExp(/sex/i).test(titleText) // look into this (can't do this because of sexual urges)
  // || new RegExp(/trying to give up/i).test(titleText) // not sure about this.
  // || new RegExp(/should I go/i).test(titleText)
  // || new RegExp(/(going|growing) strong/i).test(titleText)
  // || new RegExp(/(don't|dont) give up/i).test(titleText)
  // || new RegExp(/the ?(.*) benefit ?(.*) nofap/i).test(titleText)
  // || new RegExp(/relapse\?/i).test(titleText) // look into this.
  // || new RegExp(/transformation/i).test(titleText) // look into this.
  // || new RegExp(/longest .* streak/i).test(titleText) // look into this.
  // || new RegExp(/confessed .* to my/i).test(titleText) // look into this.
  // || new RegExp(/update from/i).test(titleText)
  // || new RegExp(/king /i).test(titleText) // because jerking
  // || new RegExp(/haven't relapsed/i).test(titleText)
  // || new RegExp(/is ?(.*) worth/i).test(titleText)
  // || new RegExp(/come this far/i).test(titleText)
  // || new RegExp(/breakthrough/i).test(titleText)
  // || new RegExp(/(don't|dont) fall/i).test(titleText)
  // || new RegExp(/(week|days) strong/i).test(titleText)
  // || new RegExp(/passed (day|week)/i).test(titleText)
  // || new RegExp(/become the/i).test(titleText)
  // || new RegExp(/replaced PMO/i).test(titleText)
  // || new RegExp(/longest streak/i).test(titleText) // look into
  // || new RegExp(/a theory/i).test(titleText)
  // || new RegExp(/today i reached/i).test(titleText)
  // || new RegExp(/almost there/i).test(titleText)
  // || new RegExp(/(weeks|days) porn free/i).test(titleText)
  // || new RegExp(/learnt/i).test(titleText)
  // || new RegExp(/(women|girl)/i).test(titleText) // can't because there are good cases for this.

  // tricks ... helped me

  // news/newspaper

  // 10th day done
  //
  // I almost caved
  // NoFap helps with my Breakup
  // first day after relapse

  // no urges
  // is this normal?

  // it's okay to fap
  // picture/quote
  // libdo
  // days complete / d


  // || new RegExp(/("|“|')/i).test(titleText) // never do this, ever. breaks everything
  // edgeCASES
    // What does your sex life looks like after you successfully quit porn?
    // Deleted: Motivate Me - I’ve been heavily masturbating since my early teens and have smoked weed regularly for the past year...
    // userscript.html?name=Reddit%20NoFap%20New%20Script.user.js&id=cd407b2d-ccbc-47ff-8aa0-1e9a382be0ab:16 Deleted: Question - Can’t focus on task at hand due to sexual urges. What are the options?
    // Deleted: undefined - guys i am 4 days through and i feel the urge to fap more than ever. any tips other than taking cold showers???

];

export const toRemoveFinalRegexArray: RegexFilters[] = [
  { titleText: /^(day|week) \d+ (complete|done|free|strong)/i },
  { titleText: /\d+ (week|day).* (complete|done|free|strong)/i },
  { titleText: /(1st|first) (week|month) (complete|done|free|strong)/i },
  { titleText: /(1st|first) \d+ day streak/i },
  { titleText: /mission \.*? accomplished/i },
  { titleText: /first time reaching /i },
  { titleText: /completed \d+ (days|weeks) today/i },

  { ...both, titleText: /celebrating (1|one) (week|month)/i },
  { ...both, titleText: /90 days (clean|complete|done)/i },

  { messageText: /Officially hit a month of nofap/i },

  // UNSURE
  // || new RegExp(/^\d+th day/i).test(titleText)
  // || new RegExp(/beginning of week/i).test(titleText) // look into this
  // || new RegExp(/dreams/i).test(titleText) // look into this
  // || new RegExp(/^\d+ days$/i).test(titleText)
  // || new RegExp(/^\d+ (weeks|week)$/i).test(titleText)
  // || new RegExp(/(one|two|three|four|five) weeks in/i).test(titleText)
  // || new RegExp(/^\d+ (week|weeks) in/i).test(titleText)

  // || new RegExp(/got to 90 days/i).test(titleText)

  // month free
  // 30 day check-in
  // one week.
  // 100 days (can mean in the sense of challenge, so no. I need to combine with flairs such as victory to ensure that it has the right context.)
  // month

];
