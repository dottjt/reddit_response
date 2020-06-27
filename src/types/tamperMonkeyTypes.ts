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
