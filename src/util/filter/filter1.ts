
export const toRemoveInitialDay = (titleText: string, flairText: string, messageText: string): boolean =>
  (
    new RegExp(/^(day|days|week) \d+(\.|\!*)?$/i).test(titleText)
    || new RegExp(/^(day|days|week) \d+ (passed|completed|done)/i).test(titleText)
    || new RegExp(/^\d+ (day|days|week) (baby|bby)/i).test(titleText)
    || new RegExp(/profile/i).test(titleText)
    || new RegExp(/^day \d+ clean/i).test(titleText)
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
  )

// TODO
// export const toRemoveInitialMessage = (titleText: string, flairText: string, messageText: string): boolean =>
//   new RegExp(/profile/i).test(messageText)
// show you how I did it

export const toRemoveInitial = (titleText: string, flairText: string): boolean =>
  flairText === 'Success Story'
  || new RegExp(/profile/i).test(titleText)
    // || new RegExp(/("|“|')/i).test(titleText) // never do this, ever. breaks everything
    || new RegExp(/gift/i).test(titleText)
    || new RegExp(/beast mode/i).test(titleText)
    || new RegExp(/(down side|downside)/i).test(titleText)
    || new RegExp(/a piece of advice/i).test(titleText)
    || new RegExp(/for those who relapse/i).test(titleText)
    || new RegExp(/i made it/i).test(titleText)
    || new RegExp(/download the app/i).test(titleText)
    || new RegExp(/(celebrate)/i).test(titleText)
    || new RegExp(/why do you fap\?/i).test(titleText)
    || new RegExp(/(boner|morning wood)/i).test(titleText)
    || new RegExp(/double digit/i).test(titleText)
    || new RegExp(/diary/i).test(titleText)
    || new RegExp(/(tik tok|tiktok)/i).test(titleText)
    || new RegExp(/moral/i).test(titleText)
    || new RegExp(/strange benefit/i).test(titleText)
    || new RegExp(/not bragging/i).test(titleText)
    || new RegExp(/(semen|urine|anal)/i).test(titleText)
    || new RegExp(/motivational thought/i).test(titleText)
    || new RegExp(/(a reminder|remember this)/i).test(titleText)
    || new RegExp(/(Don't|Don't|dont) mind me/i).test(titleText)
    || new RegExp(/(cancer|prostatitis|erection)/i).test(titleText)
    || new RegExp(/love you guys/i).test(titleText)
    || new RegExp(/a study/i).test(titleText)
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

    || new RegExp(/^(Don't|Don't|dont) give up$/i).test(titleText)
    || new RegExp(/relapsed intentionally/i).test(titleText)
    || new RegExp(/found something that/i).test(titleText)
    // || new RegExp(/(women|girl)/i).test(titleText) // can't because there are good cases for this.
    || new RegExp(/(wim hof)/i).test(titleText) // cold shower
    || new RegExp(/(premature|ejaculation|precum|cum)/i).test(titleText)
    || new RegExp(/achieved my goal/i).test(titleText)
    || new RegExp(/(insta|instagram)/i).test(titleText)
    || new RegExp(/hunger/i).test(titleText)
    // || new RegExp(/king /i).test(titleText) // because jerking
    || new RegExp(/(previous record|milestone)/i).test(titleText)
    || new RegExp(/(pied|peid|in bed|get it up|shrink)/i).test(titleText)
    || new RegExp(/(hair|skin|acne|sperm)/i).test(titleText)
    || new RegExp(/the key is/i).test(titleText)
    || new RegExp(/the key to (everything|NoFap)/i).test(titleText)
    || new RegExp(/monk/i).test(titleText)
    || new RegExp(/(grip|syndrome)/i).test(titleText)
    || new RegExp(/(virgin|virginity)/i).test(titleText)
    // || new RegExp(/haven't relapsed/i).test(titleText)
    // || new RegExp(/is ?(.*) worth/i).test(titleText)
    // || new RegExp(/come this far/i).test(titleText)
    // || new RegExp(/breakthrough/i).test(titleText)
    // || new RegExp(/(don't|dont) fall/i).test(titleText)
    || new RegExp(/read this if you/i).test(titleText)
    || new RegExp(/weed/i).test(titleText)
    || new RegExp(/(weekly|daily) journal/i).test(titleText)
    || new RegExp(/(tracker|counting|counter)/i).test(titleText)
    || new RegExp(/(erectile|disfunction|erectile dysfunction)/i).test(titleText)
    || new RegExp(/my benefits/i).test(titleText)
    || new RegExp(/placebo/i).test(titleText)
    || new RegExp(/(balls|penis|pelvic|genital|testic)/i).test(titleText)
    || new RegExp(/accountability post/i).test(titleText)
    || new RegExp(/illusion/i).test(titleText)
    || new RegExp(/counts as relapse/i).test(titleText) // look into this.
    // || new RegExp(/app/i).test(titleText) // look into (doesn't work because porn blocking app )
    // || new RegExp(/sex/i).test(titleText) // look into this (can't do this because of sexual urges)
    || new RegExp(/journal entry/i).test(titleText) // look into this.
    || new RegExp(/(mum|dad)/i).test(titleText) // look into this.
    || new RegExp(/benefits till now/i).test(titleText)
    || new RegExp(/harmful effect/i).test(titleText)
    || new RegExp(/interesting dream/i).test(titleText)
    || new RegExp(/(1st|first) (successful|sucessful|succesful|sucesful) (week|month)/i).test(titleText)
    // || new RegExp(/girlfriend/i).test(titleText) // look into this

    // || new RegExp(/should I go/i).test(titleText)
    // || new RegExp(/(going|growing) strong/i).test(titleText)
    // || new RegExp(/(don't|dont) give up/i).test(titleText)
    // || new RegExp(/the ?(.*) benefit ?(.*) nofap/i).test(titleText)
    // || new RegExp(/relapse\?/i).test(titleText) // look into this.
    // || new RegExp(/transformation/i).test(titleText) // look into this.
    // || new RegExp(/longest .* streak/i).test(titleText) // look into this.
    // || new RegExp(/confessed .* to my/i).test(titleText) // look into this.
    // || new RegExp(/pro tip/i).test(titleText)
    // || new RegExp(/update from/i).test(titleText)

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
    // the key is to
    // harmful effects

    // edgeCASES
      // What does your sex life looks like after you successfully quit porn?
      // Deleted: Motivate Me - I’ve been heavily masturbating since my early teens and have smoked weed regularly for the past year...
      // userscript.html?name=Reddit%20NoFap%20New%20Script.user.js&id=cd407b2d-ccbc-47ff-8aa0-1e9a382be0ab:16 Deleted: Question - Can’t focus on task at hand due to sexual urges. What are the options?
      // Deleted: undefined - guys i am 4 days through and i feel the urge to fap more than ever. any tips other than taking cold showers???


