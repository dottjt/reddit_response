// TODO later once I figure out the
// enum FilterResult {
//   // Send
// }

import { SendMessageType, Message } from '../types/serverTypes';
import { generatePrelimUrl } from './sendMessageUtils';
import { CompiledFullUserObject, PopulateReceivedMessagesPayload } from '../types/tamperMonkeyTypes';
import { startAdvice, startAgainAdvice, generalAdvice, relapseAdvice, wetdreamAdvice } from './responses/start';
import { ConfigType } from './config';
import { middleGuideNoWorries, middleGuideLinkYou } from './responses/middle';
import { finalJoinSubreddit, finalFantastic } from '../util/responses/final';


export const filterNewNoFapMessages = (dbUser: CompiledFullUserObject, usernameConfig: ConfigType, flairText: string, titleText: string): {
  shouldDeleteElementImmediately: boolean,
  sendMessageType: SendMessageType | undefined,
  prelimUrl: string | undefined
} => {

  // TODO: Check message text first for useful keywords, such as  struggle, advice etc.

  // TO REMOVE
  if (
    new RegExp(/profile/i).test(titleText)
    || new RegExp(/("|“|')/i).test(titleText)
    || new RegExp(/gift/i).test(titleText)
    || new RegExp(/(success|celebrate)/i).test(titleText)
    || new RegExp(/(week|days) strong/i).test(titleText)
    || new RegExp(/pro tip/i).test(titleText)
    || new RegExp(/boner/i).test(titleText)
    || new RegExp(/passed (day|week)/i).test(titleText)
    || new RegExp(/double digit/i).test(titleText)
    || new RegExp(/completed \d+ (days|weeks)/i).test(titleText)
    || new RegExp(/longest streak/i).test(titleText) // look into
    || new RegExp(/become the/i).test(titleText)
    || new RegExp(/replaced PMO/i).test(titleText)
    || new RegExp(/diary/i).test(titleText)
    || new RegExp(/(a reminder|remember this)/i).test(titleText)
    || new RegExp(/a theory/i).test(titleText)
    || new RegExp(/almost there/i).test(titleText)
    || new RegExp(/(weeks|days) porn free/i).test(titleText)
    || new RegExp(/relapsed intentionally/i).test(titleText)
    || new RegExp(/found something that/i).test(titleText)
    || new RegExp(/(women|girl)/i).test(titleText)
    || new RegExp(/relationship/i).test(titleText) // look into
    || new RegExp(/achieved my goal/i).test(titleText)
    || new RegExp(/(insta|instagram)/i).test(titleText)
    || new RegExp(/hunger/i).test(titleText)
    || new RegExp(/is ?(.*) worth/i).test(titleText)
    || new RegExp(/morning wood/i).test(titleText)
    || new RegExp(/haven't relapsed/i).test(titleText)
    || new RegExp(/king/i).test(titleText)
    || new RegExp(/(previous|my) record/i).test(titleText)
    || new RegExp(/(pied|peid|in bed|get it up|shrink)/i).test(titleText)
    || new RegExp(/hair/i).test(titleText)
    || new RegExp(/genitals/i).test(titleText)
    || new RegExp(/(virgin|virginity)/i).test(titleText)
    || new RegExp(/skin/i).test(titleText)
    || new RegExp(/learnt/i).test(titleText)
    || new RegExp(/the key is/i).test(titleText)
    || new RegExp(/breakthrough/i).test(titleText)
    || new RegExp(/come this far/i).test(titleText)
    || new RegExp(/monk/i).test(titleText)
    // || new RegExp(/(don't|dont) fall/i).test(titleText)
    || new RegExp(/read this if you/i).test(titleText)
    || new RegExp(/blue balls/i).test(titleText)
    || new RegExp(/(weekly|daily) journal/i).test(titleText)
    || new RegExp(/(tracker|counting|counter)/i).test(titleText)
    || new RegExp(/(going|growing) strong/i).test(titleText)
    || new RegExp(/(erectile|disfunction|erectile dysfunction)/i).test(titleText)
    || new RegExp(/should I go/i).test(titleText)
    || new RegExp(/my benefits/i).test(titleText)
    // || new RegExp(/the ?(.*) benefit ?(.*) nofap/i).test(titleText)
    || new RegExp(/placebo/i).test(titleText)
    || new RegExp(/(penis|pelvic)/i).test(titleText)
    || new RegExp(/accountability post/i).test(titleText)
    || new RegExp(/(don't|dont) give up/i).test(titleText)
    || new RegExp(/app/i).test(titleText) // look into
    || new RegExp(/sex/i).test(titleText) // look into this
    || new RegExp(/relapse\?/i).test(titleText) // look into this.
    || new RegExp(/transformation/i).test(titleText) // look into this.
    || new RegExp(/journal entry/i).test(titleText) // look into this.
    || new RegExp(/(mum|dad)/i).test(titleText) // look into this.
    || new RegExp(/confessed .* to my/i).test(titleText) // look into this.
    || new RegExp(/longest .* streak/i).test(titleText) // look into this.
    // || new RegExp(/update from/i).test(titleText)

    // TODO: Maybe these days are actually in the wrong order and should be after all the other items.

    // it's okay to fap
    // picture/quote
    // libdo
    // days complete / d
    // the key is to
    // harmful effects
  ) {
    return {
      shouldDeleteElementImmediately: true,
      sendMessageType: undefined,
      prelimUrl: undefined
    }
  }

  // TODO
  // if (flairText === 'New to NoFap') {
  //   // console.log(`relapse report - ${tagUsername}`);

  // }

  // Started
  if (
    new RegExp(/starting .* journey/i).test(titleText)
    || new RegExp(/starting .* challenge/i).test(titleText)
    || new RegExp(/(quitting|quiting|starting) ?(.*) (now|today)/i).test(titleText)
    || new RegExp(/(first|1st) (step|day)/i).test(titleText)
    || new RegExp(/(starting|started|starts) (now|today)/i).test(titleText)
    || new RegExp(/(starting|started) .* (streak|first|run)/i).test(titleText)
    || new RegExp(/starting, again/i).test(titleText)
    || new RegExp(/(journey) (start|begins)/i).test(titleText)
    || new RegExp(/start (of a|my) journey/i).test(titleText)
    || new RegExp(/New to NoFap/i).test(titleText)
    || new RegExp(/new here starting/i).test(titleText)
    || new RegExp(/(I'm|im) done with this ?(.*) feeling/i).test(titleText)
    || new RegExp(/(I'm|im) new here/i).test(titleText)
    || new RegExp(/Day 1 Started/i).test(titleText)
    || new RegExp(/officially day 1/i).test(titleText)
    // || new RegExp(/my first post/i).test(titleText) // potentially inaccurate
    || new RegExp(/try to do this NoFap/i).test(titleText)
    || new RegExp(/trying to start/i).test(titleText)
    || new RegExp(/(Let's|lets) do this/i).test(titleText)
    || new RegExp(/day 1 of (no fap|reboot|re boot)/i).test(titleText)
    || new RegExp(/new beginning/i).test(titleText)
    || new RegExp(/stopping for good/i).test(titleText)
    || new RegExp(/song/i).test(titleText)
    || new RegExp(/(just) (begun|started)/i).test(titleText)

    // Day 1
    // Need Help + Flair New Never Fapper
    // Need help + Flair motivate me
    // Let's do this
  ) {

    return {
      shouldDeleteElementImmediately: false,
      sendMessageType: SendMessageType.StartAdviceStart,
      prelimUrl: generatePrelimUrl(dbUser.username, startAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStart)
    }
  }

  // Started Again
  if (
    new RegExp(/(begin|let's do this) again/i).test(titleText)
    || new RegExp(/gonna try again/i).test(titleText)
    || new RegExp(/one last try/i).test(titleText)
  ) {
    return {
      shouldDeleteElementImmediately: false,
      sendMessageType: SendMessageType.StartAdviceStartAgain,
      prelimUrl: generatePrelimUrl(dbUser.username, startAgainAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStartAgain)
    }
  }

  // General
  if (
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
  ) {
    return {
      shouldDeleteElementImmediately: false,
      sendMessageType: SendMessageType.StartAdviceGeneral,
      prelimUrl: generatePrelimUrl(dbUser.username, generalAdvice(usernameConfig.forumType), SendMessageType.StartAdviceGeneral)
    }
  }

  // Relapse
  if (
    flairText === 'Relapse Report'
    || new RegExp(/failed first attempt/i).test(titleText)
    || new RegExp(/(I|just) ?(have)? relapsed/i).test(titleText)
    || new RegExp(/relapsed (today|after)/i).test(titleText)
    || new RegExp(/(failed|lost) (at|on) day/i).test(titleText)
    || new RegExp(/(broke my|lost my) ?(.*) (streak)/i).test(titleText)
    || new RegExp(/^relapsed\.$/i).test(titleText)
    || new RegExp(/^relapsed$/i).test(titleText)
    // relapsed (will have to look into this)
  ) {
    return {
      shouldDeleteElementImmediately: false,
      sendMessageType: SendMessageType.StartAdviceRelapse,
      prelimUrl: generatePrelimUrl(dbUser.username, relapseAdvice(usernameConfig.forumType), SendMessageType.StartAdviceRelapse)
    }
  }

  // Wet dream
  if (
    new RegExp(/wet dream advice/i).test(titleText)
    || new RegExp(/just had a wet dream/i).test(titleText)
  ) {
    return {
      shouldDeleteElementImmediately: false,
      sendMessageType: SendMessageType.StartAdviceWetdreamAdvice,
      prelimUrl: generatePrelimUrl(dbUser.username, wetdreamAdvice(usernameConfig.forumType), SendMessageType.StartAdviceWetdreamAdvice)
    }
  }

  // Accountability Partner
  if (
    new RegExp(/seeking a partner/i).test(titleText)
    || new RegExp(/accountability partner/i).test(titleText)
    || new RegExp(/need (AP|accountability partner)/i).test(titleText)
  ) {
    return {
      shouldDeleteElementImmediately: false,
      sendMessageType: SendMessageType.StartAccountabilityPartner,
      prelimUrl: generatePrelimUrl(dbUser.username, startAdvice(usernameConfig.forumType), SendMessageType.StartAccountabilityPartner)
    }
  }

  // Does the urge to masturbate get easier?
  // edging
  // is it a relapse?
  // masturbation without porn.
  // cold showers

  // Final Delete
  if (
    new RegExp(/^(day|week) \d+$/i).test(titleText) // look into this
    || new RegExp(/^(day|week) \d+.$/i).test(titleText) // look into this
    || new RegExp(/^(day|week) \d+ (complete|done)/i).test(titleText)
    || new RegExp(/\d+ (week|day).* (complete|done)/i).test(titleText)
    || new RegExp(/^\d+th day/i).test(titleText)
    || new RegExp(/beginning of week/i).test(titleText) // look into this
    || new RegExp(/dreams/i).test(titleText) // look into this
    || new RegExp(/^\d+ days$/i).test(titleText)
    || new RegExp(/^\d+ (weeks|week)$/i).test(titleText)
    || new RegExp(/(one|two|three|four|five) weeks in/i).test(titleText)
    || new RegExp(/^\d+ (week|weeks) in/i).test(titleText)

    // month
  ) {
    return {
      shouldDeleteElementImmediately: true,
      sendMessageType: undefined,
      prelimUrl: undefined
    }
  }

  return {
    shouldDeleteElementImmediately: false,
    sendMessageType: undefined,
    prelimUrl: undefined
  }
}


export const filterRedditInboxMessages = (
  messagePayload: PopulateReceivedMessagesPayload,
  compiledUser: CompiledFullUserObject
): {
  messageText: string | undefined;
  messageType: SendMessageType | undefined;
} => {
  const lastMessage: Message | undefined = compiledUser.lastSentMessage;

  console.log('lastMessage?.type', compiledUser.username, lastMessage?.type);

  if (lastMessage?.type.includes('start')) {

    // No Worries
    if (
      new RegExp(/(What's|What’s|please share|share|want to see|send|sending me|send me|give|gimme|give me|provide me|interested in|link|me know|link me|have|appreciate|look at|provide|like|let me see) (a|the|that|ur|your|to ur|to the|to your|with the) (web|website|guide|site|link)/i).test(messagePayload.message)
      || new RegExp(/hit me up/i).test(messagePayload.message)
      || new RegExp(/go ahead/i).test(messagePayload.message)
      || new RegExp(/took up/i).test(messagePayload.message)
      || new RegExp(/link would be (great|awesome)/i).test(messagePayload.message)
      || new RegExp(/appreciate viewing your website/i).test(messagePayload.message)
      || new RegExp(/website sounds .* interesting/i).test(messagePayload.message)
      || new RegExp(/(definetly|definitely|totally|im|I am|I'm) ?(be)? interested/i).test(messagePayload.message)
      || new RegExp(/link ?(me)? to ur (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
      || new RegExp(/url for this (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
      || new RegExp(/(I'm|I am|I'd be) ?(certainly)? (interested|interessted|interesting)/i).test(messagePayload.message)
      || new RegExp(/I’ll check the link if you have it/i).test(messagePayload.message)
      || new RegExp(/send me the (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
      || new RegExp(/(yes|yeah) for sure/i).test(messagePayload.message)
      || new RegExp(/give (ur|your) (site|link|website|webite|guide|content|page) a visit/i).test(messagePayload.message)
      || new RegExp(/wanna visit (ur|your) site/i).test(messagePayload.message)
      || new RegExp(/yes please/i).test(messagePayload.message)
      || new RegExp(/name of (ur|your) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
      || new RegExp(/like to see (it|that)/i).test(messagePayload.message)
      || new RegExp(/send it over/i).test(messagePayload.message)
      || new RegExp(/(interested|interesting) (to know about|with|in|in viewing) (ur|your|the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
      || new RegExp(/(name of|checking out|check|checkout|check out|take a look at) (ur|your|the|to the) (site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
      || new RegExp(/please send it/i).test(messagePayload.message)
      || new RegExp(/love if you sent ?(me)? the website/i).test(messagePayload.message)
      || new RegExp(/(love|like) to (check|read|get|see|visit|hear about) ?(that|the|about|ur|your)? (any|it|site|link|website|webite|guide|content|page)/i).test(messagePayload.message)
      || new RegExp(/That would be great/i).test(messagePayload.message)
      || new RegExp(/you could share/i).test(messagePayload.message)
      || new RegExp(/^sure$/i).test(messagePayload.message)
      || new RegExp(/^yes$/i).test(messagePayload.message)
    ) {
      return {
        messageText: middleGuideNoWorries, // lastMessage.forum
        messageType: SendMessageType.MiddleGuideNoWorries,
      }
    }

    // Link You
    if (
      new RegExp(/(what's|what is|whats) the (link|website)/i).test(messagePayload.message)
      || new RegExp(/name of (ur|your) website/i).test(messagePayload.message)
      || new RegExp(/(what is|whats|what's|called) (ur|your|the) website/i).test(messagePayload.message)
      || new RegExp(/Tell me ?(about|the name of)? (ur|your) website/i).test(messagePayload.message)

    ) {
      return {
        messageText: middleGuideLinkYou,
        messageType: SendMessageType.MiddleGuideLinkYou,
      }
    }

    // tips on meditating?
    // TODO Will have to create the thing for this as well.

    // That's fantastic
    // so if all else fails and they don't want the link, BUT they say they meditate then I can throw them a That's fantastic link.
    // I will have to careful check that it DOES NOT contain certain things.
    // if (
    //   new RegExp(/have started doing meditation/i).test(messagePayload.message)
    //   || new RegExp(/i ?(.*) meditate ?(for 10 minutes|.*) daily/i).test(messagePayload.message) // will need to actually test this.
    //   || new RegExp(/(what is|whats|what's) (your|the) website/i).test(messagePayload.message)
    // ) {
    //   return {
    //     messageText: finalFantastic,
    //     messageType: SendMessageType.FinalFantastic,
    //   }
    // }
  }





  // so this is broken. because once you go to a page that has the same text i.e. from unread to read it will send this automatically again to someone who's already received it.
  // therefore, this also need to know that the recieved messages from that used is exactly two
  // of course this breaks if the user sends two messages, so I'll have to look into this.
  // in addition it should check time last message was sent by ME and last message sent by them. if they are within a similar time span, then perhaps don't send it.

  // the other flaw in this system is that it should check all messages sent by the user on this page and count them as one, not just one separately. It shouldn't count them like that, it's broken.

  // if (lastMessage?.type.includes('middle')) {
  //   // Join Subreddit
  //   if (
  //     new RegExp(/(thank you|thanks)/i).test(messagePayload.message)
  //     || new RegExp(/(I'll|I will) ?(.*) (check|checkout|check it|check out)/i).test(messagePayload.message)
  //   ) {
  //     return {
  //       messageText: finalJoinSubreddit,
  //       messageType: SendMessageType.FinalJoinSubreddit,
  //     }
  //   }
  // }

  return {
    messageText: undefined,
    messageType: undefined,
  }
}