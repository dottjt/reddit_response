// DB TYPES

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

export type Message = {
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