export const toRemoveFinal = (titleText: string, flairText: string): boolean =>
  new RegExp(/^(day|week) \d+ (complete|done|free)/i).test(titleText)
  || new RegExp(/\d+ (week|day).* (complete|done|free)/i).test(titleText)
  || new RegExp(/(1st|first) (week|month) complete/i).test(titleText)
  // || new RegExp(/^\d+th day/i).test(titleText)
  // || new RegExp(/beginning of week/i).test(titleText) // look into this
  // || new RegExp(/dreams/i).test(titleText) // look into this
  // || new RegExp(/^\d+ days$/i).test(titleText)
  // || new RegExp(/^\d+ (weeks|week)$/i).test(titleText)
  // || new RegExp(/(one|two|three|four|five) weeks in/i).test(titleText)
  // || new RegExp(/^\d+ (week|weeks) in/i).test(titleText)
  || new RegExp(/mission \.*? accomplished/i).test(titleText)
  || new RegExp(/completed \d+ (days|weeks) today/i).test(titleText)
  // || new RegExp(/got to 90 days/i).test(titleText)


  // month free
  // 30 day check-in
// one week.
// 100 days (can mean in the sense of challenge, so no. I need to combine with flairs such as victory to ensure that it has the right context.)
  // month

// toStartAdvice + flair
// New to NoFap + Day 1

