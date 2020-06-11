// ==UserScript==
// @name         Populate History Sent Messages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const getPageMessages = () => {
      const iFrame = document.querySelector('iframe');
      const pageMessages = iFrame.contentWindow.document.querySelectorAll('.message');

      // TODO

  }

  const populateMessage = async (usernameArray) => {
    const response = await fetch('http://localhost:3333/populateHistoricMessage',
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

})();