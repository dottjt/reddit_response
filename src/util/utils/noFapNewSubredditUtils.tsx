import { render } from 'inferno';
import { createElement } from 'inferno-create-element';

import { checkServerRunning } from '../httpResponses';

import {
  ConfigType,
} from '../../util/config'
import { SendMessageType } from '../../types/serverTypes';
import { openNewLink } from '../utils/sendMessageUtils';
import UserPanel from '../../components/UserPanel';
import { highlightSyntax } from '../filter/regexUtil';

export const getAllNoFapNewUsernames = (): string[] => {
  const allATags: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/'));
  const usernames = filteredATags.map(tag => tag.innerText.split('/')[1]);
  return usernames;
}

export const createPrelimContainer = (filteredATags): void => {
  const prelimContainer = document.createElement('div');
  prelimContainer.id = 'reade-automate-container';
  const firstElementContainer = filteredATags[0];

  // NOTE: This first one is one more i.e. the parent of the element it's inserting it before.
  firstElementContainer.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode.insertBefore(prelimContainer, firstElementContainer.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode);
}

const getNextHoursAgoValueToSearch = (timestamp: string): string | undefined => {
  if (timestamp !== '') {
    if (timestamp.includes('now') || timestamp.includes('minute')) {
      return '1 hour ago';
    }
    if (timestamp.includes('hour')) {
      const nextTimeNumber = parseInt(timestamp.split(' ')[0]) + 1;
      return `${nextTimeNumber} hours ago`;
    }

    const nextTimeNumber = parseInt(timestamp.split(' ')[0]) + 1;
    return `${nextTimeNumber} days ago`;
  }

  return undefined;
}

export const scrollToSpecifiedDate = (dateString: string, usernameConfig: ConfigType): Promise<string> => new Promise(resolve => {
  let interval;
  let isFound = false;

  const nextHoursAgoValueToSearch = getNextHoursAgoValueToSearch(usernameConfig.usernameTimestamp);

  interval = setInterval(() => {
    if (!isFound) {
      window.scrollTo(0, document.body.scrollHeight);

      if (dateString !== 'NA') {
        console.log('scrollToSpecifiedDate - run')
        const allTimeStamps = document.querySelectorAll('a[data-click-id="timestamp"]');

        for (const timeStampElement of allTimeStamps as any) {
          const doesTextContainXXX = timeStampElement.innerText.includes(dateString);

          if (doesTextContainXXX) {
            console.log('Found scroll date.');
            clearInterval(interval);
            resolve('Found scroll date.');
          } else {
            if (timeStampElement) {
              timeStampElement.remove();
            }
          }
        }
      } else {
        console.log('scrollToSpecifiedUsername - run')
        const usernames = getAllNoFapNewUsernames();

        for (const username of usernames as string[]) {
          const allATags: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
          const usernameTag = [...allATags as any].filter(tag => tag.innerText.includes(username))[0];

          const hoursAgoText = usernameTag?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode?.parentNode.children[1]?.children[0]?.children[0]?.children[0].querySelectorAll('a')[1]?.innerText;

          const doesTextContainXXX = username === usernameConfig.usernameValue;
          const doesTimestampContainXXX =  nextHoursAgoValueToSearch ? hoursAgoText === nextHoursAgoValueToSearch : false;

          if (doesTextContainXXX) {
            console.log('Found scroll username.');
            clearInterval(interval);
            resolve('Found scroll username.');
          }
          // if (doesTimestampContainXXX) {
          //   console.log('Found scroll timestamp instead.');
          //   clearInterval(interval);
          //   resolve('Found scroll timestamp instead.');
          // }
        }
      }
    }
  }, 800);
});

export const scrollToMarker = () => {
  setTimeout(function() { console.log('delay, bby'); }, 800)
  const lastUserMarkerElement = document.querySelector('#last-user-reade')
  console.log(lastUserMarkerElement)
  if (lastUserMarkerElement) {
    const y = lastUserMarkerElement.getBoundingClientRect().top + window.scrollY - 350;
    console.log(y);
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
  }
};

export const isServerRunning = async () => {
  const message = await checkServerRunning();
  console.log('serverRunning', message);
}

export const addGlobalStyle = (css: string): void => {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css.replace(/;/g, ' !important;');
  head.appendChild(style);
}


export const createPrelimLink = ({
  dbUser,
  titleText,
  flairText,
  aLinkHref,
  prelimUrl,
  index,
  sendMessageType,
  prelimContainer,
  messageMatch,
}) => {
  const nodeContainer = document.createElement('div');
  nodeContainer.id = `r${dbUser.username}-${index}`;

  render(
    <div>
      <a
        style={{ display: 'block', background: 'white', color: 'black', padding: '1rem', 'margin-top': '0.6rem', 'margin-bottom': '0.6rem', cursor: 'pointer', border: '1px solid black' }}
        onclick={() => openNewLink(prelimUrl, SendMessageType.NA)}
      >
        <span style={{ 'margin-bottom': '0.5rem', 'margin-right': '0.5rem', color: 'purple' }}>{dbUser.username} - {sendMessageType}</span>
        {messageMatch.length > 0 ? (
          highlightSyntax(titleText, messageMatch, true).map(element => <span>{element}</span>)
        ) : (
          <span>{titleText}</span>
        )}
        <p style={{ 'margin-top': '0.5rem' }}>{flairText}</p>
      </a>
      <a data-click-id='body' href={`${aLinkHref}`}>Show Post</a>
    </div>, nodeContainer
  );

  prelimContainer?.appendChild(nodeContainer);
}

export const renderUserPanel = ({
  tag,
  tagUsername,
  index,
  dbUser,
  usernameConfig,
  hoursAgoText,
}) => {
  const rootId = `r${tagUsername}-${index}`;
  const root = document.createElement('div');
  root.id = rootId;
  tag.parentNode.insertBefore(root, tag);
  tag.remove();

  const domContainer = document.querySelector(`#${rootId}`);
  if (domContainer) {
    render(<UserPanel
      dbUser={dbUser}
      hoursAgoText={hoursAgoText}
      usernameConfig={usernameConfig}/>, domContainer);
  }
}
