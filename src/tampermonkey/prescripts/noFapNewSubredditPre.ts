
import { sendPostRequest } from '../util/httpResponses';
import { appendUserInformation } from '../util/createNodes';
import {
  scrollToSpecifiedDate,
  getAllNoFapNewUsernames,
} from '../util/commonUtils';

'use strict';

const TIMEFRAME = '1 hour ago';
// const TIMEFRAME = '2 hours ago';
// const TIMEFRAME = '1 day ago';
// const TIMEFRAME = '2 days ago';

const populateWebpageInformation = (users) => {
  const allATags = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/'));
  
  filteredATags.forEach(tag => {
    const tagUsername = tag.innerText.split('/')[1];
    const dbUser = users.find(user => user.username === tagUsername);

    if (dbUser) {
      appendUserInformation(tag, dbUser);
    }
  });
}

const main = async () => {
  console.log('START: start script');

  await scrollToSpecifiedDate(TIMEFRAME);
  const dataPayload: { usernames: string[] } = { usernames: getAllNoFapNewUsernames() };
  const usernamesResponse = await sendPostRequest(dataPayload, '/checkUsernames');
  const users = usernamesResponse.data.users;

  populateWebpageInformation(users);

  console.log('END: script complete');
};

main();
