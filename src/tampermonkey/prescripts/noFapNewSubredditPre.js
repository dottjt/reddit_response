// ==UserScript==
// @name         Reddit NoFap New Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/r/NoFap/new
// @match        https://www.reddit.com/r/NoFap/new/
// @require      file:///Users/julius.reade/Code/PER/reddit_response/src/tampermonkey/scripts/noFapNewSubreddit.js
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';

  import 'responses/start.js' // { startStruggleBasics }
  import 'util/httpResponses.js' // { fetchCheckUsernameResultHTTP }
  import 'util/createNodes.js' // { createNode, createMessageLinkNode }

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
        appendUserInformation(tag, dbUser)
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
