// ==UserScript==
// @name         Reddit Message Messages Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/message/messages
// @match        https://www.reddit.com/message/messages/
// @match        https://www.reddit.com/message/messages/?*
// @require      file:///Users/julius.reade/Code/PER/reddit_response/src/tampermonkey/scripts/messageMessagesScript.js
// @grant        none
// ==/UserScript==

// TODO, THIS IS TO BE DONE, BUT IT WILL BE DONE STILL :)

(async function() {
  'use strict';

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
} // { uploadMessagesHTTP }

  const iFrame = document.querySelector('iframe');

  // const getPageMessages = async (pageMessages) => {
  //   const messageList = [...pageMessages].map(containerDiv => {
  //     const subjectTag = containerDiv.children[1];
  //     const subjectReplyToTitle = subjectTag.children[0].innerText;

  //     let subject;
  //     if (subjectTag.children.length === 1 && !subjectReplyToTitle.includes('re:')) {
  //       subject = subjectReplyToTitle;
  //     } else {
  //       subject = subjectReplyToTitle + ' (no subject/reply)';
  //     }
  //     if (subjectTag.children.length === 2) {
  //       subject = subjectTag.children[1].innerText;
  //     }

  //     const entry = containerDiv.children[4];
  //     const headerTag = entry.children[0].children[1];
  //     const recipient = headerTag.children[0].innerText;
  //     const dateTag = headerTag.children[1];
  //     const date = dateTag.attributes.length === 3 ? dateTag.attributes[1].nodeValue : undefined;

  //     const message = entry.children[1].children[0].innerText;

  //     return {
  //       subject,
  //       subjectReplyToTitle,
  //       recipient,
  //       message,
  //       date,
  //     }
  //   });

  //   const filteredMessageList = messageList.filter(
  //     message => message.date &&
  //     !message.subjectReplyToTitle.includes("Tips to") &&
  //     !message.subjectReplyToTitle.includes("Tips for") &&
  //     !message.subjectReplyToTitle.includes("comment reply") &&
  //     !message.subjectReplyToTitle.includes("post reply") &&
  //     !message.subjectReplyToTitle.includes("Welcome to") &&
  //     !message.subjectReplyToTitle.includes("Snoosletter")
  //   );
  //   console.log('filteredMessageList', filteredMessageList);
  //   await uploadMessagesHTTP({ messages: filteredMessageList });
  // }

  if (iFrame && !window.location.search.includes('count')) {
    if (!window.location.search.includes('true')) {

      iFrame.addEventListener("load", async function() {
        // const pageMessages = iFrame.contentWindow.document.querySelectorAll('.message');
        // await getPageMessages(pageMessages);

        iFrame.contentWindow.document.querySelector('.next-button').children[0].click();
      });
    }
  } else {
    // const pageMessages = document.querySelectorAll('.message');
    // await getPageMessages(pageMessages);

    document.querySelector('.next-button').children[0].click();
  }
})();