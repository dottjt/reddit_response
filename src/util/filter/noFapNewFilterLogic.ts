export const toRemoveInitial = (titleText: string, flairText: string): boolean =>
  flairText === 'Success Story'
  || new RegExp(/profile/i).test(titleText)
    // || new RegExp(/("|“|')/i).test(titleText) // never do this, ever. breaks everything
    || new RegExp(/gift/i).test(titleText)
    || new RegExp(/(celebrate)/i).test(titleText)
    || new RegExp(/(boner|morning wood)/i).test(titleText)
    || new RegExp(/double digit/i).test(titleText)
    || new RegExp(/diary/i).test(titleText)
    || new RegExp(/(tik tok|tiktok)/i).test(titleText)
    || new RegExp(/moral/i).test(titleText)
    || new RegExp(/anal/i).test(titleText)
    || new RegExp(/(a reminder|remember this)/i).test(titleText)
    || new RegExp(/(cancer|prostatitis)/i).test(titleText)
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

    || new RegExp(/^(Don't|Don't|dont|) give up$/i).test(titleText)
    || new RegExp(/relapsed intentionally/i).test(titleText)
    || new RegExp(/found something that/i).test(titleText)
    // || new RegExp(/(women|girl)/i).test(titleText) // can't because there are good cases for this.
    || new RegExp(/(wim hof|cold shower)/i).test(titleText)
    || new RegExp(/(premature|ejaculation|precum|cum)/i).test(titleText)
    || new RegExp(/achieved my goal/i).test(titleText)
    || new RegExp(/(insta|instagram)/i).test(titleText)
    || new RegExp(/hunger/i).test(titleText)
    // || new RegExp(/king /i).test(titleText) // because jerking
    || new RegExp(/(previous record|milestone)/i).test(titleText)
    || new RegExp(/(pied|peid|in bed|get it up|shrink)/i).test(titleText)
    || new RegExp(/(hair|skin|acne|sperm)/i).test(titleText)
    || new RegExp(/the key is/i).test(titleText)
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
    || new RegExp(/(balls|penis|pelvic|genital|testicle)/i).test(titleText)
    || new RegExp(/accountability post/i).test(titleText)
    || new RegExp(/illusion/i).test(titleText)
    || new RegExp(/counts as relapse/i).test(titleText) // look into this.
    // || new RegExp(/app/i).test(titleText) // look into (doesn't work because porn blocking app )
    || new RegExp(/sex/i).test(titleText) // look into this
    || new RegExp(/journal entry/i).test(titleText) // look into this.
    || new RegExp(/(mum|dad)/i).test(titleText) // look into this.
    || new RegExp(/benefits till now/i).test(titleText)
    || new RegExp(/harmful effect/i).test(titleText)
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

    // no urges
    // is this normal?

    // it's okay to fap
    // picture/quote
    // libdo
    // days complete / d
    // the key is to
    // harmful effects

export const toRemoveFinal = (titleText: string, flairText: string): boolean =>
  new RegExp(/completed/i).test(titleText) // look into this
  || new RegExp(/^(day|week) \d+$/i).test(titleText) // look into this
  // || new RegExp(/^(day|week) \d+.$/i).test(titleText) // look into this
  || new RegExp(/^(day|week) \d+ (complete|done)/i).test(titleText)
  || new RegExp(/\d+ (week|day).* (complete|done)/i).test(titleText)
  // || new RegExp(/^\d+th day/i).test(titleText)
  // || new RegExp(/beginning of week/i).test(titleText) // look into this
  // || new RegExp(/dreams/i).test(titleText) // look into this
  // || new RegExp(/^\d+ days$/i).test(titleText)
  // || new RegExp(/^\d+ (weeks|week)$/i).test(titleText)
  // || new RegExp(/(one|two|three|four|five) weeks in/i).test(titleText)
  // || new RegExp(/^\d+ (week|weeks) in/i).test(titleText)
  || new RegExp(/completed \d+ (days|weeks)/i).test(titleText)
// one week.
// 100 days (can mean in the sense of challenge, so no. I need to combine with flairs such as victory to ensure that it has the right context.)
  // month

export const toStartedAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/starting .* journey/i).test(titleText)
    || new RegExp(/starting .* challenge/i).test(titleText)
    || new RegExp(/(quitting|quiting|starting) ?(.*) (now|today)/i).test(titleText)
    || new RegExp(/(first|1st) (step|day)/i).test(titleText)
    || new RegExp(/(starting|started|starts) (now|today)/i).test(titleText)
    || new RegExp(/(starting|started) .* (streak|first|run)/i).test(titleText)
    || new RegExp(/starting, again/i).test(titleText)
    || new RegExp(/(journey) (start|begins)/i).test(titleText)
    || new RegExp(/(start|beginning) (of a|my) journey/i).test(titleText)
    || new RegExp(/New to NoFap/i).test(titleText)
    || new RegExp(/new here/i).test(titleText)
    || new RegExp(/starting NoFap/i).test(titleText)
    || new RegExp(/(I'm|im) done with this ?(.*) feeling/i).test(titleText)
    || new RegExp(/Day 1 Started/i).test(titleText)
    || new RegExp(/officially day 1/i).test(titleText)
    // || new RegExp(/my first post/i).test(titleText) // potentially inaccurate
    || new RegExp(/try to do this NoFap/i).test(titleText)
    || new RegExp(/(wanna|want|trying) to start/i).test(titleText)
    || new RegExp(/start of the journey/i).test(titleText)
    || new RegExp(/(Let's|lets) do this/i).test(titleText)
    || new RegExp(/day 1 of (no fap|reboot|re boot)/i).test(titleText)
    || new RegExp(/new beginning/i).test(titleText)
    || new RegExp(/stopping for good/i).test(titleText)
    || new RegExp(/(just) (begun|started)/i).test(titleText)

    // Day 1
    // Need Help + Flair New Never Fapper
    // Need help + Flair motivate me
    // Let's do this
    // new here

export const toStartedAgainAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/(begin|let's do this) again/i).test(titleText)
    || new RegExp(/gonna try again/i).test(titleText)
    || new RegExp(/one last try/i).test(titleText)

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
  new RegExp(/failed first attempt/i).test(titleText)
  || new RegExp(/(I|just) ?(have)? (relapsed|failed)/i).test(titleText)
  || new RegExp(/relapsed (after|on day)/i).test(titleText) // relapsed today DOES NOT work, because it can be used in other contexts.
  || new RegExp(/(failed|lost) (at|on) day/i).test(titleText)
  || new RegExp(/(broke my|lost my) ?(.*) (streak)/i).test(titleText)
  || new RegExp(/^relapsed\.$/i).test(titleText)
  || new RegExp(/^relapsed$/i).test(titleText)
  // relapsed (will have to look into this)

export const toWetDreamAdvice = (titleText: string, flairText: string): boolean =>
  new RegExp(/wet dream advice/i).test(titleText)
  || new RegExp(/just had a wet dream/i).test(titleText)

export const toAccountabilityPartner = (titleText: string, flairText: string): boolean =>
  new RegExp(/seeking a partner/i).test(titleText)
  || new RegExp(/accountability partner/i).test(titleText)
  || new RegExp(/need (AP|accountability partner)/i).test(titleText)
