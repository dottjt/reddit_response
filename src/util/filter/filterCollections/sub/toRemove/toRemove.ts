import { InitialRegExpCollection, both } from '../../../regex/regexUtil'
import { toRemoveMotivationVictoryLectureRegexArray } from './toRemoveMotivationVictoryLecture';
import { toRemoveCounter } from './toRemoveCounter';

// TODO This needs to be more specific not to include day 1 or day 0
export const toRemoveInitialDay = (titleText: string, flairText: string, messageText: string): boolean =>
  (
    new RegExp(/^(day|days|week) \d+(\.|\!*)?$/i).test(titleText)
    || new RegExp(/^(day|days|week) \d+ (passed|completed|done)$/i).test(titleText)
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

export const toRemoveInitialRegexArray: InitialRegExpCollection[] = [
  { titleText: /\".*\"/i },
  { titleText: /\“.*\“/i },

  // DAY MILESTONES
  { titleText: /180 day/i },

  // COUNTER
  ...toRemoveCounter,

  // CAN'T POST IMAGES
  { ...both, titleText: /CAN'T WE POST PICTURES ANYMORE/i },

  { ...both, titleText: /I need methods to keep count/i },
  { ...both, titleText: /How to get the number of days/i },

  { messageText: /get a tag with your streak/i },

  { ...both, titleText: /How does the day counter work/i },

  ...toRemoveMotivationVictoryLectureRegexArray,

  // RATIONALISATIONS
  { titleText: /(down side|downside)/i },
  { titleText: /relapsed intentionally/i },
  { titleText: /any evidence that/i },
  { titleText: /harmful effect/i },
  { titleText: /a study/i },
  { titleText: /future (son|daughter)/i },

  // SEXUAL / MEDICAL CONDITIONS
  { ...both, titleText: /(balls|pelvic|genital|testic)/i }, // ejaculation // too broad, maybe?
  { ...both, titleText: /hair line/i }, // erection // too broad // cancer
  { ...both, titleText: /(prostatitis)/i }, // erection // too broad // cancer
  { ...both, titleText: /cause cancer/i },
  { ...both, titleText: /(erectile|disfunction|erectile dysfunction)/i },
  { ...both, titleText: /(grip|syndrome)/i },
  { ...both, titleText: /acne/i },
  { ...both, titleText: /(skin|hair) condition/i }, // hair|skin|sperm|cum|precum // too broad
  { ...both, titleText: /medication/i },
  { ...both, titleText: /(premature)/i }, // ejaculation // too broad, maybe?
  { ...both, titleText: /(pied|peid|get it up|shrink)/i },
  { ...both, titleText: /(semen|urine|anal)/i },
  { ...both, titleText: /(pe induced)/i },
  { ...both, titleText: /blue balls/i },
  { ...both, titleText: /hocd/i },
  { ...both, titleText: /scientific/i },
  { ...both, titleText: /prostate cancer/i },
  { ...both, titleText: /hair loss/i },



  { ...both, titleText: /vasectomy/i },
  { ...both, titleText: /super sensitive/i },
  { ...both, titleText: /testosterone/i },
  { ...both, titleText: /baldness/i },
  { ...both, titleText: /weight loss/i },
  { ...both, titleText: /health problems/i },
  { ...both, titleText: /hypnotherapy/i },
  { ...both, titleText: /hypnosis/i },
  { ...both, titleText: /circumcised/i },
  { ...both, titleText: /take until ED goes away/i },
  { ...both, titleText: /inflammation/i },
  { ...both, titleText: /increase my size/i },
  { ...both, titleText: /sperm count/i },

  { titleText: /(boner|morning wood)/i },

  // SEX / WOMEN
  { titleText: /finally got a girlfriend/i },
  { titleText: /sexting/i },
  { titleText: /(virgin|virginity)/i },
  { titleText: /women attraction/i },
  { titleText: /chastity cage/i },
  { titleText: /got laid (1st|first) time/i },

  // POINTLESS QUESTIONS
  { titleText: /counts as relapse/i }, // look into this.
  { titleText: /why do you fap\?/i },
  { titleText: /Why quit porn\?/i },

  // IRRELEVANT TOPICS
  { titleText: /muslim/i },
  { titleText: /christian/i },
  { titleText: /song/i },
  { titleText: /Playlist/i },
  { titleText: /beast mode/i },
  { titleText: /physical pain/i },
  { titleText: /Erotica/i },
  { titleText: /gift/i },
  { titleText: /hunger/i },
  { titleText: /(insta|instagram)/i },
  { titleText: /illusion/i },
  { titleText: /monk/i },
  { titleText: /moral/i },
  { titleText: /(mum|dad)/i }, // look into this.
  { titleText: /(vivid|weird) dream/i }, // look into this.
  { titleText: /(tik tok|tiktok)/i },
  { titleText: /Youtube/i },
  { titleText: /(wim hof)/i }, // cold shower
  { titleText: /weed/i },
  { titleText: /imagination more vivid/i },
  { titleText: /receiving nudes/i },

  { ...both, titleText: /petition/i },
  { ...both, titleText: /sex before marriage/i },

  // DOUBTS
  { titleText: /placebo/i },

  // OTHER TOPICS
  { titleText: /is (it|nofap|no fap) worth it/i },
  { titleText: /libido/i },
  { titleText: /sex (during|on) (nofap|no fap|no-fap)/i },
  { titleText: /no urges yet/i },
  // { titleText: /(hard mode|hardmode)/i }, // this needs to be more specific
  { titleText: /cold shower/i },
  { titleText: /book recommendation/i },

  { ...both, titleText: /does having sex break (NoFap|no fap|no-fap)/i },
  { ...both, titleText: /I (don’t|dont|don't) see any benefits/i },
  { ...both, titleText: /negatives of masturbating/i },
  { ...both, titleText: /am I addicted to (porn|pron)/i },
  { ...both, titleText: /What does PMO stand for/i },
  { ...both, titleText: /^staying strong(\.)?$/i },
  { ...both, titleText: /human traff/i },

  // UNSORTED
  { titleText: /benefits till now/i },
  { titleText: /does not fap/i },
  { titleText: /download the app/i },
  { titleText: /interesting dream/i },
  { titleText: /just rejected a ?(hot)? girl/i },
  { titleText: /remember these \d+/i },
  { titleText: /really helpful app/i },
  { titleText: /too nervous to get hard/i },
  { titleText: /App for Quitting Porn/i },
  { titleText: /message to myself/i },

  { ...both, titleText: /Completed 90 days/i },

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

export const toRemoveFinalRegexArray: InitialRegExpCollection[] = [
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
