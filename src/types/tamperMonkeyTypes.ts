import { Message } from "./serverTypes";

export type CompiledFullUserObject = {
  username: string;
  is_hostile: string;

  userType: string;
  userColor: string;

  lastSentMessage?: Message;
  lastReceivedMessage?: Message;

  sentCount: number;
  receivedCount: number;

  messageTypesSent?: string[];
}

export type SendNewMessageSendPayload = {
  username_sending: string;
  username_receiving: string;
  subject: string;
  message: string;
  send_date: string;
  type: string;
}

export type PopulateReceivedMessagesPayload = {
  subject: string;
  subjectReplyToTitle: string;
  recipient: string;
  message: string;
  date: string;
}