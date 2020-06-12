// ==UserScript==
// @name         Reddit NoFap Check Usernames
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/r/NoFap/new/
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';

  const TIMEFRAME = '1 hour ago';
  // const TIMEFRAME = '2 hours ago';
  // const TIMEFRAME = '1 day ago';
  // const TIMEFRAME = '2 days ago';

  const createNode = (text, color) => {
    const node = document.createElement('span');
    node.style.color = color || 'black';
    node.style.fontSize = '20px';
    var textnode = document.createTextNode(text + ' ');         // Create a text node
    node.appendChild(textnode);

    return node;
  }

  const starterMessage = () => {

  }

  

  const createMessageLinkNode = (text, color, username, message) => {
    const node = document.createElement('span');
    node.href = `https://www.reddit.com/message/compose/?to=${username}&subject=Hey&message=${message}&hello=cake`;
    node.style.fontSize = '20px';
    var textnode = document.createTextNode(text + ' ');         // Create a text node
    node.appendChild(textnode);

    return node;

  }

  const scrollToSpecifiedDate = (dateString) => new Promise(resolve => {
    let interval;

    interval = setInterval(() => {
      window.scrollTo(0,document.body.scrollHeight);

      const allTimeStamps = document.querySelectorAll('a[data-click-id="timestamp"]');

      for (const timeStampElement of allTimeStamps) {
        const doesTextContainDate = timeStampElement.innerText.includes(dateString);

        if (doesTextContainDate) {
          console.log('found date');
          clearInterval(interval);
          resolve('found date');
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

  const fetchCheckUsernameResult = async (usernameArray) => {
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
      throw new Error(`fetchCheckUsernameResult - ${error}`);
    }
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

        createMessageLinkNode('basic', 'purple', dbUser.username, message);

        // TODO Create <a links to user/message /> which opens opens to a new tab
      }
    });
  }

  await scrollToSpecifiedDate(TIMEFRAME);
  const textUsernames = getAllUsernames();

  const usernamesResponse = await fetchCheckUsernameResult(textUsernames);
  const users = usernamesResponse.data.users;
  populateWebpageInformation(users);

  console.log('script complete');
})();
