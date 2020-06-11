// ==UserScript==
// @name         Reddit NoFap Check Usernames
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/message/compose/?*
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';

  const iFrame = document.querySelector('iframe');

  const sendNewMessage = async (dataPayload) => {
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
      throw new Error(`sendNewMessage - ${error}`);
    }
  }

  const checkIfFieldsAreFull = async (document) => {
      const toInput = document.querySelector('input[name=to]').value;
      const subjectInput = document.querySelector('input[name=subject]').value;
      const messageInput = document.querySelector('input[name=message]').value;

      if (toInput && subjectInput && messageInput) {
        await sendNewMessage({
          to: toInput,
          subject: subjectInput,
          message: messageInput,
        });

      // https://stackoverflow.com/questions/17415579/how-to-iso-8601-format-a-date-with-timezone-offset-in-javascript

        document.querySelector('#send').click();
      } else {
        console.log('not automated message');
      }
  };

  if (iFrame && !window.location.search.includes('count')) {
    iFrame.addEventListener("load", async function() {
      const document = iFrame.contentWindow.document;

      await checkIfFieldsAreFull(document);
    });
  }

  console.log('script complete');
})();
