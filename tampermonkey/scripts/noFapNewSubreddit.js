// ==UserScript==
// @name         Reddit NoFap New Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/r/NoFap/new
// @match        https://www.reddit.com/r/NoFap/new/
// @require      file:///Users/julius.reade/Code/PER/reddit_response/tampermonkey/scripts/noFapNewSubreddit.js
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';

  const startSaw = (
`Hey, I saw your post on r/NoFap.`
);

const startLong = (
`Hey, I saw your post on r/NoFap. It&apos;s great to see you&apos;re starting with your journey and taking it seriously! How are you currently coping?

Definitely meditation was what made the biggest difference for me. In fact, within 5 minutes of meditation was when I knew I would never relapse again and here I am at 250+ days. What&apos;s hard is convincing people to do it though, myself included. I resisted for years, but the moment I started doing it, I felt like such an idiot for being so stubborn haha.

Meditation also isn&apos;t effective if it&apos;s not consistent. It&apos;s a bit like dieting. You can&apos;t just diet for a week, and then splurge afterwards. It&apos;s about creating that lifestyle of balance and developing a mental health routine which allows you to develop control over your mind. So definitely it&apos;s something you should be doing daily.

So for me, I basically do 10 minutes of meditation each day and I would say that&apos;s enough for you to get started.

Thought you could use some advice to help you get further with your own recovery :D`
);

const startBiggestDifference = (
`The biggest difference is probably the energy I have now. Like, put it this way, I haven&apos;t thought about porn in months. Which means I haven&apos;t experienced any of the guilt/shame/drain of porn on a daily basis, not to mention my emotions have remained stable and it&apos;s literally night and day in terms of difference. This alone is a huge motivator never to go back.`
); // {  }
  const sendNewMessageHTTP = async (dataPayload) => {
  try {
    const response = await fetch('http://localhost:3333/sendNewMessage',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ data: dataPayload }) // body data type must match "Content-Type" header
    })

    const json = await response.json();
    return json;
  } catch(error) {
    console.log('Server not started.')
    throw new Error(`sendNewMessageHTTP - ${error}`);
  }
}

const uploadMessagesHTTP = async (dataPayload) => {
  try {
    const response = await fetch('http://localhost:3333/populateHistoricReceivedMessages',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ data: dataPayload }) // body data type must match "Content-Type" header
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log('please start server');
    throw new Error(`uploadMessagesHTTP - ${error}`);
  }
}

const fetchCheckUsernameResultHTTP = async (usernameArray) => {
  try {
    const response = await fetch('http://localhost:3333/checkUsernames',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ data: { usernames: usernameArray } }) // body data type must match "Content-Type" header
    })

    const json = await response.json();
    return json;
  } catch(error) {
    console.log('Server not started.')
    throw new Error(`fetchCheckUsernameResultHTTP - ${error}`);
  }
} // { fetchCheckUsernameResultHTTP }
  const createNode = (text, color) => {
  const node = document.createElement('span');
  node.style.color = color || 'black';
  node.style.fontSize = '20px';
  var textnode = document.createTextNode(text + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}

const createMessageLinkNode = (text, color, username, message) => {
  const node = document.createElement('a');
  node.href = `https://www.reddit.com/message/compose/?to=${username}&subject=Hey&message=${message}&hello=cake`;
  node.style.fontSize = '20px';
  var textnode = document.createTextNode(text + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}
 // { createNode, createMessageLinkNode }

  const TIMEFRAME = '1 hour ago';
  // const TIMEFRAME = '2 hours ago';
  // const TIMEFRAME = '1 day ago';
  // const TIMEFRAME = '2 days ago';

  const scrollToSpecifiedDate = (dateString) => new Promise(resolve => {
    let interval;

    interval = setInterval(() => {
      window.scrollTo(0,document.body.scrollHeight);

      const allTimeStamps = document.querySelectorAll('a[data-click-id="timestamp"]');

      for (const timeStampElement of allTimeStamps) {
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

  const getAllUsernames = () => {
    const allATags = document.querySelectorAll('a');
    const filteredATags = [...allATags].filter(tag => tag.innerText.includes('u/'));
    const usernames = filteredATags.map(tag => tag.innerText.split('/')[1]);
    return usernames;
  }

  const populateWebpageInformation = (users) => {
    const allATags = document.querySelectorAll('a');
    const filteredATags = [...allATags].filter(tag => tag.innerText.includes('u/'));
    filteredATags.forEach(tag => {
      const tagUsername = tag.innerText.split('/')[1];
      const dbUser = users.find(user => user.username === tagUsername);

      if (dbUser) {
        tag.innerText = '';

        tag.style.marginTop = '1rem';
        tag.style.marginBottom = '1rem';
        tag.style.marginLeft = '1rem';
        tag.style.marginRight = '1rem';

        tag.appendChild(createNode(dbUser.username, dbUser.userColor));
        tag.appendChild(createNode(`Type: ${dbUser.userType}`, dbUser.userColor));
        tag.appendChild(createNode(`Sent: ${dbUser.sentCount}`, 'blue'));

        // TODO: maybe there is something else aside from TAG.
        createMessageLinkNode('basic', 'purple', dbUser.username, message);

      }
    });
  }
  console.log('START: start script');
  await scrollToSpecifiedDate(TIMEFRAME);
  const textUsernames = getAllUsernames();

  const usernamesResponse = await fetchCheckUsernameResultHTTP(textUsernames);
  const users = usernamesResponse.data.users;
  populateWebpageInformation(users);

  console.log('END: script complete');
})();
