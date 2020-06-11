import { User, Message } from '../util/types';


export const calculateUserStatistics = (user: User, sentCount: number, receivedCount: number): { userType: string, userColor: string } => {
  let userType;
  let userColor;

  if (sentCount === 0 && receivedCount === 0) {
    userType = 'Fresh User!';
    userColor = 'green';
  };

  if (sentCount > 0 && receivedCount === 0) {
    userType = 'User not responded to you.';
    userColor = 'purple';
  };

  if (sentCount > 0 && receivedCount > 0) {
    userType = 'User already corresponded with.';
    userColor = 'blue';
  };

  if (user?.isHostile) {
    userType = 'HOSTILE';
    userColor = 'red';
  }

  return {
    userType,
    userColor
  }
};
