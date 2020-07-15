import { SendMessageType, Message, UserType } from '../../types/serverTypes';
import { generatePrelimUrl } from '../sendMessageUtils';
import { CompiledFullUserObject, PopulateReceivedMessagesPayload } from '../../types/tamperMonkeyTypes';
import { startAdvice, startAgainAdvice, generalAdvice, relapseAdvice, wetdreamAdvice } from '../responses/start';
import { ConfigType } from '../config';
import { middleGuideNoWorries, middleGuideLinkYou } from '../responses/middle';
import { finalJoinSubreddit, finalFantastic } from '../responses/final';

import { toRemoveInitial, toStartedAdvice, toStartedAgainAdvice, toGeneralAdvice, toRelapseAdvice, toWetDreamAdvice, toAccountabilityPartner } from './filterSend';
import { toNoWorriesGuide, toLinkYouGuide } from './filterReply';
import { followRelapseAdvice } from '../responses/follow';


export const filterNewNoFapMessages = (compiledUser: CompiledFullUserObject, usernameConfig: ConfigType, flairText: string, titleText: string): {
  shouldDeleteElementImmediately: boolean,
  sendMessageType: SendMessageType | undefined,
  prelimUrl: string | undefined
} => {

  // TODO: Check message text first for useful keywords, such as  struggle, advice etc.

  // TO REMOVE
  if (toRemoveInitial(titleText, flairText)) {
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
        prelimUrl: generatePrelimUrl(compiledUser.username, startAdvice(usernameConfig.forumType), SendMessageType.StartAccountabilityPartner)
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
  // if (toRemoveFinal(titleText, flairText)) {
  //   return {
  //     shouldDeleteElementImmediately: true,
  //     sendMessageType: undefined,
  //     prelimUrl: undefined
  //   }
  // }

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
  // TODO: Should I be checking usertype? Possible. Like if hostile user, then never send anything, ever.

  if (compiledUser.userType === UserType.UserHostile) {
    return {
      messageText: undefined,
      messageType: undefined,
    }
  }

  // If it says paid/free then don't send it just yet. Might have to have a custom message for this one.
  if (new RegExp(/(paid|free)/i).test(messagePayload.message)) {
    return {
      messageText: undefined,
      messageType: undefined,
    }
  }

  if (lastMessage?.type.includes('start') || lastMessage?.type.includes('follow')) {
    // No Worries
    if (toNoWorriesGuide(messagePayload)) {
      return {
        messageText: middleGuideNoWorries, // lastMessage.forum
        messageType: SendMessageType.MiddleGuideNoWorries,
      }
    }

    // Link You
    if (toLinkYouGuide(messagePayload)) {
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
  //     || new RegExp(/(I'll|ill|I will) ?(.*) (check|checkout|check it|check out)/i).test(messagePayload.message)
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