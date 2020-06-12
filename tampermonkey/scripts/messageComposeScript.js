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

  const guideLong = (
`Well, I&apos;ve written a guide to the whole process of overcoming porn addiction if you&apos;re interested? (don&apos;t worry, it&apos;s 100% completely free, just trying to help as many people out as possible)

It explains everything from healthy coping mechanisms, to developing control over your emotions, as well as setting healthy expectations throughout your journey.

https://neverfapdeluxe.com/

The homepage is quite comprehensive. I&apos;ve put a lot of effort into it and it covers 90% of what you need to know. It then leads to the /guide which explains even more about awareness, meditation etc.

Also happy to have you join our #accountability channel on Discord once you&apos;ve become familiar with the material.
`
); // { guideLong }
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
} // { sendNewMessageHTTP }

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
