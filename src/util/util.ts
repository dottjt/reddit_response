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

const toISOTimezoneString = (date) => {
  var tzo = - date.getTimezoneOffset(),
      dif = tzo >= 0 ? '+' : '-',
      pad = function(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
      };
  return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':' + pad(date.getMinutes()) +
      ':' + pad(date.getSeconds()) +
      dif + pad(tzo / 60) +
      ':' + pad(tzo % 60);
}

export const toMelbourneDateString = (date) => {
  const aestTime = date.toLocaleString("en-US", {timeZone: "Australia/Melbourne"});
  const timeZoneDate = toISOTimezoneString(new Date(aestTime));

  return timeZoneDate;
}
