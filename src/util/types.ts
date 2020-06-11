// DB TYPES

export interface User {
  // Database Fields
  username: string;
  isHostile: string;

  userType: string;
  userColor: string;

  lastSentMessage: Message;
  lastReceivedMessage: Message;

  sentCount: number;
  receivedCount: number;
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
