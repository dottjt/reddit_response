import { render } from 'inferno';
import { createElement } from 'inferno-create-element';

import { checkUsernamesFetch } from '../util/httpResponses';

import {
  scrollToSpecifiedDate,
  getAllNoFapNewUsernames,
  addGlobalStyle,
  scrollToMarker,
  isServerRunning,
} from '../util/commonUtils';
import mainCss from '../util/mainCss';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

import UserPanel from '../components/UserPanel';
import {
  TIMEFRAME,
  R_NOFAP_USERNAME,
  R_PORN_FREE_USERNAME,
  R_NOFAP_CHRISTIANS_USERNAME,
  R_NOFAP_TEENS_USERNAME,
  R_SEMEN_RETENTION_USERNAME, R_MUSLIM_NOFAP_USERNAME, ForumType, ConfigType, R_PORN_ADDICTION_USERNAME, R_NOFAP_TIMESTAMP, R_PORN_FREE_TIMESTAMP, R_PORN_ADDICTION_TIMESTAMP, R_NOFAP_CHRISTIANS_TIMESTAMP, R_NOFAP_TEENS_TIMESTAMP, R_SEMEN_RETENTION_TIMESTAMP, R_MUSLIM_NOFAP_TIMESTAMP,
} from '../util/config'
import { UserType, SendMessageType } from '../types/serverTypes';
import { filterNewNoFapMessages } from '../util/noFapFilterUtils';
import { notEqual } from 'assert';
import { generatePrelimUrlWithTimer, openNewLink } from '../util/sendMessageUtils';
// import { openNewLink } from '../util/sendMessageUtils';

'use strict';

addGlobalStyle(mainCss);

const populateWebpageInformation = (users: CompiledFullUserObject[], usernameConfig: ConfigType) => {
  const allATags: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/') && !tag.innerText.includes(' '));

  const automateContainer = document.createElement('div');
  automateContainer.id = 'reade-automate-container';
  const firstElementContainer = filteredATags[0];

// NOTE: This first one is one more i.e. the parent of the element it's inserting it before.
  firstElementContainer.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode.insertBefore(automateContainer, firstElementContainer.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode);

  const automateContainerACTUAL = document.querySelector('#reade-automate-container');

  filteredATags.forEach((tag, index) => {
    const tagUsername: string = tag.innerText.split('/')[1];
    const dbUser: CompiledFullUserObject | undefined = users.find(user => user.username === tagUsername);

    if (dbUser) {
      const flairText = tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.children[1]?.children[1]?.children[1]?.children[1]?.children[0]?.children[0]?.innerText;
      const titleText = tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.children[1]?.children[1]?.children[0]?.children[0]?.children[0]?.children[0]?.innerText;

      const {
        shouldDeleteElementImmediately,
        sendMessageType,
        prelimUrl,
      } = filterNewNoFapMessages(dbUser, usernameConfig, flairText, titleText);

      if (index !== 0) {
        if (
          dbUser.userType === UserType.UserHostile ||
          dbUser.userType === UserType.UserNotRespondedBack ||
          dbUser.userType === UserType.UserRespondedBack) {
          // console.log('unproductive UserType removed!');
          tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();
          return;
        }

        if (shouldDeleteElementImmediately) {
          tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();
          // console.log('shouldDeleteElementImmediately yes!');
          return;
        }

        if (prelimUrl) {
          tag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.remove();

          const node = document.createElement("a");
          const textnode = document.createTextNode(`${dbUser.username} - ${sendMessageType}`);

          node.onclick = function() {
            openNewLink(prelimUrl, SendMessageType.NA);
          }
          node.style.display = 'block'
          node.style.marginTop = '0.6rem';
          node.style.marginBottom = '0.6rem';
          node.style.color = 'purple';
          node.style.cursor = 'pointer';
          node.appendChild(textnode);
          automateContainerACTUAL?.appendChild(node);

          console.log('prelimUrl created!');
          return;
        }
      }

      if (!prelimUrl || index === 0) {
        const rootId = `r${tagUsername}-${index}`;
        const root = document.createElement('div');
        root.id = rootId;
        tag.parentNode.insertBefore(root, tag);
        tag.remove();

        const domContainer = document.querySelector(`#${rootId}`);

        render(<UserPanel
          dbUser={dbUser}
          usernameConfig={usernameConfig}/>, domContainer);
        // console.log(`${index} rendered of ${totalCount}.`)
      }
    }
  });
}

const getUsernameMarker = (location): ConfigType => {
  if (location.pathname.toLowerCase().includes('/nofap/new')) {
    return {
      usernameValue: R_NOFAP_USERNAME,
      usernameTimestamp: R_NOFAP_TIMESTAMP,
      forumType: ForumType.rNofapForum
    }
  }
  if (location.pathname.toLowerCase().includes('/pornfree/new')) {
    return {
      usernameValue: R_PORN_FREE_USERNAME,
      usernameTimestamp: R_PORN_FREE_TIMESTAMP,
      forumType: ForumType.rPornFreeForum
    }
  }
  if (location.pathname.toLowerCase().includes('/pornaddiction/new')) {
    return {
      usernameValue: R_PORN_ADDICTION_USERNAME,
      usernameTimestamp: R_PORN_ADDICTION_TIMESTAMP,
      forumType: ForumType.rPornAddictionForum
    }
  }
  if (location.pathname.toLowerCase().includes('/nofapchristians/new')) {
    return {
      usernameValue: R_NOFAP_CHRISTIANS_USERNAME,
      usernameTimestamp: R_NOFAP_CHRISTIANS_TIMESTAMP,
      forumType: ForumType.rNofapChristiansForum
    }
  }
  if (location.pathname.toLowerCase().includes('/nofapteens/new')) {
    return {
      usernameValue: R_NOFAP_TEENS_USERNAME,
      usernameTimestamp: R_NOFAP_TEENS_TIMESTAMP,
      forumType: ForumType.rNofapTeensForum
    }
  }
  if (location.pathname.toLowerCase().includes('/semenretention/new')) {
    return {
      usernameValue: R_SEMEN_RETENTION_USERNAME,
      usernameTimestamp: R_SEMEN_RETENTION_TIMESTAMP,
      forumType: ForumType.rSemenRetentionForum
    }
  }
  if (location.pathname.toLowerCase().includes('/muslimnofap/new')) {
    return {
      usernameValue: R_MUSLIM_NOFAP_USERNAME,
      usernameTimestamp: R_MUSLIM_NOFAP_TIMESTAMP,
      forumType: ForumType.rMuslimNofapForum
    }
  }

  return {
    usernameValue: '',
    usernameTimestamp: '',
    forumType: ForumType.rNofapForum
  };
}

const main = async () => {
  console.log('START: start script');

  await isServerRunning();

  const usernameConfig = getUsernameMarker(location);

  window.localStorage.setItem('delayTimer', '10000');

  if (usernameConfig.usernameValue !== '') {
    console.log('timeframe: ', TIMEFRAME, 'username: ', usernameConfig.usernameValue);

    // .scrollerItem
    await scrollToSpecifiedDate(TIMEFRAME, usernameConfig);
    const dataPayload: { usernames: string[] } = { usernames: getAllNoFapNewUsernames() };
    const users: CompiledFullUserObject[] = await checkUsernamesFetch(dataPayload);
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
