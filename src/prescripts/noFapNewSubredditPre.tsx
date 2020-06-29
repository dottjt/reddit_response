import React from 'react';
import ReactDOM from 'react-dom';

import { checkUsernamesFetch } from '../util/httpResponses';

import {
  scrollToSpecifiedDate,
  getAllNoFapNewUsernames,
  addGlobalStyle,
} from '../util/commonUtils';
import mainCss from '../util/mainCss';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

import UserPanel from '../components/UserPanel';
import { TIMEFRAME, USERNAME } from '../util/config'

'use strict';

addGlobalStyle(mainCss);

const populateWebpageInformation = (users: CompiledFullUserObject[]) => {
  const allATags: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/'));

  const totalCount = filteredATags.length;
  filteredATags.forEach((tag, index) => {

    const tagUsername: string = tag.innerText.split('/')[1];
    const dbUser: CompiledFullUserObject | undefined = users.find(user => user.username === tagUsername);

    if (dbUser) {
      const rootId = `r${tagUsername}-${index}`;
      const root = document.createElement('div');
      root.id = rootId;
      tag.parentNode.insertBefore(root, tag);
      tag.remove();

      const domContainer = document.querySelector(`#${rootId}`);

      ReactDOM.render(<UserPanel dbUser={dbUser} />, domContainer);
      console.log(`${index} rendered of ${totalCount}.`)
    }
  });
}

const main = async () => {
  console.log('START: start script');

  window.localStorage.setItem('delayTimer', '10000');

  console.log('timeframe: ', TIMEFRAME, 'username: ',  USERNAME);
  await scrollToSpecifiedDate(TIMEFRAME, USERNAME);
  const dataPayload: { usernames: string[] } = { usernames: getAllNoFapNewUsernames() };
  const users: CompiledFullUserObject[] = await checkUsernamesFetch(dataPayload);
  populateWebpageInformation(users);

  console.log('END: script complete');
};

main();
