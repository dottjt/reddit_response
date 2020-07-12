// DB TYPES

import { ForumType } from '../util/config'

export type User = {
  // Database Fields
  id: string;
  username: string;
  is_hostile?: boolean;
  is_historic?: boolean;
  user_chat_function_utilised?: boolean;
}

export enum UserType {
  FreshUser="Fresh User",
  UserNotRespondedBack="User Not Responded Back",
  UserRespondedBack="User Responded Back",
  UserHostile="Hostile User",
}

export type UserNote = {
  id: string;
  username: string;
  message: string;
}

// TODO Use in UserPanel
export enum SendMessageType {
  StartCustom = 'start:custom',
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
  StartNoReasonToRelapse = 'start:advice:noReasonToRelapse',
  StartAccountabilityPartner = 'start:accountability:accountabilityPartner',
  StartStraightToGuide = 'start:advice:straightToGuide',

  MiddleCustom = 'middle:custom',
  MiddleGuideIfYouWouldLikeToLearnMore = 'middle:guide:learnmore',
  MiddleGuideNoWorries = 'middle:guide:noworries',
  MiddleGuideLinkYou = 'middle:guide:linkyou',

  FinalHardTime = 'final:disagree:hardTime',
  FinalFantastic = 'final:agree:fantastic',
  FinalJoinSubreddit = 'final:join:subreddit',

  UserReply = 'user:reply:custom',
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
