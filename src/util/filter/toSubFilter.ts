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
  whenDoesItGetEasierAdvice,
  partnerAdvice,
  noReasonToRelapseAdvice,
  isWatchingPornRelapseAdvice,
  ageAdvice,
  flatlineAdvice
} from '../responses/start';
import { ConfigType } from '../config';

import { followRelapseAdvice } from '../responses/follow';
import {
  toRemoveInitialDay,
  toRemoveInitialRegexArray,
  toRemoveFinalRegexArray
} from './filterCollections/sub/toRemove';
import { toRelapseAdviceRegexArray } from './filterCollections/sub/toRelapse';
import { toStartAdviceRegexArray } from './filterCollections/sub/toStart';
import { toStartAgainRegexArray } from './filterCollections/sub/toStartAgain';
import { toGeneralAdviceRegexArray } from './filterCollections/sub/toGeneral';
import { toWetDreamAdviceRegexArray } from './filterCollections/sub/toWetDreamAdvice';
import { toStruggleAdviceRegexArray } from './filterCollections/sub/toStruggle';

import { toAccountabilityPartnerRegexArray } from './filterCollections/sub/toAccountabilityPartner';
import { toDealingWithUrgesAdviceRegexArray } from './filterCollections/sub/toDealingWithUrgesAdvice';
import { toBenefitsAdviceRegexArray } from './filterCollections/sub/toBenefitsAdvice';
import { toPornBlockerAdviceRegexArray } from './filterCollections/sub/toPornBlockerAdvice';
import { toMasturbateWithoutPornAdviceRegexArray } from './filterCollections/sub/toMasturbateWithoutPornAdvice';
import { toDidIJustRelapseAdviceRegexArray } from './filterCollections/sub/toDidIJustRelapseAdvice';
import { toWhenDoesItGetEasierAdviceRegexArray } from './filterCollections/sub/toWhenDoesItGetEasierAdvice';

import { generatePrelimUrl } from '../utils/sendMessageUtils';
import { isLessThan24Hours } from '../utils/commonUtils';
import { matchRegex, RegexFiltersMatch } from './regexUtil';
import { toBiggestBenefitPostAddictionAdviceRegexArray } from './filterCollections/sub/toBiggestBenefitPostAddictionAdvice';
import { toPartnerAdviceRegexArray } from './filterCollections/sub/toPartnerAdvice';
import { toIsWatchingPornRelapseAdviceRegexArray } from './filterCollections/sub/toIsWatchingPornRelapseAdvice';
import { toNoReasonToRelapseAdviceRegexArray } from './filterCollections/sub/toNoReasonToRelapseAdvice';
import { toAgeAdviceRegexArray } from './filterCollections/sub/toAgeAdvice';
import { toFlatlineAdviceRegexArray } from './filterCollections/sub/toFlatlineAdvice';
import { deleteImmediately, freshUserResponse } from './toSubFilterUtil';

