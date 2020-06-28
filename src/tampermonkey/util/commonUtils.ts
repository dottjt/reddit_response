// message compose

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
  const delay = Math.floor(Math.random() * 6000) + 1000 + Number(timer);
  setTimeout(function() {
    let delayCounter = delay;
    setInterval(function() {
      console.log(delayCounter);
      delayCounter -= 1000;
    }, 1000)
    resolve();
  }, delay);
});

// nofap new subreddit

export const scrollToSpecifiedDate = (dateString: string): Promise<string> => new Promise(resolve => {
  let interval;

  interval = setInterval(() => {
    window.scrollTo(0,document.body.scrollHeight);

    const allTimeStamps = document.querySelectorAll('a[data-click-id="timestamp"]');

    for (const timeStampElement of allTimeStamps as any) {
      const doesTextContainDate = timeStampElement.innerText.includes(dateString);

      if (doesTextContainDate) {
        console.log('Complete: date reached');
        clearInterval(interval);
        resolve('Complete: date reached');
      } else {
        timeStampElement.remove();
      }
    }
  }, 500);
});

export const getAllNoFapNewUsernames = (): string[] => {
  const allATags: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/'));
  const usernames = filteredATags.map(tag => tag.innerText.split('/')[1]);
  return usernames;
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
