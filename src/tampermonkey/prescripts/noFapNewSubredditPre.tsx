import React from 'react';
import ReactDOM from 'react-dom';

import { checkUsernamesFetch } from '../util/httpResponses';

import {
  scrollToSpecifiedDate,
  getAllNoFapNewUsernames,
  addGlobalStyle,
} from '../util/commonUtils';
import mainCss from '../util/mainCss';

import { CompiledFullUserObject } from '../../types/tamperMonkeyTypes';

import UserInformation from '../../components/UserInformation';

'use strict';

addGlobalStyle(mainCss);

// const TIMEFRAME = 'NA';
const TIMEFRAME = '1 hour ago';
// const TIMEFRAME = '4 hours ago';
// const TIMEFRAME = '1 day ago';
// const TIMEFRAME = '2 days ago';

const populateWebpageInformation = (users: CompiledFullUserObject[]) => {
  const allATags: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/'));

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

      ReactDOM.render(<UserInformation dbUser={dbUser} />, domContainer);
    }
  });
}

const setLocalDelayTimer = () => {
  window.localStorage.setItem('delayTimer', '10000');

  console.log('delayTimerNumber', '10000');

  setInterval(function() {
    const delayTimer = window.localStorage.getItem('delayTimer');
    const delayTimerNumber = Number(delayTimer);

    if (delayTimerNumber > 10000) {
      console.log('delayTimerNumber', delayTimerNumber);

      const delayTimerNumberLessOne = delayTimerNumber - 1000;
      window.localStorage.setItem('delayTimer', delayTimerNumberLessOne.toString());
    }
  }, 1000);
}

const main = async () => {
  console.log('START: start script');

  setLocalDelayTimer();

  await scrollToSpecifiedDate(TIMEFRAME);
  const dataPayload: { usernames: string[] } = { usernames: getAllNoFapNewUsernames() };
  const users: CompiledFullUserObject[] = await checkUsernamesFetch(dataPayload);
  populateWebpageInformation(users);

  console.log('END: script complete');
};

// @ts-ignore
if (TIMEFRAME !== 'NA') {
  main();
}

