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
} from './filterCollections/sub/toRemove/toRemove';
import { toRelapseAdviceRegexArray } from './filterCollections/sub/toRelapse';
import { toStartAdviceRegexArray } from './filterCollections/sub/toStart';
import { toStartAgainAdviceRegexArray } from './filterCollections/sub/toStartAgain';
import { toGeneralAdviceRegexArray } from './filterCollections/sub/toGeneral';
import { toWetdreamAdviceRegexArray } from './filterCollections/sub/toWetdreamAdvice';
import { toStruggleAdviceRegexArray } from './filterCollections/sub/toStruggle';

import { toAccountabilityPartnerRegexArray } from './filterCollections/sub/toAccountabilityPartner';
import { toDealingWithUrgesAdviceRegexArray } from './filterCollections/sub/toDealingWithUrgesAdvice';
import { toPornBlockersAdviceRegexArray } from './filterCollections/sub/toPornBlockerAdvice';
import { toMasturbateWithoutPornAdviceRegexArray } from './filterCollections/sub/toMasturbateWithoutPornAdvice';
import { toDidIJustRelapseAdviceRegexArray } from './filterCollections/sub/toDidIJustRelapseAdvice';
import { toWhenDoesItGetEasierAdviceRegexArray } from './filterCollections/sub/toWhenDoesItGetEasierAdvice';

import { generatePrelimUrl } from '../utils/sendMessageUtils';
import { isLessThan24Hours } from '../utils/commonUtils';

import { extractRegexMatch, StringObjectToMatch } from './regex/regexUtil';
import { matchRegex } from './regex/matchRegex';

import { toBiggestBenefitPostAddictionAdviceRegexArray } from './filterCollections/sub/toBiggestBenefitPostAddictionAdvice';
import { toPartnerAdviceRegexArray } from './filterCollections/sub/toPartnerAdvice';
import { toIsWatchingPornRelapseAdviceRegexArray } from './filterCollections/sub/toIsWatchingPornRelapseAdvice';
import { toNoReasonToRelapseAdviceRegexArray } from './filterCollections/sub/toNoReasonToRelapseAdvice';
import { toAgeAdviceRegexArray } from './filterCollections/sub/toAgeAdvice';
import { toFlatlineAdviceRegexArray } from './filterCollections/sub/toFlatlineAdvice';
import { deleteImmediately, lessThanOneDayAgo, RegexArraySub, SubMatchResponse, calculateSubRegexArray } from './toSubFilterUtil';

