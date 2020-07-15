import { ConfigType } from './config';
import { checkServerRunning } from './httpResponses';

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
