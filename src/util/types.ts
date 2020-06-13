// DB TYPES

export interface User {
  // Database Fields
  username: string;
  is_hostile: string;

  userType: string;
  userColor: string;

  lastSentMessage: Message;
  lastReceivedMessage: Message;

  sentCount: number;
  receivedCount: number;

  typesSent: string[];
}

export interface Message {
  id: string;
  username_sending: string;
  username_receiving: string;
  subject: string;
  text: string;
  type: string;
  send_date: string;
}

export interface PopulateHistoricMessagePayload {
  subject: string;
  recipient: string;
  message: string;
  date: string;
}


export enum MessageType {
  Historic = "historic",

}