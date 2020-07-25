
import { checkUsernames } from '../util/httpResponses';

import {
  scrollToSpecifiedDate,
  getAllNoFapNewUsernames,
  scrollToMarker,
  isServerRunning,
  createPrelimContainer,
  createPrelimLink,
  renderUserPanel,
} from '../util/utils/noFapNewSubredditUtils';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

import {
  TIMEFRAME,
  ConfigType,
  getUsernameMarker
} from '../util/config'
import { toSubFilter } from '../util/filter/toSubFilter';
import { UserForumType } from '../types/serverTypes';

'use strict';

const populateWebpageInformation = (users: CompiledFullUserObject[], usernameConfig: ConfigType) => {
  const allATags: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/') && !tag.innerText.includes(' '));
  createPrelimContainer(filteredATags)

  const prelimContainer = document.querySelector('#reade-automate-container');

  let alreadyPrelimUrlUsernameList: string[] = [];

  filteredATags.forEach((tag, index) => {
    const tagUsername: string = tag.innerText.split('/')[1];
    const dbUser: CompiledFullUserObject | undefined = users.find(user => user.username === tagUsername);

    if (dbUser) {
      const flairText = tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.children[1]?.children[1]?.children[1]?.children[1]?.children[0]?.children[0]?.innerText;
      const titleText = tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.children[1]?.children[1]?.children[0]?.children[0]?.children[0]?.children[0]?.innerText;
      const messageText = [...tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.children[1]?.children[2]?.children[0]?.children[0]?.children as any || []]?.map(item => item?.innerText)?.join('\n') || '';
      const aLinkHref = tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.children[1]?.children[1]?.children[0]?.children[0].href;
      const hoursAgoText = tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode.children[1]?.children[0]?.children[0]?.children[0].querySelectorAll('a')[1]?.innerText;

      if (titleText) {
        const {
          shouldDeleteElementImmediately,
          sendMessageType,
          prelimUrl,
          messageMatch
        } = toSubFilter(dbUser, usernameConfig, flairText, titleText, messageText);

        if (index !== 0 && dbUser.username !== usernameConfig.usernameValue) {
          if (alreadyPrelimUrlUsernameList.includes(dbUser.username)) {
            tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();
            return;
          }

          alreadyPrelimUrlUsernameList.push(dbUser.username);

          if (shouldDeleteElementImmediately) {
            tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();
            return;
          }

          if (prelimUrl) {
            tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();

            createPrelimLink({
              dbUser, titleText, flairText, aLinkHref, prelimUrl, index, sendMessageType, prelimContainer, messageMatch
            });

            return;
          }
        }

        if (!prelimUrl || index === 0) {
          renderUserPanel({
            tag, tagUsername, index, dbUser, usernameConfig, hoursAgoText
          });
        }
      }
    }
  });
}

const main = async () => {
  console.log('START: start script');
  await isServerRunning();

  const usernameConfig = getUsernameMarker(location);

  window.localStorage.setItem('delayTimer', '10000');

  if (usernameConfig.usernameValue !== '') {
    console.log('timeframe:', usernameConfig.usernameTimestamp, 'username: ', usernameConfig.usernameValue);

    await scrollToSpecifiedDate(TIMEFRAME, usernameConfig);
    const users: CompiledFullUserObject[] = await checkUsernames({ usernames: getAllNoFapNewUsernames(), forum_type: UserForumType.Reddit });
    populateWebpageInformation(users, usernameConfig);

    setTimeout(function() {
      scrollToMarker();
    }, 1000);

    console.log('END: script complete');
  } else {
    console.log('You did not set the username marker or it has never been set.')
  }
};

main();
