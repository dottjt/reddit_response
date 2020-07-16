import { SendMessageType, Message, UserType } from '../../types/serverTypes';
import { CompiledFullUserObject, PopulateReceivedMessagesPayloadEXTREME } from '../../types/tamperMonkeyTypes';
import { middleGuideNoWorries, middleGuideLinkYou, middleGuideMeditationAdvice } from '../responses/middle';
import { finalJoinSubreddit, finalFantastic, finalHardTime } from '../responses/final';

import { toNoWorriesGuide, toLinkYouGuide, toHardTime, toJoinSubreddit, toMeditateGuide } from './messageInboxFilterLogic';

export const filterRedditInboxMessages = (
  messagePayload: PopulateReceivedMessagesPayloadEXTREME,
  moreThanOneMessage: boolean
): {
  messageText: string | undefined;
  messageType: SendMessageType | undefined;
} => {
  const compiledUser: CompiledFullUserObject = messagePayload.compiledUser;
  const lastSentMessage: Message | undefined = compiledUser.lastSentMessage;


  if (compiledUser.userType === UserType.UserHostile) {
    return {
      messageText: undefined,
      messageType: undefined,
    }
  }

  if (new RegExp(/(paid|free)/i).test(messagePayload.message)) {
    return {
      messageText: undefined,
      messageType: undefined,
    }
  }

  if (
    (lastSentMessage?.type.includes('start') || lastSentMessage?.type.includes('follow')) &&
    (messagePayload.type === SendMessageType.UserReplyStart || messagePayload.type === SendMessageType.UserReplyFollow)
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

  // so this is broken. because once you go to a page that has the same text i.e. from unread to read it will send this automatically again to someone who's already received it.
  // therefore, this also need to know that the recieved messages from that used is exactly two
  // of course this breaks if the user sends two messages, so I'll have to look into this.
  // in addition it should check time last message was sent by ME and last message sent by them. if they are within a similar time span, then perhaps don't send it.

  // the other flaw in this system is that it should check all messages sent by the user on this page and count them as one, not just one separately. It shouldn't count them like that, it's broken.

  // TODO: DO NOT do this if there are more than two messages on the screen at once. Because it might think the other message is the "BAD one"
  // basically only triggers poorly if
  if (
    !moreThanOneMessage &&
    messagePayload.type === SendMessageType.UserReplyMiddle &&
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

  // Are you a bot?

  return {
    messageText: undefined,
    messageType: undefined,
  }
}