export const toSubFilter = (
  compiledUser: CompiledFullUserObject,
  usernameConfig: ConfigType,
  flairText: string,
  titleText: string,
  messageText: string): SubMatchResponse => {

  const stringObjectToMatch: StringObjectToMatch = { titleText, flairText, messageText };

  // TO REMOVE
  const toRemoveInitialDayResult = toRemoveInitialDay(titleText, flairText, messageText)
  const toRemoveInitialMatch = matchRegex(toRemoveInitialRegexArray, stringObjectToMatch);

  if (flairText !== 'New to NoFap' && flairText !== 'Relapse Report') {
    if (toRemoveInitialDayResult || toRemoveInitialMatch.length > 0) {
      console.log(`Deleted: ${compiledUser.username} - ${flairText} - ${titleText}${toRemoveInitialMatch.length > 0 ? ` - ${extractRegexMatch(toRemoveInitialMatch)}` : ''}`);
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

    // TODO: Extend this to struggle.
    if (compiledUser?.lastSentMessage?.type.includes('start')) {
      const toRelapseAdviceMatch = matchRegex(toRelapseAdviceRegexArray, stringObjectToMatch);
      if (toRelapseAdviceMatch.length > 0) {
        return {
          shouldDeleteElementImmediately: false,
          sendMessageType: SendMessageType.FollowRelapseAdvice,
          prelimUrl: generatePrelimUrl(compiledUser.username, followRelapseAdvice(usernameConfig.forumType), SendMessageType.FollowRelapseAdvice, usernameConfig),
          messageMatch: toRelapseAdviceMatch
        }
      }
    }

    const messageSendDate = compiledUser?.lastSentMessage?.send_date;
    if (messageSendDate && lessThanOneDayAgo(new Date(messageSendDate))) {
      return deleteImmediately;
    }
  }

  // FRESH USER
  if (compiledUser.userType === UserType.FreshUser) {
    const freshUserRegexArray: RegexArraySub[] = [
      // SPECIFIC
      { sendMessageType: SendMessageType.StartAdviceWetdreamAdvice, regexArray: toWetdreamAdviceRegexArray, regexUrlGenerator: wetdreamAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartAccountabilityPartner, regexArray: toAccountabilityPartnerRegexArray, regexUrlGenerator: accountabilityPartner, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartAdviceStruggle, regexArray: toStruggleAdviceRegexArray, regexUrlGenerator: struggleAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartDealingWithUrgesAdvice, regexArray: toDealingWithUrgesAdviceRegexArray, regexUrlGenerator: dealingWithUrgesAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartAdvicePornBlockersAdvice, regexArray: toPornBlockersAdviceRegexArray, regexUrlGenerator: pornBlockersAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartMasturbateWithoutPornAdvice, regexArray: toMasturbateWithoutPornAdviceRegexArray, regexUrlGenerator: masturbateWithoutPornAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartDidIJustRelapseAdvice, regexArray: toDidIJustRelapseAdviceRegexArray, regexUrlGenerator: didIJustRelapseAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartWhenDoesItGetEasierAdvice, regexArray: toWhenDoesItGetEasierAdviceRegexArray, regexUrlGenerator: whenDoesItGetEasierAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartBiggestBenefitPostAddictionAdvice, regexArray: toBiggestBenefitPostAddictionAdviceRegexArray, regexUrlGenerator: biggestBenefitPostAddictionAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartPartnerAdvice, regexArray: toPartnerAdviceRegexArray, regexUrlGenerator: partnerAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartNoReasonToRelapseAdvice, regexArray: toNoReasonToRelapseAdviceRegexArray, regexUrlGenerator: noReasonToRelapseAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartAdviceIsWatchingPornRelapseAdvice, regexArray: toIsWatchingPornRelapseAdviceRegexArray, regexUrlGenerator: isWatchingPornRelapseAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartAdviceFlatline, regexArray: toFlatlineAdviceRegexArray, regexUrlGenerator: flatlineAdvice, condition: true, delete: false },

      // GENERIC
      { sendMessageType: SendMessageType.StartAdviceStart, regexArray: toStartAdviceRegexArray, regexUrlGenerator: startAdvice, condition: !titleText.includes('again') || !titleText.includes('yet again'), delete: false },
      { sendMessageType: SendMessageType.StartAdviceStartAgain, regexArray: toStartAgainAdviceRegexArray, regexUrlGenerator: startAgainAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartAdviceGeneral, regexArray: toGeneralAdviceRegexArray, regexUrlGenerator: generalAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartAdviceRelapse, regexArray: toRelapseAdviceRegexArray, regexUrlGenerator: relapseAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartAdviceAge, regexArray: toAgeAdviceRegexArray, regexUrlGenerator: ageAdvice, condition: true, delete: false },

      // FLAIRS
      { sendMessageType: SendMessageType.StartAdviceStruggle, regexArray: [ { flairText: /Slip-Up Prevention/ } ], regexUrlGenerator: struggleAdvice, condition: true, delete: false },
      { sendMessageType: SendMessageType.StartAdviceStruggle, regexArray: [ { flairText: /Victory/ }, { flairText: /Success Story/ } ], regexUrlGenerator: generalAdvice, condition: true, delete: true },
      { sendMessageType: SendMessageType.StartAdviceRelapse, regexArray: [ { flairText: /Relapse Report/ } ], regexUrlGenerator: relapseAdvice, condition: true, delete: false },
      // { flairText: /New To NoFap/i }, // please don't do this again, it's simply not useful and is not actually new people half the time.
    ];

    const { matchObject } = calculateSubRegexArray(freshUserRegexArray, compiledUser, stringObjectToMatch, usernameConfig);

    if (matchObject) {
      return matchObject;
    }
  }

  // Final Delete
  const toRemoveFinalMatch = matchRegex(toRemoveFinalRegexArray, stringObjectToMatch);
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

// Do I have a fapping addiction -

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
