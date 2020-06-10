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
  }

  const populateWebpageInformation = (usernamesWithInformation) => {
    const allATags = document.querySelectorAll('a');
    const filteredATags = [...allATags].filter(tag => tag.innerText.includes('u/'));
    filteredATags.forEach(tag => {
      const tagUsername = tag.innerText.split('/')[1];
      const dbUser = usernamesWithInformation.find(user => user.username === tagUsername);

      if (dbUser) {
          // TODO
        // usernamesWithInformation
        tag.innerText = 'cake';
      }
    });
  }

  await scrollToSpecifiedDate('6 hours ago');
  const textUsernames = getAllUsernames();

  const usernamesResponse = await fetchCheckUsernameResult(textUsernames);
  populateWebpageInformation(usernamesResponse);
})();