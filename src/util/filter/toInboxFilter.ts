import { SendMessageType, Message, UserType } from '../../types/serverTypes';
import { CompiledFullUserObject, PopulateReceivedMessagePayloadEXTREME } from '../../types/tamperMonkeyTypes';

import { middleGuideNoWorries, middleGuideLinkYou, middleGuideMeditationAdvice } from '../responses/middle';
import { finalJoinSubreddit, finalHardTime } from '../responses/final';

import { toNotRespondRegexArray } from './filterCollections/inbox/toNotRespond';
import { toMeditateGuideRegexArray } from './filterCollections/inbox/toMeditateGuide';
import { toHardTimeRegexArray } from './filterCollections/inbox/toHardTime';

import { toNoWorriesGuideRegexArray } from './filterCollections/inbox/toNoWorries';
import { toLinkYouGuideRegexArray } from './filterCollections/inbox/toLinkYou';
import { toJoinSubredditRegexArray } from './filterCollections/inbox/toJoinSubreddit';

import { StringObjectToMatch, extractRegexMatch } from './regex/regexUtil';
import { matchRegex } from './regex/matchRegex';
import { undefinedMessage, RegexArrayInbox, InboxMatchResponse, calculateInboxRegexArray } from './toInboxFilterUtil';

export const toInboxFilter = (
  messagePayload: PopulateReceivedMessagePayloadEXTREME,
  moreThanOneMessage: boolean
): InboxMatchResponse => {
  const compiledUser: CompiledFullUserObject = messagePayload.compiledUser;
  const lastSentMessage: Message | undefined = compiledUser.lastSentMessage;
  const lastReceivedMessage: Message | undefined = compiledUser.lastReceivedMessage;
  const stringObjectToMatch: StringObjectToMatch = { replyText: messagePayload.message };

  // EDGE
  // Are you a bot?
  const toNotRespondRegexMatch = matchRegex(toNotRespondRegexArray, stringObjectToMatch);
  if (
    compiledUser.userType === UserType.UserHostile
    || toNotRespondRegexMatch.length > 0
  ) {
    console.log(`Not Match - Username: ${compiledUser.username}${toNotRespondRegexMatch.length > 0 ? ` - Match: ${extractRegexMatch(toNotRespondRegexMatch)}` : ''}`)
    return undefinedMessage;
  }

  if (
    lastSentMessage?.type.includes('advice') &&
    (lastSentMessage?.type.includes('start') || lastSentMessage?.type.includes('follow')) &&
    (lastReceivedMessage?.type.includes('start') || lastReceivedMessage?.type.includes('follow'))
    ) {

    const middleRegexMatchArray: RegexArrayInbox[] = [
      { regexArray: toNoWorriesGuideRegexArray, messageText: middleGuideNoWorries, messageType: SendMessageType.MiddleGuideNoWorries },
      { regexArray: toLinkYouGuideRegexArray, messageText: middleGuideLinkYou, messageType: SendMessageType.MiddleGuideLinkYou },
      { regexArray: toMeditateGuideRegexArray, messageText: middleGuideMeditationAdvice, messageType: SendMessageType.MiddleGuideMeditationAdvice },
      // so if all else fails and they don't want the link, BUT they say they meditate then I can throw them a That's fantastic link.
      // I will have to careful check that it DOES NOT contain certain things.
      // { regexArray: toFantasticRegexArray, messageText: finalFantastic, messageType: SendMessageType.FinalFantastic },
      { regexArray: toHardTimeRegexArray, messageText: finalHardTime, messageType: SendMessageType.FinalHardTime },
    ];

    const { matchObject } = calculateInboxRegexArray(middleRegexMatchArray, stringObjectToMatch);

    if (matchObject) {
      return matchObject;
    }
  }

  if (
    !moreThanOneMessage &&
    lastReceivedMessage?.type.includes('middle') &&
    lastSentMessage?.type.includes('middle')
    ) {
      // Join Subreddit
      const toJoinSubredditRegexMatch = matchRegex(toJoinSubredditRegexArray, stringObjectToMatch);
      if (toJoinSubredditRegexMatch.length > 0) {
        return {
          messageText: finalJoinSubreddit,
          messageType: SendMessageType.FinalJoinSubreddit,
          messageMatch: toJoinSubredditRegexMatch,
        }
      }
  }

  return undefinedMessage;
}
