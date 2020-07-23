import { SendMessageType, Message, UserType } from '../../types/serverTypes';
import { CompiledFullUserObject, PopulateReceivedMessagePayloadEXTREME } from '../../types/tamperMonkeyTypes';

import { middleGuideNoWorries, middleGuideLinkYou, middleGuideMeditationAdvice } from '../responses/middle';
import { finalJoinSubreddit, finalFantastic, finalHardTime } from '../responses/final';

import { toNotRespond } from './filterCollections/inbox/toNotRespond';
import { toMeditateGuide } from './filterCollections/inbox/toMeditateGuide';
import { toHardTime } from './filterCollections/inbox/toHardTime';

import { toNoWorriesGuide } from './filterCollections/inbox/toNoWorries';
import { toLinkYouGuide } from './filterCollections/inbox/toLinkYou';
import { toJoinSubreddit } from './filterCollections/inbox/toJoinSubreddit';

export const toInboxFilter = (
  messagePayload: PopulateReceivedMessagePayloadEXTREME,
  moreThanOneMessage: boolean
): {
  messageText: string | undefined;
  messageType: SendMessageType | undefined;
} => {
  const compiledUser: CompiledFullUserObject = messagePayload.compiledUser;
  const lastSentMessage: Message | undefined = compiledUser.lastSentMessage;
  const lastReceivedMessage: Message | undefined = compiledUser.lastReceivedMessage;

  // EDGE
  // Are you a bot?

  if (
    compiledUser.userType === UserType.UserHostile
    || new RegExp(/(paid|free)/i).test(messagePayload.message)
    || toNotRespond(messagePayload)
  ) {
    return {
      messageText: undefined,
      messageType: undefined,
    }
  }

  if (
    lastSentMessage?.type.includes('advice') &&
    (lastSentMessage?.type.includes('start') || lastSentMessage?.type.includes('follow')) &&
    (lastReceivedMessage?.type.includes('start') || lastReceivedMessage?.type.includes('follow'))
    ) {
      // No Worries
      if (toNoWorriesGuide(messagePayload)) {
        return {
          messageText: middleGuideNoWorries, // lastSentMessage.forum
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

      // Meditation
      if (toMeditateGuide(messagePayload)) {
        return {
          messageText: middleGuideMeditationAdvice,
          messageType: SendMessageType.MiddleGuideMeditationAdvice,
        }
      }

      // That's fantastic
      // so if all else fails and they don't want the link, BUT they say they meditate then I can throw them a That's fantastic link.
      // I will have to careful check that it DOES NOT contain certain things.
      // if (
      //   new RegExp(//i).test(messagePayload.message)
      //   || new RegExp(//i).test(messagePayload.message) // will need to actually test this.
      // ) {
      //   return {
      //     messageText: finalFantastic,
      //     messageType: SendMessageType.FinalFantastic,
      //   }
      // }

      if (toHardTime(messagePayload)) {
        return {
          messageText: finalHardTime,
          messageType: SendMessageType.FinalHardTime,
        }
      }
  }

  if (
    !moreThanOneMessage &&
    lastReceivedMessage?.type.includes('middle') &&
    lastSentMessage?.type.includes('middle')
    ) {
      // Join Subreddit
      if (toJoinSubreddit(messagePayload)) {
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
