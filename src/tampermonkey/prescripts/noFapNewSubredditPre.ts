
import { checkUsernamesFetch } from '../util/httpResponses';
import { appendUserInformation } from '../util/createNodes';

import {
  scrollToSpecifiedDate,
  getAllNoFapNewUsernames,
} from '../util/commonUtils';

import { CompiledFullUserObject } from '../../types/tamperMonkeyTypes';

'use strict';

const TIMEFRAME = '1 hour ago';
// const TIMEFRAME = '2 hours ago';
// const TIMEFRAME = '1 day ago';
// const TIMEFRAME = '2 days ago';

const populateWebpageInformation = (users: CompiledFullUserObject[]) => {
  const allATags: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/'));

  filteredATags.forEach((tag, index) => {

    const tagUsername: string = tag.innerText.split('/')[1];
    const dbUser: CompiledFullUserObject | undefined = users.find(user => user.username === tagUsername);

    if (dbUser) {
      tag.id = `${tagUsername}-${index}`;
      appendUserInformation(tag, dbUser);
    }
  });
}

const main = async () => {
  console.log('START: start script');

  await scrollToSpecifiedDate(TIMEFRAME);
  const dataPayload: { usernames: string[] } = { usernames: getAllNoFapNewUsernames() };
  const users: CompiledFullUserObject[] = await checkUsernamesFetch(dataPayload);
  populateWebpageInformation(users);

  console.log('END: script complete');
};

main();
