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

export enum MessageType {
  Historic = "Historic",
  NonHistoric = "NonHistoric"
}
