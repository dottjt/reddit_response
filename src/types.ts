export interface User {
  username: string;
}

export interface Message {
  from: User;
  to: User;
  
}