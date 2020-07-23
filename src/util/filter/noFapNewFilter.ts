import { SendMessageType, UserType } from '../../types/serverTypes';
import { CompiledFullUserObject } from '../../types/tamperMonkeyTypes';
import {
  startAdvice,
  startAgainAdvice,
  generalAdvice,
  relapseAdvice,
  wetdreamAdvice,
  accountabilityPartner,
  struggleAdvice,
  dealingWithUrgesAdvice,
  biggestBenefitPostAddictionAdvice,
  pornBlockersAdvice,
  masturbateWithoutPornAdvice,
  didIJustRelapseAdvice,
  whenDoesItGetEasierAdvice
} from '../responses/start';
import { ConfigType } from '../config';

import { followRelapseAdvice } from '../responses/follow';
import { toRemoveInitial, toRemoveInitialDay, toRemoveFinal } from './filterCollections/sub/toRemove';
import { toRelapseAdvice } from './filterCollections/sub/toRelapse';
import { toStartedAdvice, toStartedAgainAdvice } from './filterCollections/sub/toStart';
import { toGeneralAdvice } from './filterCollections/sub/toGeneral';
import { toWetDreamAdvice, toAccountabilityPartner, toDealingWithUrgesAdvice, toBenefitsAdvice, toPornBlockerAdvice, toMasturbationAdvice, toDidIJustRelapseAdvice, toWhenDoesItGetEasierAdvice } from './filterCollections/sub/toOthers';
import { generatePrelimUrl } from '../utils/sendMessageUtils';
import { toStruggleAdvice } from './filterCollections/sub/toStruggle';
import { isLessThan24Hours } from '../utils/commonUtils';


