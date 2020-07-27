// DB TYPES

import { ForumType } from '../util/config';

type LinkSentObject = {
  website_homepage_link_sent?: boolean;
  subreddit_link_sent?: boolean;
  discord_link_sent?: boolean;
  podcast_link_sent?: boolean;
}

export type User = {
  // Database Fields
  id: string;
  username: string;
  is_hostile?: boolean;
  is_historic?: boolean;
  forum_type: string;
  user_chat_function_utilised?: boolean;
} & LinkSentObject;

export enum UserType {
  FreshUser="Fresh User",
  UserNotRespondedBack="User Not Responded Back",
  FollowMessageSent="User Follow Message Sent",
  UserRespondedBack="User Responded Back",
  UserHostile="Hostile User",
}

export type UserNote = {
  id: string;
  username: string;
  message: string;
}

export enum SendMessageType {
  StartAdviceStart = 'start:advice:start',
  StartAdviceStartAgain = 'start:advice:startAgain',
  StartAdviceGeneral = 'start:advice:general',
  StartAdviceRelapse = 'start:advice:relapse',
  StartAdviceStruggle = 'start:advice:struggle',
  StartAdviceAge = 'start:advice:age',
  StartAdviceAbstain = 'start:advice:abstain',
  StartAdviceFlatline = 'start:advice:flatline',
  StartAdviceWetdreamAdvice = 'start:advice:wetdreamAdvice',
  StartAdvicePornBlockersAdvice = 'start:advice:pornBlockersAdvice',
  StartAdviceIsWatchingPornRelapseAdvice = 'start:advice:isWatchingPornRelapseAdvice',
  StartNoReasonToRelapseAdvice = 'start:advice:noReasonToRelapse',
  StartAccountabilityPartner = 'start:accountability:accountabilityPartner',
  // StartStraightToGuide = 'start:advice:straightToGuide',
  StartPartnerAdvice = 'start:advice:partner',
  StartMasturbateWithoutPornAdvice = 'start:advice:masturbateWithoutPorn',
  StartBiggestBenefitPostAddictionAdvice = 'start:advice:biggestBenefitPostAddiction',
  StartDealingWithUrgesAdvice = 'start:advice:dealingWithUrges',
  StartDidIJustRelapseAdvice = 'start:advice:didIJustRelapseAdvice',
  StartWhenDoesItGetEasierAdvice = 'start:advice:whenDoesItGetEasierAdvice',

  MiddleGuideIfYouWouldLikeToLearnMore = 'middle:guide:learnmore',
  MiddleGuideNoWorries = 'middle:guide:noworries',
  MiddleGuideLinkYou = 'middle:guide:linkyou',
  MiddleGuideMeditationAdvice = 'middle:guide:meditationAdvice',

  FinalHardTime = 'final:disagree:hardTime',
  FinalFantastic = 'final:agree:fantastic',
  FinalJoinSubreddit = 'final:join:subreddit',
  FinalShareResources = 'final:share:resources',

  FollowRelapseAdvice = 'follow:advice:relapse',
  FollowMeditationAdvice = 'follow:advice:meditation',
  FollowStruggleAdvice = 'follow:advice:struggle',
  FollowNotSmoothlyAdvice = 'follow:advice:notSmoothly',

  UserReplyCustom = 'user:reply:custom',
  UserReplyStart = 'user:reply:start',
  UserReplyMiddle = 'user:reply:middle',
  UserReplyFinal = 'user:reply:final',
  UserReplyFollow = 'user:reply:follow',

  NFDCustomSend = 'nfd:custom:send',

  NA = 'NA'
};

export type Message = {
  id: string;
  username_sending: string;
  username_receiving: string;
  subject: string;
  text: string;
  forum?: ForumType;
  type: SendMessageType;
  send_date: string;
}

export enum MessageType {
  Historic = "Historic",
  NonHistoric = "NonHistoric"
}

export type LastMessageType = {
  type: string;
  colour: string;
}

export enum UserForumType {
  NoFap = 'NoFap',
  Reddit = 'Reddit',
}

export type Match = {
  id: string;
  username: string;
  match_type: string;
  match_regex: string;
  matched_text_type: string;
  flair_text: string;
  title_text: string;
  message_text: string;
  original_match_text: string;
}