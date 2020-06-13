// ==UserScript==
// @name         Reddit Message Compose Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/message/compose/?*
// @grant        none
// @require      file:///Users/julius.reade/Code/PER/reddit_response/src/tampermonkey/scripts/messageComposeScript.js
// ==/UserScript==

(async function() {
  'use strict';

  import 'util/httpResponses.js' // { sendNewMessageHTTP }

  const iFrame = document.querySelector('iframe');

  const getType = (searchString) => {
    if (searchString.includes('&')) {
      const arrayWithType = searchString.split('&').filter(item => item.includes('type='));
      if (arrayWithType.length === 1) {
        const type = arrayWithType[0].split('=')[1];
        return type;
      }
    }
    return 'CUSTOM';
  }

  const randomMessageDelay = () => new Promise(resolve => {
    const delay = Math.floor(Math.random() * 6000) + 1000;
    setTimeout(function() {
      resolve();
    }, delay);
  });

  const checkIfFieldsAreFull = async (toInput, subjectInput, messageInput, type) => {
      console.log(toInput, subjectInput, messageInput, type)

      if (toInput && subjectInput && messageInput) {
        await randomMessageDelay();
        await sendNewMessageHTTP({
          to: toInput,
          subject: subjectInput,
          message: messageInput,
          type,
        });

        // document.querySelector('#send').click();
        console.log('message sent to server');
      } else {
        console.log('some fields empty');
      }
  };

  if (iFrame && !window.location.search.includes('embedded')) {
    iFrame.addEventListener("load", async function() {
      console.log('START: preparing message');

      const toInput = iFrame.contentWindow.document.querySelector('input[name=to]').value;
      const subjectInput = iFrame.contentWindow.document.querySelector('input[name=subject]').value;
      const messageInput = iFrame.contentWindow.document.querySelectorAll('textarea[name=text]')[1].value;
      const type = getType(window.location.search);

      await checkIfFieldsAreFull(toInput, subjectInput, messageInput, type);

      console.log('END: script complete');
    });
  }
})();
