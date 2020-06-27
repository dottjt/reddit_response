// DB TYPES

export interface User {
  // Database Fields
  id: string;
  username: string;
  is_hostile?: boolean;
  is_historic?: boolean;
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
  Historic = "Historic",
  NonHistoric = "NonHistoric"
}
