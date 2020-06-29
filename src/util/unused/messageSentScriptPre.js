'use strict';

// import 'util/httpResponses.js' // { uploadMessagesHTTP }

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
  await uploadMessagesHTTP({ messages: filteredMessageList });
}

const main = async () => {
  if (iFrame && !window.location.search.includes('count')) {
    if (!window.location.search.includes('true')) {
      iFrame.addEventListener("load", async function() {
        const pageMessages = iFrame.contentWindow.document.querySelectorAll('.message');
        await getPageMessages(pageMessages);

        iFrame.contentWindow.document.querySelector('.next-button').children[0].click();
      });
    }
  } else {
    const pageMessages = document.querySelectorAll('.message');
    await getPageMessages(pageMessages);

    document.querySelector('.next-button').children[0].click();
  }
}

main();