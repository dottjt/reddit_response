
import { checkUsernames } from '../util/httpResponses';

import {
  getAllNoFapNewUsernames,
  isServerRunning,
  createPrelimLink,
  renderUserPanel,
} from '../util/utils/noFapNewSubredditUtils';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

import { filterNewNoFapMessages } from '../util/filter/noFapNewFilter';
import {
  createPrelimContainerForum,
  getAllNoFapNewUsernamesForum
} from '../util/utils/noFapForumUtils';
import { UserForumType } from '../types/serverTypes';

'use strict';

const populateWebpageInformation = (users: CompiledFullUserObject[]) => {
  createPrelimContainerForum()

  const prelimContainer = document.querySelector('#reade-automate-container');

  let alreadyPrelimUrlUsernameList: string[] = [];

  const discussionListItems = document.querySelectorAll('.discussionListItem');

  discussionListItems.forEach((tag, index) => {
    const tagUsername: string = tag.attributes['data-author'].value
    const dbUser: CompiledFullUserObject | undefined = users.find(user => user.username === tagUsername);

    console.log(tag)
    if (dbUser) {
      const titleText: string = (tag.querySelector('.title')?.children[0] as HTMLElement).innerText
      // const messageText = [...tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.children[1]?.children[2]?.children[0]?.children[0]?.children as any || []]?.map(item => item?.innerText)?.join('\n') || '';

      // const {
      //   shouldDeleteElementImmediately,
      //   sendMessageType,
      //   prelimUrl,
      // } = filterNewNoFapMessages(dbUser, usernameConfig, undefined, titleText, messageText);

      // if (index !== 0) {
      //   if (alreadyPrelimUrlUsernameList.includes(dbUser.username)) {
      //     tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();
      //     return;
      //   }

      //   alreadyPrelimUrlUsernameList.push(dbUser.username);

      //   if (shouldDeleteElementImmediately) {
      //     tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();
      //     return;
      //   }

      //   if (prelimUrl) {
      //     tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();

      //     createPrelimLink({
      //       dbUser, titleText, flairText, aLinkHref, prelimUrl, index, sendMessageType, prelimContainer
      //     });

      //     return;
      //   }
      // }

      // if (!prelimUrl || index === 0) {
      //   renderUserPanel({
      //     tag, tagUsername, index, dbUser, usernameConfig
      //   });
      // }

      // forum_type={UserForumType.NoFap}

    }
  });
}

const main = async () => {
  console.log('START: start script');
  await isServerRunning();

  window.localStorage.setItem('delayTimer', '10000');
  const users: CompiledFullUserObject[] = await checkUsernames({ usernames: getAllNoFapNewUsernamesForum(), forum_type: UserForumType.NoFap });
  console.log(users);
  populateWebpageInformation(users);
};

main();
