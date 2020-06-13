// ==UserScript==
// @name         Reddit Message Inbox Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/message/inbox
// @match        https://www.reddit.com/message/inbox/
// @match        https://www.reddit.com/message/inbox/?*
// @require      file:///Users/julius.reade/Code/PER/reddit_response/src/tampermonkey/scripts/messageInboxScript.js
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';

  import 'responses/middle.js' // { }
  import 'util/createNodes.js' // { }
  import 'util/httpResponses.js' // { uploadMessagesHTTP }

  const iFrame = document.querySelector('iframe');

  const getPageMessages = async (pageMessages) => {
    const messageList = [...pageMessages].map(containerDiv => {
      const subjectTag = containerDiv.children[1];
      const subjectReplyToTitle = subjectTag.children[0].innerText;

      let subject;
      if (subjectTag.children.length === 1 && !subjectReplyToTitle.includes('re:')) {
        subject = subjectReplyToTitle;
      } else {
        subject = subjectReplyToTitle + ' (no subject/reply)';
      }
      if (subjectTag.children.length === 2) {
        subject = subjectTag.children[1].innerText;
      }

      const entry = containerDiv.children[4];
      const headerTag = entry.children[0].children[1];
      const recipient = headerTag.children[0].innerText;
      const dateTag = headerTag.children[1];
      const date = dateTag.attributes.length === 3 ? dateTag.attributes[1].nodeValue : undefined;

      const message = entry.children[1].children[0].innerText;

      return {
        subject,
        subjectReplyToTitle,
        recipient,
        message,
        date,
      }
    });

    const filteredMessageList = messageList.filter(
      message => message.date &&
      !message.subjectReplyToTitle.includes("Tips to") &&
      !message.subjectReplyToTitle.includes("Tips for") &&
      !message.subjectReplyToTitle.includes("comment reply") &&
      !message.subjectReplyToTitle.includes("post reply") &&
      !message.subjectReplyToTitle.includes("Welcome to") &&
      !message.subjectReplyToTitle.includes("Snoosletter")
    );
    console.log('filteredMessageList', filteredMessageList);
    await uploadMessagesHTTP({ messages: filteredMessageList });
  }

  const getReplyLink = (entry) => {
    switch (entry.children.length) {
      case 5: {
        const entryLinks = entry.children[3];
        return entryLinks.children[7];
      }
      case 4: {
        const entryLinks = entry.children[2];
        return entryLinks.children[5];
      }
      default: {
        return null;
      }
    }
  }

  const populatePageMessages = async (pageMessages) => {
    [...pageMessages].map(containerDiv => {
      const entry = containerDiv.children[4];
      const replyLink = getReplyLink(entry)

      if (replyLink) {
        const replyALink = replyLink.children[0];
        console.log(replyALink);

        replyALink.click();
      }
    });
  };

  const populateMessagePanel = async (pageMessages) => {
    [...pageMessages].map(containerDiv => {
      const child = containerDiv.children[5];

      const messagePanel = document.createElement('div');
      messagePanel.appendChild(createMiddleMessageLinkNode())

      child.parentNode.insertBefore(, child);

      if (replyLink) {
        const replyALink = replyLink.children[0];
        console.log(replyALink);

        replyALink.click();
      }
    });
  };

  if (iFrame && !window.location.search.includes('count')) {
    if (!window.location.search.includes('true')) {
      console.log('START: preparing page');

      iFrame.addEventListener("load", async function() {
        const pageMessages = iFrame.contentWindow.document.querySelectorAll('.message');
        // await getPageMessages(pageMessages);
        await populatePageMessages(pageMessages);
        await populateMessagePanel(pageMessages);

        console.log('END: next page');
        // iFrame.contentWindow.document.querySelector('.next-button').children[0].click();
      });
    }
  } else {
    console.log('START: preparing page');
    const pageMessages = document.querySelectorAll('.message');
    // await getPageMessages(pageMessages);
    await populatePageMessages(pageMessages);
    await populateMessagePanel(pageMessages);

    console.log('END: next page');
    // document.querySelector('.next-button').children[0].click();
  }
})();