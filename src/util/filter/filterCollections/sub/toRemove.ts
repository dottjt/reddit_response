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

// TODO
// export const toRemoveInitialMessage = (titleText: string, flairText: string, messageText: string): boolean =>
//   new RegExp(/profile/i).test(messageText)
// show you how I did it

export const toRemoveInitial = (titleText: string, flairText: string, messageText: string): boolean =>
  // FLAIR
  flairText === 'Success Story'

  // COUNTER
  || new RegExp(/profile/i).test(titleText)
  || new RegExp(/name tag/i).test(titleText)
  || new RegExp(/(Don't|Don't|dont) mind me/i).test(titleText)
  || new RegExp(/journal entry/i).test(titleText) // look into this.
  || new RegExp(/diary/i).test(titleText)
  || new RegExp(/libido/i).test(titleText)
  || new RegExp(/(weekly|daily) journal/i).test(titleText)
  || new RegExp(/(tracker|counting|counter)/i).test(titleText)
  || new RegExp(/checking my day count/i).test(titleText)
  || new RegExp(/accountability post/i).test(titleText)

  // LECTURE
  || new RegExp(/Nofap taught me/i).test(titleText)
  || new RegExp(/a piece of advice/i).test(titleText)
  || new RegExp(/read this if you/i).test(titleText)
  || new RegExp(/pro tip for nofap/i).test(titleText)
  || new RegExp(/for those who relapse/i).test(titleText)
  || new RegExp(/to those struggling/i).test(titleText)
  || new RegExp(/one habit that helped me/i).test(titleText)
  || new RegExp(/the key is/i).test(titleText)
  || new RegExp(/my benefits/i).test(titleText)
  || new RegExp(/(a reminder|remember this)/i).test(titleText)
  || new RegExp(/strange benefit/i).test(titleText)
  || new RegExp(/found a method/i).test(titleText)
  || new RegExp(/the key to (everything|NoFap)/i).test(titleText)

  // MOTIVATION
  || new RegExp(/motivational thought/i).test(titleText)
  || new RegExp(/do not relapse/i).test(titleText)

  // VICTORY
  || new RegExp(/overcame my worst urge/i).test(titleText)
  || new RegExp(/(0|zero) urges to fap/i).test(titleText)
  || new RegExp(/I feel amazing/i).test(titleText)
  || new RegExp(/benefits ?(are)? becoming apparent/i).test(titleText)
  || new RegExp(/(didnt|didn't) relapse today/i).test(titleText)
  || new RegExp(/i made it/i).test(titleText)
  || new RegExp(/went for first .* in (weeks|months)/i).test(titleText)
  || new RegExp(/(celebrate)/i).test(titleText)
  || new RegExp(/found something that/i).test(titleText)
  || new RegExp(/streak for the first time/i).test(titleText)
  || new RegExp(/double digit/i).test(titleText)
  || new RegExp(/still going strong/i).test(titleText)
  || new RegExp(/not bragging/i).test(titleText)
  || new RegExp(/just completed a/i).test(titleText)
  || new RegExp(/accomplishments on (nofap|no fap)/i).test(titleText)
  || new RegExp(/achieved my goal/i).test(titleText)
  || new RegExp(/longest streak yet/i).test(titleText)
  || new RegExp(/(previous record|milestone)/i).test(titleText)
  || new RegExp(/small success/i).test(titleText)
  || new RegExp(/finally made it to (day|week)/i).test(titleText)
  || new RegExp(/(1st|first) (successful|sucessful|succesful|sucesful) (week|month)/i).test(titleText)

  // MOTIVATION
  || new RegExp(/(we will all make it|we will make it|you will make it|you can do it)/i).test(titleText)
  || new RegExp(/^(Don't|Don't|dont) give up$/i).test(titleText)
  || new RegExp(/love you guys/i).test(titleText)
  || new RegExp(/(nofap|no fap) works/i).test(titleText)

  // RATIONALISATIONS
  || new RegExp(/(down side|downside)/i).test(titleText)
  || new RegExp(/relapsed intentionally/i).test(titleText)
  || new RegExp(/any evidence that/i).test(titleText)
  || new RegExp(/harmful effect/i).test(titleText)
  || new RegExp(/a study/i).test(titleText)

  // SEXUAL / MEDICAL CONDITIONS
  || new RegExp(/(balls|penis|pelvic|genital|testic)/i).test(titleText)
  || new RegExp(/(boner|morning wood)/i).test(titleText)
  || new RegExp(/(cancer|prostatitis|erection)/i).test(titleText)
  || new RegExp(/(erectile|disfunction|erectile dysfunction)/i).test(titleText)
  || new RegExp(/(grip|syndrome)/i).test(titleText)
  || new RegExp(/(hair|skin|acne|sperm)/i).test(titleText)
  || new RegExp(/medication/i).test(titleText)
  || new RegExp(/(premature|ejaculation|precum|cum)/i).test(titleText)
  || new RegExp(/(pied|peid|get it up|shrink)/i).test(titleText)
  || new RegExp(/(semen|urine|anal)/i).test(titleText)
  || new RegExp(/scientific/i).test(titleText)
  || new RegExp(/super sensitive/i).test(titleText)
  || new RegExp(/testosterone/i).test(titleText)

  // SEX / WOMEN
  || new RegExp(/finally got a girlfriend/i).test(titleText)
  || new RegExp(/sexting/i).test(titleText)
  || new RegExp(/(virgin|virginity)/i).test(titleText)

  // POINTLESS QUESTIONS
  || new RegExp(/counts as relapse/i).test(titleText) // look into this.
  || new RegExp(/why do you fap\?/i).test(titleText)

  // IRRELEVANT TOPICS
  || new RegExp(/beast mode/i).test(titleText)
  || new RegExp(/gift/i).test(titleText)
  || new RegExp(/hunger/i).test(titleText)
  || new RegExp(/(insta|instagram)/i).test(titleText)
  || new RegExp(/illusion/i).test(titleText)
  || new RegExp(/monk/i).test(titleText)
  || new RegExp(/moral/i).test(titleText)
  || new RegExp(/(mum|dad)/i).test(titleText) // look into this.
  || new RegExp(/(vivid|weird) dream/i).test(titleText) // look into this.
  || new RegExp(/(tik tok|tiktok)/i).test(titleText)
  || new RegExp(/(wim hof)/i).test(titleText) // cold shower
  || new RegExp(/weed/i).test(titleText)

  // DOUBTS
  || new RegExp(/placebo/i).test(titleText)

  // UNSORTED
  || new RegExp(/benefits till now/i).test(titleText)
  || new RegExp(/does not fap/i).test(titleText)
  || new RegExp(/download the app/i).test(titleText)
  || new RegExp(/interesting dream/i).test(titleText)
  || new RegExp(/just rejected a ?(hot)? girl/i).test(titleText)
  || new RegExp(/remember these \d+/i).test(titleText)

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

export const toRemoveFinal = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/^(day|week) \d+ (complete|done|free|strong)/i).test(titleText)
  || new RegExp(/\d+ (week|day).* (complete|done|free|strong)/i).test(titleText)
  || new RegExp(/(1st|first) (week|month) (complete|done|free|strong)/i).test(titleText)
  || new RegExp(/(1st|first) \d+ day streak/i).test(titleText)
  // || new RegExp(/^\d+th day/i).test(titleText)
  // || new RegExp(/beginning of week/i).test(titleText) // look into this
  // || new RegExp(/dreams/i).test(titleText) // look into this
  // || new RegExp(/^\d+ days$/i).test(titleText)
  // || new RegExp(/^\d+ (weeks|week)$/i).test(titleText)
  // || new RegExp(/(one|two|three|four|five) weeks in/i).test(titleText)
  // || new RegExp(/^\d+ (week|weeks) in/i).test(titleText)
  || new RegExp(/mission \.*? accomplished/i).test(titleText)
  || new RegExp(/first time reaching /i).test(titleText)
  || new RegExp(/completed \d+ (days|weeks) today/i).test(titleText)
  || new RegExp(/celebrating (1|one) (week|month)/i).test(titleText)

  // || new RegExp(/got to 90 days/i).test(titleText)

  // month free
  // 30 day check-in
  // one week.
  // 100 days (can mean in the sense of challenge, so no. I need to combine with flairs such as victory to ensure that it has the right context.)
  // month