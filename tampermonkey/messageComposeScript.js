// ==UserScript==
// @name         Reddit Message Compose
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

  const checkIfFieldsAreFull = async (toInput, subjectInput, messageInput) => {

      console.log(toInput, subjectInput, messageInput)

      if (toInput && subjectInput && messageInput) {
        await sendNewMessage({
          to: toInput,
          subject: subjectInput,
          message: messageInput,
        });

      // https://stackoverflow.com/questions/17415579/how-to-iso-8601-format-a-date-with-timezone-offset-in-javascript

        // document.querySelector('#send').click();
        console.log('message sent to server');
      } else {
        console.log('not automated message');
      }
  };

  if (iFrame && !window.location.search.includes('embedded')) {
    iFrame.addEventListener("load", async function() {
      console.log(window.location)
      console.log('let us send the message!')

      const toInput = iFrame.contentWindow.document.querySelector('input[name=to]').value;
      const subjectInput = iFrame.contentWindow.document.querySelector('input[name=subject]').value;
      const messageInput = iFrame.contentWindow.document.querySelectorAll('textarea[name=text]')[1].value;

      await checkIfFieldsAreFull(toInput, subjectInput, messageInput);

      console.log('script complete');
    });
  }
})();
