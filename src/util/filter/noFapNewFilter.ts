import { SendMessageType, UserType } from '../../types/serverTypes';
import { generatePrelimUrl } from '../sendMessageUtils';
import { CompiledFullUserObject } from '../../types/tamperMonkeyTypes';
import { startAdvice, startAgainAdvice, generalAdvice, relapseAdvice, wetdreamAdvice, accountabilityPartner } from '../responses/start';
import { ConfigType } from '../config';
import { finalJoinSubreddit, finalFantastic } from '../responses/final';

import { toRemoveInitial, toStartedAdvice, toStartedAgainAdvice, toGeneralAdvice, toRelapseAdvice, toWetDreamAdvice, toAccountabilityPartner, toRemoveFinal, toRemoveInitialDay } from './filter1';
import { followRelapseAdvice } from '../responses/follow';


export const filterNewNoFapMessages = (compiledUser: CompiledFullUserObject, usernameConfig: ConfigType, flairText: string, titleText: string, messageText: string): {
  shouldDeleteElementImmediately: boolean,
  sendMessageType: SendMessageType | undefined,
  prelimUrl: string | undefined
} => {

  // TO REMOVE
  if (
    toRemoveInitial(titleText, flairText)
    || toRemoveInitialDay(titleText, flairText, messageText)
  ) {
    console.log(`Deleted: ${compiledUser.username} - ${flairText} - ${titleText}`);
    return {
      shouldDeleteElementImmediately: true,
      sendMessageType: undefined,
      prelimUrl: undefined
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

  // USER NOT RESPONDED
  if (compiledUser.userType === UserType.UserNotRespondedBack) {
    // FOLLOW MESSAGES
    if (compiledUser?.lastSentMessage?.type.includes('start')) {
      if (toRelapseAdvice(titleText, flairText)) {
        return {
          shouldDeleteElementImmediately: false,
          sendMessageType: SendMessageType.FollowRelapseAdvice,
          prelimUrl: generatePrelimUrl(compiledUser.username, followRelapseAdvice(usernameConfig.forumType), SendMessageType.FollowRelapseAdvice)
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
    if (toStartedAdvice(titleText, flairText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceStart,
        prelimUrl: generatePrelimUrl(compiledUser.username, startAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStart)
      }
    }

    // STARTED AGAIN MESSAGES
    if (toStartedAgainAdvice(titleText, flairText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceStartAgain,
        prelimUrl: generatePrelimUrl(compiledUser.username, startAgainAdvice(usernameConfig.forumType), SendMessageType.StartAdviceStartAgain)
      }
    }

    // GENERAL MESSAGES
    if (toGeneralAdvice(titleText, flairText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceGeneral,
        prelimUrl: generatePrelimUrl(compiledUser.username, generalAdvice(usernameConfig.forumType), SendMessageType.StartAdviceGeneral)
      }
    }

    // RELAPSE MESSAGES
    if (toRelapseAdvice(titleText, flairText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceRelapse,
        prelimUrl: generatePrelimUrl(compiledUser.username, relapseAdvice(usernameConfig.forumType), SendMessageType.StartAdviceRelapse)
      }
    }

    // WET DREAM MESSAGES
    if (toWetDreamAdvice(titleText, flairText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAdviceWetdreamAdvice,
        prelimUrl: generatePrelimUrl(compiledUser.username, wetdreamAdvice(usernameConfig.forumType), SendMessageType.StartAdviceWetdreamAdvice)
      }
    }

    // ACCOUNTABILITY PARTNER MESSAGES
    if (toAccountabilityPartner(titleText, flairText)) {
      return {
        shouldDeleteElementImmediately: false,
        sendMessageType: SendMessageType.StartAccountabilityPartner,
        prelimUrl: generatePrelimUrl(compiledUser.username, accountabilityPartner(usernameConfig.forumType), SendMessageType.StartAccountabilityPartner)
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
  if (toRemoveFinal(titleText, flairText)) {
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