export const toStartedAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/starting .* journey/i).test(titleText)
    || new RegExp(/starting .* challenge/i).test(titleText)
    || new RegExp(/(quitting|quiting|starting) ?(.*) (now|today)/i).test(titleText)
    || new RegExp(/(first|1st) (step|day)/i).test(titleText)
    || new RegExp(/(starting|started|starts) (now|today)/i).test(titleText)
    || new RegExp(/(starting|started) .* (streak|first|run)/i).test(titleText)
    || new RegExp(/(starting|started) days of (nofap|no fap)/i).test(titleText)
    || new RegExp(/starting, again/i).test(titleText)
    || new RegExp(/(journey) (start|begins)/i).test(titleText)
    || new RegExp(/(start|beginning) (of a|my) journey/i).test(titleText)
    || new RegExp(/New to (NoFap|no fap)/i).test(titleText)
    || new RegExp(/new here/i).test(titleText)
    || new RegExp(/starting (NoFap|no fap)/i).test(titleText)
    || new RegExp(/(I'm|im) done with this ?(.*) feeling/i).test(titleText)
    || new RegExp(/Day 1 Started/i).test(titleText)
    || new RegExp(/^Day 1$/i).test(titleText)
    || new RegExp(/officially day 1/i).test(titleText)
    // || new RegExp(/my first post/i).test(titleText) // potentially inaccurate
    || new RegExp(/try to do this (NoFap|no fap)/i).test(titleText)
    || new RegExp(/(wanna|want|trying) to start/i).test(titleText)
    || new RegExp(/start of the journey/i).test(titleText)
    || new RegExp(/(Let's|lets) do this/i).test(titleText)
    || new RegExp(/(it's|its|it is) time to change/i).test(titleText)
    || new RegExp(/day 1 of (no fap|reboot|re boot)/i).test(titleText)
    || new RegExp(/new beginning/i).test(titleText)
    || new RegExp(/stopping for good/i).test(titleText)
    || new RegExp(/(NoFap|no fap) from today/i).test(titleText)
    || new RegExp(/Start of a New Journey/i).test(titleText)
    || new RegExp(/Start to my Journey/i).test(titleText)
    || new RegExp(/Beginning of my Journey in (NoFap|no fap)/i).test(titleText)
    || new RegExp(/started (nofap|no fap) today/i).test(titleText)
    || new RegExp(/(just) (begun|started)/i).test(titleText)
    || new RegExp(/why (I'm|im) starting/i).test(titleText)


    // decided to quit .* today
    // Day 1
    // Need Help + Flair New Never Fapper
    // Need help + Flair motivate me
    // Let's do this
    // new here

export const toStartedAgainAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/(begin|let's do this) again/i).test(titleText)
    || new RegExp(/gonna try again/i).test(titleText)
    || new RegExp(/one last try/i).test(titleText)
    || new RegExp(/day (1|one) again/i).test(titleText)
    || new RegExp(/^starting again$/i).test(titleText)

export const toGeneralAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/I need ?(.*) help/i).test(titleText)
    || new RegExp(/feel like shit/i).test(titleText)
    || new RegExp(/need some guidance/i).test(titleText)
    // || new RegExp(/needing advice/i).test(titleText)
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
    || new RegExp(/how to get past .* (week|days|day)/i).test(titleText)
    || new RegExp(/Trying Nofap .* years/i).test(titleText)
    || new RegExp(/I keep failing/i).test(titleText)


    // || new RegExp(/urges keep coming/i).test(titleText)

    // I am Trying Nofap From Last 1.5 years But I keep Failing, is there any Improvement i can do?
    // Advice

    // flairText === 'Relapse Report'
export const toRelapseAdvice = (titleText: string, flairText: string): boolean =>
  flairText === 'Relapse Report'
  || new RegExp(/failed first attempt/i).test(titleText)
  || new RegExp(/(I|I've|just) ?(have)? (relapsed|failed)/i).test(titleText)
  || new RegExp(/(relapse|relapsed) (after|on day|again)/i).test(titleText) // relapsed today DOES NOT work, because it can be used in other contexts.
  || new RegExp(/(failed|lost) (at|on) day/i).test(titleText)
  || new RegExp(/(broke my|broke the|lost my) ?(.*) (streak)/i).test(titleText)
  || new RegExp(/^relapsed\.?$/i).test(titleText)
  || new RegExp(/^relapse\.?$/i).test(titleText)
  || new RegExp(/^relapsed (last night|today)/i).test(titleText)
  || new RegExp(/^failed\.?$/i).test(titleText)
  || new RegExp(/relapsing after a/i).test(titleText)
  || new RegExp(/relapsed \d+ times today/i).test(titleText)
  // relapsed (will have to look into this)
  || new RegExp(/(Relapsed|relapse) at \d+ days/i).test(titleText)
  || new RegExp(/(Relapsed|relapse) at day \d+/i).test(titleText)
  || new RegExp(/I slipped/i).test(titleText)
  // - relapsed

export const toWetDreamAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/wet dream advice/i).test(titleText)
  || new RegExp(/had a wet dream/i).test(titleText)
  || new RegExp(/^wet dreams$/i).test(titleText)

export const toAccountabilityPartner = (titleText: string, flairText: string): boolean =>
  new RegExp(/seeking a partner/i).test(titleText)
  || new RegExp(/accountability partner/i).test(titleText)
  || new RegExp(/need (AP|accountability partner)/i).test(titleText)



// I do meditate
// Bro i meditate like twice a week, workout everyday and read twice a week, maybe i should use that sex energy doing that things everyday

