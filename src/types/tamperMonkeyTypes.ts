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

export type SendUserNotePayload = {
  username: string;
  message: string;
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
  containerDiv?: Element;
  subject: string;
  subjectReplyToTitle: string;
  username_receiving: string;
  username_sending: string;
  message: string;
  date: string;
  type: string;
}
