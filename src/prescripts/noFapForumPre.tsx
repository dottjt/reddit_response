
import { checkUsernames } from '../util/httpResponses';

import {
  getAllNoFapNewUsernames,
  isServerRunning,
  createPrelimLink,
} from '../util/utils/noFapNewSubredditUtils';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

import { toSubFilter } from '../util/filter/toSubFilter';
import {
  renderUserPanelForum,
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
  const filteredDiscussionListItems = [...discussionListItems as any].filter(item => ![...item.classList].includes('sticky'));
  console.log('filteredDiscussionListItems', filteredDiscussionListItems);
  // Remember that we need to filter these for the bottom ones.

  // sticky
  console.log(filteredDiscussionListItems);
  filteredDiscussionListItems.forEach((tag, index) => {
    const tagUsername: string = tag.attributes['data-author'].value;
    const dbUser: CompiledFullUserObject | undefined = users.find(user => user.username === tagUsername);

    if (dbUser) {
      const titleText: string = (tag.querySelector('.title')?.children[0] as HTMLElement).innerText;
      // I have no way of getting the messageText, at least easily without making another HTTP request to that webpage and returning the message text.
      // const messageText = [...tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.children[1]?.children[2]?.children[0]?.children[0]?.children as any || []]?.map(item => item?.innerText)?.join('\n') || '';

      // const {
      //   shouldDeleteElementImmediately,
      //   sendMessageType,
      //   prelimUrl,
      // } = toSubFilter(dbUser, usernameConfig, undefined, titleText, messageText);

      // if (prelimUrl) {
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

      // if (!prelimUrl) {
        renderUserPanelForum({
          tag, tagUsername, index, dbUser, usernameConfig: undefined
        });
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
