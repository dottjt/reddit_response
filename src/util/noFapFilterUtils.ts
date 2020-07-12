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
import { finalJoinSubreddit } from '../util/responses/final';


export const filterNewNoFapMessages = (dbUser: CompiledFullUserObject, usernameConfig: ConfigType, flairText: string, titleText: string): {
  shouldDeleteElementImmediately: boolean,
  sendMessageType: SendMessageType | undefined,
  prelimUrl: string | undefined
} => {

  // TO REMOVE
  if (
    new RegExp(/profile/i).test(titleText)
    || new RegExp(/relapsed intentionally/i).test(titleText)
    || new RegExp(/attract women/i).test(titleText)
    || new RegExp(/achieved my goal/i).test(titleText)
    || new RegExp(/haven't relapsed/i).test(titleText)
    || new RegExp(/king/i).test(titleText)
    || new RegExp(/(pied|peid)/i).test(titleText)
    || new RegExp(/hair/i).test(titleText)
    || new RegExp(/(virgin|virginity)/i).test(titleText)
    || new RegExp(/skin/i).test(titleText)
    || new RegExp(/learnt/i).test(titleText)
    || new RegExp(/the key is/i).test(titleText)
    || new RegExp(/breakthrough/i).test(titleText)
    || new RegExp(/monk/i).test(titleText)
    || new RegExp(/read this if you/i).test(titleText)
    || new RegExp(/blue balls/i).test(titleText)
    || new RegExp(/counter/i).test(titleText)
    || new RegExp(/tracker/i).test(titleText)
    || new RegExp(/(going|growing) strong/i).test(titleText)
    || new RegExp(/erectile dysfunction/i).test(titleText)
    || new RegExp(/should I go/i).test(titleText)
    || new RegExp(/my benefits/i).test(titleText)
    || new RegExp(/placebo/i).test(titleText)
    || new RegExp(/penis/i).test(titleText)
    || new RegExp(/accountability post/i).test(titleText)
    || new RegExp(/^day \d+$/i).test(titleText) // look into this
    || new RegExp(/^day \d+.$/i).test(titleText) // look into this
    || new RegExp(/^day \d+ complete/i).test(titleText)
    || new RegExp(/\d+ (week|day).* complete/i).test(titleText)
    || new RegExp(/^\d+th day/i).test(titleText)
    || new RegExp(/^\d+ days/i).test(titleText)
    || new RegExp(/^\d+ (weeks|week)/i).test(titleText)
    || new RegExp(/app/i).test(titleText) // look into
    || new RegExp(/sex/i).test(titleText) // look into this
    || new RegExp(/relapse?/i).test(titleText) // look into this.
    // || new RegExp(/update from/i).test(titleText)

    // TODO: Maybe these days are actually in the wrong order and should be after all the other items.

    // Journal Check-In

    // new RegExp(/a/).test(titleText) ||
    // new RegExp(/a/).test(titleText) ||
    // new RegExp(/a/).test(titleText) ||

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
    || new RegExp(/starting ?(.*) now/i).test(titleText)
    || new RegExp(/first (step|day)/i).test(titleText)
    || new RegExp(/(starting|started) (now|today)/i).test(titleText)
    || new RegExp(/(starting|started) .* (streak|first|run)/i).test(titleText)
    || new RegExp(/starting, again/i).test(titleText)
    || new RegExp(/(journey) (start|begins)/i).test(titleText)
    || new RegExp(/start (of a|my) journey/i).test(titleText)
    || new RegExp(/New to NoFap/i).test(titleText)
    || new RegExp(/new here starting/i).test(titleText)
    || new RegExp(/I'm new here/i).test(titleText)
    || new RegExp(/Day 1 Started/i).test(titleText)
    || new RegExp(/officially day 1/i).test(titleText)
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
    new RegExp(/(begin|let's do this) again/i).test(titleText) ||
    new RegExp(/gonna try again/i).test(titleText)
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
    || new RegExp(/(I|just) relapsed/i).test(titleText)
    || new RegExp(/relapsed (today|after)/i).test(titleText)
    || new RegExp(/(failed|lost) (at|on) day/i).test(titleText)
    || new RegExp(/(broke my) ?(.*) (streak)/i).test(titleText)
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
      new RegExp(/(What's|please share|share|want to see|send|sending me|send me|give|give me|provide me|love to see|interested in|link|have|appreciate|look at|provide) (a|the|that|your|to ur) (web|website|site|link)/i).test(messagePayload.message)
      || new RegExp(/hit me up/i).test(messagePayload.message)
      || new RegExp(/website sounds .* interesting/i).test(messagePayload.message)
      || new RegExp(/definetly interested/i).test(messagePayload.message)
      || new RegExp(/link to ur web/i).test(messagePayload.message)
      || new RegExp(/url for this website/i).test(messagePayload.message)
      || new RegExp(/(I'm|I am) interested/i).test(messagePayload.message)
      || new RegExp(/send me the (link|website)/i).test(messagePayload.message)
      || new RegExp(/give your (site|website) a visit/i).test(messagePayload.message)
      || new RegExp(/yes please/i).test(messagePayload.message)
      || new RegExp(/name of your website/i).test(messagePayload.message)
      || new RegExp(/interested (to know about|with) the website/i).test(messagePayload.message)
      || new RegExp(/(name of|checking out|check|checkout|check out|take a look at) (your|the) website/i).test(messagePayload.message)
      || new RegExp(/love to check it out/i).test(messagePayload.message)
      || new RegExp(/please send it/i).test(messagePayload.message)
      || new RegExp(/love if you sent the website/i).test(messagePayload.message)
      || new RegExp(/love to (check|read) (that|the) website/i).test(messagePayload.message)
      || new RegExp(/That would be great/i).test(messagePayload.message)
    ) {
      return {
        messageText: middleGuideNoWorries, // lastMessage.forum
        messageType: SendMessageType.MiddleGuideNoWorries,
      }
    }

    // Link You
    if (
      new RegExp(/(what's|what is) the website/i).test(messagePayload.message)
      || new RegExp(/name of your website/i).test(messagePayload.message)
      || new RegExp(/what is your website/i).test(messagePayload.message)
    ) {
      return {
        messageText: middleGuideLinkYou,
        messageType: SendMessageType.MiddleGuideLinkYou,
      }
    }
  }

  if (lastMessage?.type.includes('middle')) {
    // Join Subreddit
    if (
      new RegExp(/thank you/i).test(messagePayload.message)
      || new RegExp(/(I'll|I will) ?(.*) (check|checkout|check it|check out)/i).test(messagePayload.message)
    ) {
      return {
        messageText: finalJoinSubreddit,
        messageType: SendMessageType.FinalJoinSubreddit,
      }
    }
  }

  return {
    messageText: undefined,
    messageType: undefined,
  }
}