export const noFapNewFilter = (compiledUser: CompiledFullUserObject, usernameConfig: ConfigType, flairText: string, titleText: string, messageText: string): {
  shouldDeleteElementImmediately: boolean,
  sendMessageType: SendMessageType | undefined,
  prelimUrl: string | undefined,
} => {

  // TO REMOVE
  if (
    toRemoveInitial(titleText, flairText, messageText)
    || toRemoveInitialDay(titleText, flairText, messageText)
  ) {
    console.log(`Deleted: ${compiledUser.username} - ${flairText} - ${titleText}`);
    return {
      shouldDeleteElementImmediately: true,
      sendMessageType: undefined,
      prelimUrl: undefined
    }
  }

  if (compiledUser?.lastSentMessage) {
    if (isLessThan24Hours(new Date(compiledUser?.lastSentMessage?.send_date as string))) {
      return {
        shouldDeleteElementImmediately: true,
        sendMessageType: undefined,
        prelimUrl: undefined
      }
    }
  }

  // USER HOSTILE
  if (
    compiledUser.userType === UserType.UserHostile
    || compiledUser.userType === UserType.UserRespondedBack
    || compiledUser.userType === UserType.FollowMessageSent
  ) {
    return {
      shouldDeleteElementImmediately: true,
      sendMessageType: undefined,
      prelimUrl: undefined
    }
  }

  // EDGE
  // Deleted: Iamnofapbeast - undefined - I relapsed on day 5 due to instagram triggers on a nude model photo
  // Deleted: Sitaram0641 - undefined - Day 22 completed, but got nightfall 3 times in last week
  // Deleted: the_invinciblee - undefined - Is NoFap benefits a Placebo?
  // Deleted: Z1omek - undefined - How to fight urges while lying in bed?
  // Deleted: frickandfrackooh - Question - How to stop an urge in bed?


  // USER NOT RESPONDED
  if (compiledUser.userType === UserType.UserNotRespondedBack) {
    // FOLLOW MESSAGES
    if (compiledUser?.lastSentMessage?.type.includes('start')) {
      if (toRelapseAdvice(titleText, flairText, messageText)) {
        return {
          shouldDeleteElementImmediately: false,
          sendMessageType: SendMessageType.FollowRelapseAdvice,
          prelimUrl: generatePrelimUrl(compiledUser.username, followRelapseAdvice(usernameConfig.forumType), SendMessageType.FollowRelapseAdvice, usernameConfig)
        }
      }
    }

    const lessThanOneDayAgo = (date: Date): boolean => {
      const DAY = 24*60*60*1000;
      const aDayAgo = Date.now() - DAY;

      return date.getTime() > aDayAgo;
    }

    const messageSendDate = compiledUser?.lastSentMessage?.send_date;

    if (messageSendDate && lessThanOneDayAgo(new Date(messageSendDate))) {
      return {
        shouldDeleteElementImmediately: true,
        sendMessageType: undefined,
        prelimUrl: undefined
      }
    }
  }

  // FRESH USER
  if (compiledUser.userType === UserType.FreshUser) {
    // TODO
    // if (flairText === 'New to NoFap') {
    //   // console.log(`relapse report - ${tagUsername}`);

    // }

    // STARTED MESSAGES
    if (
      !titleText.includes('again')
      && toStartedAdvice(titleText, flairText, messageText)
    ) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceStart,
        prelimUrl: generatePrelimUrl(compiledUser.username, startAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStart, usernameConfig)
      }
    }

    // STARTED AGAIN MESSAGES
    if (toStartedAgainAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceStartAgain,
        prelimUrl: generatePrelimUrl(compiledUser.username, startAgainAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStartAgain, usernameConfig)
      }
    }

    // GENERAL MESSAGES
    if (toGeneralAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceGeneral,
        prelimUrl: generatePrelimUrl(compiledUser.username, generalAdvice(usernameConfig.forumType), SendMessageType.StartAdviceGeneral, usernameConfig)
      }
    }

    // RELAPSE MESSAGES
    if (toRelapseAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceRelapse,
        prelimUrl: generatePrelimUrl(compiledUser.username, relapseAdvice(usernameConfig.forumType), SendMessageType.StartAdviceRelapse, usernameConfig)
      }
    }

    // WET DREAM MESSAGES
    if (toWetDreamAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceWetdreamAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, wetdreamAdvice(usernameConfig.forumType), SendMessageType.StartAdviceWetdreamAdvice, usernameConfig)
      }
    }

    // ACCOUNTABILITY PARTNER MESSAGES
    if (toAccountabilityPartner(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAccountabilityPartner,
        prelimUrl: generatePrelimUrl(compiledUser.username, accountabilityPartner(usernameConfig.forumType), SendMessageType.StartAccountabilityPartner, usernameConfig)
      }
    }

    // STRUGGLE MESSAGES
    if (toStruggleAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceStruggle,
        prelimUrl: generatePrelimUrl(compiledUser.username, struggleAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStruggle, usernameConfig)
      }
    }

    // URGES MESSAGES
    if (toDealingWithUrgesAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartDealingWithUrgesAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, dealingWithUrgesAdvice(usernameConfig.forumType), SendMessageType.StartDealingWithUrgesAdvice, usernameConfig)
      }
    }

    // BENEFITS MESSAGES
    if (toBenefitsAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartBiggestBenefitPostAddictionAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, biggestBenefitPostAddictionAdvice(usernameConfig.forumType), SendMessageType.StartBiggestBenefitPostAddictionAdvice, usernameConfig)
      }
    }

    // PORN BLOCKER MESSAGES
    if (toPornBlockerAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdvicePornBlockersAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, pornBlockersAdvice(usernameConfig.forumType), SendMessageType.StartAdvicePornBlockersAdvice, usernameConfig)
      }
    }

    // CAN YOU STILL MASTURBATE MESSAGES
    if (toMasturbationAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartMasturbateWithoutPornAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, masturbateWithoutPornAdvice(usernameConfig.forumType), SendMessageType.StartMasturbateWithoutPornAdvice, usernameConfig)
      }
    }

    // DID I JUST RELAPSE MESSAGES
    if (toDidIJustRelapseAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartDidIJustRelapseAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, didIJustRelapseAdvice(usernameConfig.forumType), SendMessageType.StartDidIJustRelapseAdvice, usernameConfig)
      }
    }

    // DID I JUST RELAPSE MESSAGES
    if (toWhenDoesItGetEasierAdvice(titleText, flairText, messageText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartDidIJustRelapseAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, whenDoesItGetEasierAdvice(usernameConfig.forumType), SendMessageType.StartWhenDoesItGetEasierAdvice, usernameConfig)
      }
    }

    // Does the urge to masturbate get easier?
    // edging
    // is it a relapse?
    // masturbation without porn.
    // cold showers
    // once a day
    // is it bad to fap without porn? - 2
    // biggest difference once you recover? / benefits - 5 // why shouldn't I fap? // how has nofap changer your life?
    // what benefits have you noticed? - 1
    // is peeking relapse? - 1
    // how to stop wet dreams? - 1
    // advice for boyfriend from girlfriend. - 1
    // edging and reseting counter. - 1
    // relapse when thinking about ex. - 1
    // recommend NFD podcast - 1
    // how long is too long - 1
    // benefits for hard mode vs no porn - 2
    // advice cannot fall asleep because need to masturbate. - 1
    // is it okay to masturbate because teen/not getting any - 1
    // is it relapse if I have sex with my girlfriend.
    // semen leakage is it bad? - 1
    // is sadness and demotivation normal during reboot?
    // how much is set back from relapsing?
    // is it okay to ejaculate during sex?
    // aren't flatlines good?
    // what is the point of nofap if you can't have sex?
    // how do I show the days I haven't ejaculated?
    // smoking weed to help with porn addiction.
    // what should I be experiencing ?
    // did I lose progress?
    // did you get morning wood again?
    // will dating app make it worse?
    // does this count as relapse?
    // low sex drive?
    // does it get easier over time?
    // okay to masturbate without porn? 3 (jerking off every now and then. )
    // did I just relapse?
    // how do you feel long term (after 1 month/week etc.)
    // does peeking count as relapse?
  }

  // Final Delete
  if (toRemoveFinal(titleText, flairText, messageText)) {
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