export const toSubFilter = (compiledUser: CompiledFullUserObject, usernameConfig: ConfigType, flairText: string, titleText: string, messageText: string): {
  shouldDeleteElementImmediately: boolean,
  sendMessageType: SendMessageType | undefined,
  prelimUrl: string | undefined,
  messageMatch: RegexFiltersMatch[] | undefined,
} => {

  const regexTextObject = { titleText, flairText, messageText };

  // EDGE
  // Deleted: Iamnofapbeast - undefined - I relapsed on day 5 due to instagram triggers on a nude model photo
  // Deleted: Sitaram0641 - undefined - Day 22 completed, but got nightfall 3 times in last week
  // Deleted: the_invinciblee - undefined - Is NoFap benefits a Placebo?
  // Deleted: Z1omek - undefined - How to fight urges while lying in bed?
  // Deleted: frickandfrackooh - Question - How to stop an urge in bed?

  // OTHER
  // Meditating at night can gelp witg controlling the wet dreams
  // Flatline 7 days in - scared!
  // will nofap cure my cuckhold fetish
  // should I reset?
  // Is this flatline? - title,  How do you get through it? - messageText
  // Does peeking count as a relapse (both) - did I just relapse.

  // Ways to help me stay motivated through flatline -messageText
  // Should I just finish and restart my counter? messageText  - no reason to relapse.

  // IS SEX RELAPSE
  // Is sex (with someone you just met) a relapse

  // AGE
  // around 15 years
  // 10 years -

  // TODO: OTHER TOPIC MESSAGES
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
  // any negative effects?
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


  // Does the guilt go away (yes, onnce you develop control over your mind)

  // TO REMOVE
  const toRemoveInitialDayResult = toRemoveInitialDay(titleText, flairText, messageText)
  const toRemoveInitialMatch = matchRegex(toRemoveInitialRegexArray, regexTextObject);

  if (flairText !== 'New to NoFap') {
    if (toRemoveInitialDayResult || toRemoveInitialMatch.length > 0) {
      console.log(`Deleted: ${compiledUser.username} - ${flairText} - ${titleText} - Match: ${toRemoveInitialMatch && toRemoveInitialMatch[0]}`);
      return deleteImmediately;
    }
  }

  // LESS THAN 24 HOURS SINCE LAST MESSAGE
  if (compiledUser?.lastSentMessage && isLessThan24Hours(new Date(compiledUser?.lastSentMessage?.send_date as string))) {
    return deleteImmediately;
  }

  // USER HOSTILE
  if (compiledUser.userType === UserType.UserHostile || compiledUser.userType === UserType.UserRespondedBack || compiledUser.userType === UserType.FollowMessageSent) {
    return deleteImmediately;
  }

  // USER NOT RESPONDED
  if (compiledUser.userType === UserType.UserNotRespondedBack) {
    // FOLLOW MESSAGES

    if (compiledUser?.lastSentMessage?.type.includes('start')) {
      const toRelapseAdviceMatch = matchRegex(toRelapseAdviceRegexArray, regexTextObject);
      if (toRelapseAdviceMatch.length > 0) {
        return {
          shouldDeleteElementImmediately: false,
          sendMessageType: SendMessageType.FollowRelapseAdvice,
          prelimUrl: generatePrelimUrl(compiledUser.username, followRelapseAdvice(usernameConfig.forumType), SendMessageType.FollowRelapseAdvice, usernameConfig),
          messageMatch: toRelapseAdviceMatch
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
      return deleteImmediately;
    }
  }

  // FRESH USER
  if (compiledUser.userType === UserType.FreshUser) {

    // STARTED MESSAGES
    const toStartMatch = matchRegex(toStartAdviceRegexArray, regexTextObject);
    if (!titleText.includes('again') && toStartMatch.length > 0) {
      return freshUserResponse(SendMessageType.StartAdviceStart, toStartMatch, compiledUser, usernameConfig);
    }

    // STARTED AGAIN MESSAGES
    const toStartAgainMatch = matchRegex(toStartAgainRegexArray, regexTextObject);
    if (toStartAgainMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceStartAgain,
        prelimUrl: generatePrelimUrl(compiledUser.username, startAgainAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStartAgain, usernameConfig),
        messageMatch: toStartAgainMatch
      }
    }

    // GENERAL MESSAGES
    const toGeneralAdviceMatch = matchRegex(toGeneralAdviceRegexArray, regexTextObject);
    if (toGeneralAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceGeneral,
        prelimUrl: generatePrelimUrl(compiledUser.username, generalAdvice(usernameConfig.forumType), SendMessageType.StartAdviceGeneral, usernameConfig),
        messageMatch: toGeneralAdviceMatch
      }
    }

    // RELAPSE MESSAGES
    const toRelapseAdviceMatch = matchRegex(toRelapseAdviceRegexArray, regexTextObject);
    if (toRelapseAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceRelapse,
        prelimUrl: generatePrelimUrl(compiledUser.username, relapseAdvice(usernameConfig.forumType), SendMessageType.StartAdviceRelapse, usernameConfig),
        messageMatch: toRelapseAdviceMatch
      }
    }

    // WET DREAM MESSAGES
    const toWetDreamAdviceMatch = matchRegex(toWetDreamAdviceRegexArray, regexTextObject);
    if (toWetDreamAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceWetdreamAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, wetdreamAdvice(usernameConfig.forumType), SendMessageType.StartAdviceWetdreamAdvice, usernameConfig),
        messageMatch: toWetDreamAdviceMatch
      }
    }

    // ACCOUNTABILITY PARTNER MESSAGES
    const toAccountabilityPartnerMatch = matchRegex(toAccountabilityPartnerRegexArray, regexTextObject);
    if (toAccountabilityPartnerMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAccountabilityPartner,
        prelimUrl: generatePrelimUrl(compiledUser.username, accountabilityPartner(usernameConfig.forumType), SendMessageType.StartAccountabilityPartner, usernameConfig),
        messageMatch: toAccountabilityPartnerMatch
      }
    }

    // STRUGGLE MESSAGES
    const toStruggleAdviceMatch = matchRegex(toStruggleAdviceRegexArray, regexTextObject);
    if (toStruggleAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceStruggle,
        prelimUrl: generatePrelimUrl(compiledUser.username, struggleAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStruggle, usernameConfig),
        messageMatch: toStruggleAdviceMatch
      }
    }

    // URGES MESSAGES
    const toDealingWithUrgesAdviceMatch = matchRegex(toDealingWithUrgesAdviceRegexArray, regexTextObject);
    if (toDealingWithUrgesAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartDealingWithUrgesAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, dealingWithUrgesAdvice(usernameConfig.forumType), SendMessageType.StartDealingWithUrgesAdvice, usernameConfig),
        messageMatch: toDealingWithUrgesAdviceMatch
      }
    }

    // BENEFITS MESSAGES
    const toBenefitsAdviceMatch = matchRegex(toBenefitsAdviceRegexArray, regexTextObject);
    if (toBenefitsAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartBiggestBenefitPostAddictionAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, biggestBenefitPostAddictionAdvice(usernameConfig.forumType), SendMessageType.StartBiggestBenefitPostAddictionAdvice, usernameConfig),
        messageMatch: toBenefitsAdviceMatch
      }
    }

    // PORN BLOCKER MESSAGES
    const toPornBlockerAdviceMatch = matchRegex(toPornBlockerAdviceRegexArray, regexTextObject);
    if (toPornBlockerAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdvicePornBlockersAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, pornBlockersAdvice(usernameConfig.forumType), SendMessageType.StartAdvicePornBlockersAdvice, usernameConfig),
        messageMatch: toPornBlockerAdviceMatch
      }
    }

    // CAN YOU STILL MASTURBATE MESSAGES
    const toMasturbationAdviceMatch = matchRegex(toMasturbateWithoutPornAdviceRegexArray, regexTextObject);
    if (toMasturbationAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartMasturbateWithoutPornAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, masturbateWithoutPornAdvice(usernameConfig.forumType), SendMessageType.StartMasturbateWithoutPornAdvice, usernameConfig),
        messageMatch: toMasturbationAdviceMatch
      }
    }

    // DID I JUST RELAPSE MESSAGES
    const toDidIJustRelapseAdviceMatch = matchRegex(toDidIJustRelapseAdviceRegexArray, regexTextObject);
    if (toDidIJustRelapseAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartDidIJustRelapseAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, didIJustRelapseAdvice(usernameConfig.forumType), SendMessageType.StartDidIJustRelapseAdvice, usernameConfig),
        messageMatch: toDidIJustRelapseAdviceMatch
      }
    }

    // WHEN DOES IT GET EASIER MESSAGES
    const toWhenDoesItGetEasierAdviceMatch = matchRegex(toWhenDoesItGetEasierAdviceRegexArray, regexTextObject);
    if (toWhenDoesItGetEasierAdviceMatch.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartWhenDoesItGetEasierAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, whenDoesItGetEasierAdvice(usernameConfig.forumType), SendMessageType.StartWhenDoesItGetEasierAdvice, usernameConfig),
        messageMatch: toWhenDoesItGetEasierAdviceMatch
      }
    }

    // BIGGEST BENEFIT POST ADDICTION
    const toBiggestBenefitPostAddictionAdvice = matchRegex(toBiggestBenefitPostAddictionAdviceRegexArray, regexTextObject);
    if (toBiggestBenefitPostAddictionAdvice.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartBiggestBenefitPostAddictionAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, biggestBenefitPostAddictionAdvice(usernameConfig.forumType), SendMessageType.StartBiggestBenefitPostAddictionAdvice, usernameConfig),
        messageMatch: toBiggestBenefitPostAddictionAdvice
      }
    }

    // PARTNER ADVICE
    const toPartnerAdviceAdvice = matchRegex(toPartnerAdviceRegexArray, regexTextObject);
    if (toPartnerAdviceAdvice.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartPartnerAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, partnerAdvice(usernameConfig.forumType), SendMessageType.StartPartnerAdvice, usernameConfig),
        messageMatch: toPartnerAdviceAdvice
      }
    }

    // NO REASON TO RELAPSE ADVICE
    const toNoReasonToRelapseAdvice = matchRegex(toNoReasonToRelapseAdviceRegexArray, regexTextObject);
    if (toNoReasonToRelapseAdvice.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartNoReasonToRelapseAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, noReasonToRelapseAdvice(usernameConfig.forumType), SendMessageType.StartNoReasonToRelapseAdvice, usernameConfig),
        messageMatch: toNoReasonToRelapseAdvice
      }
    }

    // IS WATCHING PORN RELAPSE?
    const toIsWatchingPornRelapseAdvice = matchRegex(toIsWatchingPornRelapseAdviceRegexArray, regexTextObject);
    if (toIsWatchingPornRelapseAdvice.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceIsWatchingPornRelapseAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, isWatchingPornRelapseAdvice(usernameConfig.forumType), SendMessageType.StartAdviceIsWatchingPornRelapseAdvice, usernameConfig),
        messageMatch: toIsWatchingPornRelapseAdvice
      }
    }

    // AGE ADVICE
    const toAgeAdvice = matchRegex(toAgeAdviceRegexArray, regexTextObject);
    if (toAgeAdvice.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceAge,
        prelimUrl: generatePrelimUrl(compiledUser.username, ageAdvice(usernameConfig.forumType), SendMessageType.StartAdviceAge, usernameConfig),
        messageMatch: toAgeAdvice
      }
    }

    // FLATLINE ADVICE
    const toFlatlineAdvice = matchRegex(toFlatlineAdviceRegexArray, regexTextObject);
    if (toFlatlineAdvice.length > 0) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceFlatline,
        prelimUrl: generatePrelimUrl(compiledUser.username, flatlineAdvice(usernameConfig.forumType), SendMessageType.StartAdviceFlatline, usernameConfig),
        messageMatch: toFlatlineAdvice
      }
    }
  }

  // Final Delete
  const toRemoveFinalMatch = matchRegex(toRemoveFinalRegexArray, regexTextObject);
  if (toRemoveFinalMatch.length > 0) {
    return {
      shouldDeleteElementImmediately: true,
      sendMessageType: undefined,
      prelimUrl: undefined,
      messageMatch: toRemoveFinalMatch
    }
  }

  return {
    shouldDeleteElementImmediately: false,
    sendMessageType: undefined,
    prelimUrl: undefined,
    messageMatch: undefined,
  }
}
