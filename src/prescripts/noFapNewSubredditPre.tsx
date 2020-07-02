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
  R_SEMEN_RETENTION_USERNAME, R_MUSLIM_NOFAP_USERNAME, UsernameType, ConfigType, R_PORN_ADDICTION_USERNAME,
} from '../util/config'

'use strict';

addGlobalStyle(mainCss);

const populateWebpageInformation = (users: CompiledFullUserObject[], usernameConfig: ConfigType) => {
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

      render(<UserPanel
        dbUser={dbUser}
        usernameConfig={usernameConfig}/>, domContainer);
      console.log(`${index} rendered of ${totalCount}.`)
    }
  });
}

const getUsernameMarker = (location): ConfigType => {
  if (location.pathname.toLowerCase().includes('/nofap/new')) {
    return {
      usernameValue: R_NOFAP_USERNAME,
      usernameType: UsernameType.rNofapUsername
    }
  }
  if (location.pathname.toLowerCase().includes('/pornfree/new')) {
    return {
      usernameValue: R_PORN_FREE_USERNAME,
      usernameType: UsernameType.rPornFreeUsername
    }
  }
  if (location.pathname.toLowerCase().includes('/pornaddiction/new')) {
    return {
      usernameValue: R_PORN_ADDICTION_USERNAME,
      usernameType: UsernameType.rPornAddictionUsername
    }
  }
  if (location.pathname.toLowerCase().includes('/nofapchristians/new')) {
    return {
      usernameValue: R_NOFAP_CHRISTIANS_USERNAME,
      usernameType: UsernameType.rNofapChristiansUsername
    }
  }
  if (location.pathname.toLowerCase().includes('/nofapteens/new')) {
    return {
      usernameValue: R_NOFAP_TEENS_USERNAME,
      usernameType: UsernameType.rNofapTeensUsername
    }
  }
  if (location.pathname.toLowerCase().includes('/semenretention/new')) {
    return {
      usernameValue: R_SEMEN_RETENTION_USERNAME,
      usernameType: UsernameType.rSemenRetentionUsername
    }
  }
  if (location.pathname.toLowerCase().includes('/muslimnofap/new')) {
    return {
      usernameValue: R_MUSLIM_NOFAP_USERNAME,
      usernameType: UsernameType.rMuslimNofapUsername
    }
  }

  return {
    usernameValue: '',
    usernameType: UsernameType.rNofapUsername
  };
}

const main = async () => {
  console.log('START: start script');

  await isServerRunning();

  const usernameConfig = getUsernameMarker(location);

  window.localStorage.setItem('delayTimer', '10000');

  if (usernameConfig.usernameValue !== '') {
    console.log('timeframe: ', TIMEFRAME, 'username: ', usernameConfig.usernameValue);

    await scrollToSpecifiedDate(TIMEFRAME, usernameConfig);
    const dataPayload: { usernames: string[] } = { usernames: getAllNoFapNewUsernames() };
    const users: CompiledFullUserObject[] = await checkUsernamesFetch(dataPayload);
    populateWebpageInformation(users, usernameConfig);
    scrollToMarker();

    console.log('END: script complete');
  } else {
    console.log('You did not set the username marker or it has never been set.')
  }
};

main();
