// ==UserScript==
// @name         Reddit Message Compose Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/message/compose/?*
// @grant        none
// @require      file:///Users/julius.reade/Code/PER/reddit_response/tampermonkey/scripts/messageComposeScript.js
// ==/UserScript==

(async function() {
  'use strict';

  import 'responses/guide.js' // { guideLong }
  import 'util/httpResponses.js' // { sendNewMessageHTTP }

  const iFrame = document.querySelector('iframe');

  const checkIfFieldsAreFull = async (toInput, subjectInput, messageInput) => {
      console.log(toInput, subjectInput, messageInput)

      if (toInput && subjectInput && messageInput) {
        await sendNewMessageHTTP({
          to: toInput,
          subject: subjectInput,
          message: messageInput,
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

      await checkIfFieldsAreFull(toInput, subjectInput, messageInput);

      console.log('END: script complete');
    });
  }
})();
