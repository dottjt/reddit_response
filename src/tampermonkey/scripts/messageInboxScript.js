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

  // <content>Hey, I saw your post on r/NoFap. I&apos;m sorry to hear you relapsed. How are you currently coping? Were you meditating daily in order to help deal with your feelings and emotions?

const middleWrittenGuide = (
`If you'd like to learn more I've written a guide to the whole process of overcoming porn addiction. The homepage should cover 90% of how NeverFap Deluxe works, and a lot of people also find the NeverFap Deluxe Podcast useful as well. It goes into meditation, healthy coping mechanisms and the basics of recovery.

https://neverfapdeluxe.com/

Also happy to have you join the #accountability program on Discord once you&apos;ve become familiar with the material. Our bot tracks your days and progress.
`
)
 // { }
  const createNode = (text, color) => {
  const node = document.createElement('span');
  node.style.color = color || 'black';
  node.style.fontSize = '20px';
  var textnode = document.createTextNode(text + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}

const createStartMessageLinkNode = (name, color, username, message, key) => {
  const node = document.createElement('a');
  const url = `https://www.reddit.com/message/compose/?to=${username}&subject=Hey&message=${message}&type=${name}`;
  node.href = url;

  node.style.color = color || 'black';
  node.style.fontSize = '16px';

  node.style.marginTop = '0.3rem';
  node.style.marginBottom = '0.3rem';
  node.style.marginLeft = '0.3rem';
  node.style.marginRight = '0.3rem';

  node.target = "_blank"
  var textnode = document.createTextNode(name + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}

const createMiddleMessageLinkNode = (name, color, username, message, key) => {
  const node = document.createElement('div');

  node.style.color = color || 'black';
  node.style.fontSize = '16px';

  node.style.marginTop = '0.3rem';
  node.style.marginBottom = '0.3rem';
  node.style.marginLeft = '0.3rem';
  node.style.marginRight = '0.3rem';

  node.target = "_blank"
  var textnode = document.createTextNode(name + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}

const appendUserInformation = (tag, dbUser) => {
  tag.innerText = '';

  tag.style.marginTop = '1rem';
  tag.style.marginBottom = '1rem';
  tag.style.marginLeft = '1rem';
  tag.style.marginRight = '1rem';

  tag.appendChild(createNode(dbUser.username, dbUser.userColor));
  tag.appendChild(createNode(`Type: ${dbUser.userType}`, dbUser.userColor));
  tag.appendChild(createNode(`Sent: ${dbUser.sentCount}`, 'blue'));

  const lastSentTextcontainer = document.createElement('div');
  var textnode = document.createTextNode(dbUser.lastSentMessage); // Create a text node
  lastSentTextcontainer.appendChild(textnode);

  const container = document.createElement('div');
  container.style.marginTop = '1rem';
  container.style.marginBottom = '1rem';
  container.style.cursor = 'default';

  container.appendChild(createStartMessageLinkNode('customMessage', 'purple', dbUser.username, ''));
  container.appendChild(createStartMessageLinkNode('straightToGuide', 'purple', dbUser.username, straightToGuide));
  container.appendChild(createStartMessageLinkNode('startAdvice', 'purple', dbUser.username, startAdvice));
  container.appendChild(createStartMessageLinkNode('generalAdvice', 'purple', dbUser.username, generalAdvice));
  container.appendChild(createStartMessageLinkNode('mentalhealthNotExerciseAdvice', 'purple', dbUser.username, mentalhealthNotExerciseAdvice));
  container.appendChild(createStartMessageLinkNode('amIAddictedAdvice', 'purple', dbUser.username, amIAddictedAdvice));
  container.appendChild(createStartMessageLinkNode('flatlineAdvice', 'purple', dbUser.username, flatlineAdvice));
  container.appendChild(createStartMessageLinkNode('struggleBasics', 'purple', dbUser.username, struggleBasics));
  container.appendChild(createStartMessageLinkNode('biggestDifference', 'purple', dbUser.username, biggestDifference));
  container.appendChild(createStartMessageLinkNode('noReasonToRelapse', 'purple', dbUser.username, noReasonToRelapse));
  container.appendChild(createStartMessageLinkNode('accountabilityPartner', 'purple', dbUser.username, accountabilityPartner));
  container.appendChild(createStartMessageLinkNode('sorryToHearYouRelapsed', 'purple', dbUser.username, sorryToHearYouRelapsed));

  tag.parentNode.insertBefore(lastSentTextcontainer, container);
  tag.parentNode.insertBefore(container, tag);
};

// NOTE: This is not possible, because there are hundreds of these on a page and only one key.

// document.addEventListener('keypress', function(event) {
//   if (event.key === key) {
//     window.open(url, '_blank');
//     window.focus();
//   }
// })
 // { }
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