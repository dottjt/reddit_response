// ==UserScript==
// @name         Populate Historic Received Messages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/message/inbox/
// @match        https://www.reddit.com/message/inbox/?*
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';

  const iFrame = document.querySelector('iframe');

  const getPageMessages = async (pageMessages) => {
    const messageList = [...pageMessages].map(containerDiv => {
      const subject = containerDiv.children[1].innerText;

      const entry = containerDiv.children[4];
      const headerTag = entry.children[0].children[1];
      const recipient = headerTag.children[0].innerText;
      const dateTag = headerTag.children[1];
      const date = dateTag.attributes.length === 3 ? dateTag.attributes[1].nodeValue : undefined;

      const message = entry.children[1].children[0].innerText;

      return {
        subject,
        recipient,
        message,
        date,
      }
    });

    const filteredMessageList = messageList.filter(message => message.date || message.recipient === '[deleted]');
    console.log('filteredMessageList', filteredMessageList);
    await uploadMessages({ messages: filteredMessageList });
  }

  const uploadMessages = async (dataPayload) => {
    try {
      const response = await fetch('http://localhost:3333/populateHistoricMessage',
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
      throw new Error(`uploadMessages - ${error}`);
    }
  }

  const clickNextButton = () => {
    iFrame.contentWindow.document.querySelector('.next-button').children[0].click();
  }

  if (iFrame && !window.location.search.includes('count')) {
    if (!window.location.search.includes('true')) {
      console.log('hey');
      iFrame.addEventListener("load", async function() {
        const pageMessages = iFrame.contentWindow.document.querySelectorAll('.message');
        await getPageMessages(pageMessages);
        // clickNextButton();
      });
    }
  } else {
    const pageMessages = document.querySelectorAll('.message');
    await getPageMessages(pageMessages);
    // clickNextButton();
  }
})();