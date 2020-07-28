import { SendMessageType, Message, UserType } from '../../types/serverTypes';
import { CompiledFullUserObject, PopulateReceivedMessagePayloadEXTREME } from '../../types/tamperMonkeyTypes';

import { middleGuideNoWorries, middleGuideLinkYou, middleGuideMeditationAdvice } from '../responses/middle';
import { finalJoinSubreddit, finalFantastic, finalHardTime } from '../responses/final';

import { toNotRespondRegexArray } from './filterCollections/inbox/toNotRespond';
import { toMeditateGuideRegexArray } from './filterCollections/inbox/toMeditateGuide';
import { toHardTimeRegexArray } from './filterCollections/inbox/toHardTime';

import { toNoWorriesGuideRegexArray } from './filterCollections/inbox/toNoWorries';
import { toLinkYouGuideRegexArray } from './filterCollections/inbox/toLinkYou';
import { toJoinSubredditRegexArray } from './filterCollections/inbox/toJoinSubreddit';
import { toFantasticRegexArray } from './filterCollections/inbox/toFantastic';

import { MatchRegExpResponse } from './regex/regexUtil';
import { matchRegex } from './regex/matchRegex';

export const toInboxFilter = (
  messagePayload: PopulateReceivedMessagePayloadEXTREME,
  moreThanOneMessage: boolean
): {
  messageText: string | undefined;
  messageType: SendMessageType | undefined;
  messageMatch: MatchRegExpResponse[] | undefined
} => {
  const compiledUser: CompiledFullUserObject = messagePayload.compiledUser;
  const lastSentMessage: Message | undefined = compiledUser.lastSentMessage;
  const lastReceivedMessage: Message | undefined = compiledUser.lastReceivedMessage;
  const stringsToMatch = { replyText: messagePayload.message };

  // EDGE
  // Are you a bot?
  const toNotRespondRegexMatch = matchRegex(toNotRespondRegexArray, stringsToMatch);
  if (
    compiledUser.userType === UserType.UserHostile
    || toNotRespondRegexMatch.length > 0
  ) {
    return {
      messageText: undefined,
      messageType: undefined,
      messageMatch: undefined,
    }
  }

  if (
    lastSentMessage?.type.includes('advice') &&
    (lastSentMessage?.type.includes('start') || lastSentMessage?.type.includes('follow')) &&
    (lastReceivedMessage?.type.includes('start') || lastReceivedMessage?.type.includes('follow'))
    ) {
      // No Worries
      const toNoWorriesGuideRegexMatch = matchRegex(toNoWorriesGuideRegexArray, stringsToMatch);
      if (toNoWorriesGuideRegexMatch.length > 0) {
        return {
          messageText: middleGuideNoWorries, // lastSentMessage.forum
          messageType: SendMessageType.MiddleGuideNoWorries,
          messageMatch: toNoWorriesGuideRegexMatch,
        }
      }

      // Link You
      const toLinkYouGuideRegexMatch = matchRegex(toLinkYouGuideRegexArray, stringsToMatch);
      if (toLinkYouGuideRegexMatch.length > 0) {
        return {
          messageText: middleGuideLinkYou,
          messageType: SendMessageType.MiddleGuideLinkYou,
          messageMatch: toLinkYouGuideRegexMatch,
        }
      }

      // Meditation
      const toMeditateGuideRegexMatch = matchRegex(toMeditateGuideRegexArray, stringsToMatch);
      if (toMeditateGuideRegexMatch.length > 0) {
        return {
          messageText: middleGuideMeditationAdvice,
          messageType: SendMessageType.MiddleGuideMeditationAdvice,
          messageMatch: toMeditateGuideRegexMatch,
        }
      }

      // // That's fantastic
      // so if all else fails and they don't want the link, BUT they say they meditate then I can throw them a That's fantastic link.
      // I will have to careful check that it DOES NOT contain certain things.
      // const toFantasticRegexMatch = matchRegex(toFantasticRegexArray, stringsToMatch);
      // if (toFantasticRegexMatch.length > 0) {
      //   return {
      //     messageText: finalFantastic,
      //     messageType: SendMessageType.FinalFantastic,
      //   }
      // }

      const toHardTimeRegexMatch = matchRegex(toHardTimeRegexArray, stringsToMatch);
      if (toHardTimeRegexMatch.length > 0) {
        return {
          messageText: finalHardTime,
          messageType: SendMessageType.FinalHardTime,
          messageMatch: toHardTimeRegexMatch,
        }
      }
  }

  if (
    !moreThanOneMessage &&
    lastReceivedMessage?.type.includes('middle') &&
    lastSentMessage?.type.includes('middle')
    ) {
      // Join Subreddit
      const toJoinSubredditRegexMatch = matchRegex(toJoinSubredditRegexArray, stringsToMatch);
      if (toJoinSubredditRegexMatch.length > 0) {
        return {
          messageText: finalJoinSubreddit,
          messageType: SendMessageType.FinalJoinSubreddit,
          messageMatch: toJoinSubredditRegexMatch,
        }
      }
  }

  return {
    messageText: undefined,
    messageType: undefined,
    messageMatch: undefined,
  }
}
