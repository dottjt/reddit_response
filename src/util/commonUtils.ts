// message compose

import { checkServerRunning } from './httpResponses';
import { ConfigType } from './config';

export const getTypeQueryString = (searchString: string): string => {
  if (searchString.includes('&')) {
    const arrayWithType = searchString.split('&').filter(item => item.includes('type='));
    if (arrayWithType.length === 1) {
      const type = arrayWithType[0].split('=')[1];
      return type;
    }
  }
  return 'reply';
}

export const getTimerQueryString = (searchString: string): string | undefined => {
  if (searchString.includes('&')) {
    const arrayWithTimer = searchString.split('&').filter(item => item.includes('timer='));
    if (arrayWithTimer.length === 1) {
      const type = arrayWithTimer[0].split('=')[1];
      return type;
    }
  }
}

export const randomMessageDelay = (timer: string): Promise<void> => new Promise(resolve => {
  const delay = 1000 + Number(timer);
  setTimeout(function() { resolve() }, delay);
});

export const getAllNoFapNewUsernames = (): string[] => {
  const allATags: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/'));
  const usernames = filteredATags.map(tag => tag.innerText.split('/')[1]);
  return usernames;
}

export const scrollToSpecifiedDate = (dateString: string, usernameConfig: ConfigType): Promise<string> => new Promise(resolve => {
  let interval;

  interval = setInterval(() => {
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
        const doesTextContainXXX = username === usernameConfig.usernameValue;
        if (doesTextContainXXX) {
          console.log('Found scroll username.');
          clearInterval(interval);
          resolve('Found scroll username.');
        }
      }
    }
  }, 700);
});

export const addGlobalStyle = (css: string): void => {
  var head, style;
  head = document.getElementsByTagName('head')[0];
  if (!head) { return; }
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = css.replace(/;/g, ' !important;');
  head.appendChild(style);
}

// was for messageInboxScriptPre.ts

export const openReplyLink = async (containerDiv) => {
  const entry = containerDiv.children[4];
  const replyLink = getReplyLink(entry)

  if (replyLink) {
    const replyALink = replyLink.children[0];
    console.log(replyALink);

    replyALink.click();
  }
};

const getReplyLink = (entry) => {
  switch (entry.children.length) {
    case 5: {
      const entryLinks = entry.children[3];
      return entryLinks.children[7];
    }
    case 4: {
      const entryLinks = entry.children[2];
      return entryLinks.children[5];
    }
    default: {
      return null;
    }
  }
}

export const closeTabAfterDelay = (delay: number, window: any): Promise<void> => new Promise((resolve, reject) => {
  setTimeout(function() {
    console.log(`closing tab in ${delay}.`);
    window.open('https://reddit.com/', '_self')?.close();
    resolve();
  }, delay);
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

// const setIntervalFunction = (interval) => {
//   return setInterval(function() {
//     const delayTimer = window.localStorage.getItem('delayTimer');
//     const delayTimerNumber = Number(delayTimer);

//     if (delayTimerNumber > 10000) {
//       console.log('delayTimerNumber', delayTimerNumber);

//       const delayTimerNumberLessOne = delayTimerNumber - 1000;
//       window.localStorage.setItem('delayTimer', delayTimerNumberLessOne.toString());

//       clearInterval(interval);
//       interval = setInterval(interval);
//     }
//   }, 2000);
// }

// let interval;

// interval = setIntervalFunction(interval);
