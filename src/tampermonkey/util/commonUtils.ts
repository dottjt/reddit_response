// message compose

export const getTypeQueryString = (searchString) => {
  if (searchString.includes('&')) {
    const arrayWithType = searchString.split('&').filter(item => item.includes('type='));
    if (arrayWithType.length === 1) {
      const type = arrayWithType[0].split('=')[1];
      return type;
    }
  }
  return 'CUSTOM';
}

export const randomMessageDelay = () => new Promise(resolve => {
  const delay = Math.floor(Math.random() * 6000) + 1000;
  setTimeout(function() {
    resolve();
  }, delay);
});

// nofap new subreddit

export const scrollToSpecifiedDate = (dateString) => new Promise(resolve => {
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


export const getAllNoFapNewUsernames = () => {
  const allATags = document.querySelectorAll('a');
  const filteredATags = [...allATags as any].filter(tag => tag.innerText.includes('u/'));
  const usernames = filteredATags.map(tag => tag.innerText.split('/')[1]);
  return usernames;
}