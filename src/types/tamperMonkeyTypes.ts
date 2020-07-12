import { Message, UserType, SendMessageType } from "./serverTypes";
import { ConfigType } from '../util/config';

export type CompiledFullUserObject = {
  username: string;
  is_hostile?: boolean;
  user_chat_function_utilised?: boolean;

  userType: UserType;
  userColor: string;

  lastSentMessage?: Message;
  lastReceivedMessage?: Message;

  sentCount: number;
  receivedCount: number;

  messageTypesSent?: string[];
}

export type SendUserNotePayload = {
  username: string;
  message: string;
}

export type SetMarkerPayload = {
  username: string;
  usernameConfig: ConfigType;
}

export type SendNewMessageSendPayload = {
  username_sending: string;
  username_receiving: string;
  subject: string;
  message: string;
  send_date: string;
  type: SendMessageType;
}

export type PopulateReceivedMessagesPayload = {
  containerDiv?: Element;
  subject: string;
  subjectReplyToTitle: string;
  username_receiving: string;
  username_sending: string;
  message: SendMessageType;
  date: string;
  type: SendMessageType;
}
