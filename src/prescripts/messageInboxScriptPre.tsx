import { render } from 'inferno';
import { createElement } from 'inferno-create-element';

import { populateReceivedMessages, latestUnreadMessagesInformation } from '../util/httpResponses.js';
import { PopulateReceivedMessagesPayload, SendNewMessageSendPayload } from '../types/tamperMonkeyTypes.js';
import { sendNewMessage } from '../util/httpResponses';
import ReplyUserPanel from '../components/ReplyUserPanel';

'use strict';

const iFrame = document.querySelector('iframe');

const generateRelevantMessageListInformation = (pageMessages): PopulateReceivedMessagesPayload[] => (
  [...pageMessages].map(containerDiv => {
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
      containerDiv,
      subject,
      subjectReplyToTitle,
      username_receiving: 'NeverFapDeluxe',
      username_sending: recipient,
      message,
      date,
      type: 'user_response'
    }
  })
);

const saveNewUnreadPageMessages = async (pageMessages: NodeListOf<Element>, documentSub) => {
  const messageList: PopulateReceivedMessagesPayload[] = generateRelevantMessageListInformation(pageMessages);

  const filteredMessageList: PopulateReceivedMessagesPayload[] = messageList.filter(
    message => message.date &&
    !message.subjectReplyToTitle.includes("Tips to") &&
    !message.subjectReplyToTitle.includes("Tips for") &&
    !message.subjectReplyToTitle.includes("comment reply") &&
    !message.subjectReplyToTitle.includes("post reply") &&
    !message.subjectReplyToTitle.includes("Welcome to") &&
    !message.subjectReplyToTitle.includes("Snoosletter")
  );

  let counter = 0;
  for (const item of filteredMessageList) {
    const rootId = `r${item.username_sending}-${counter}`;
    if (!rootId.includes('[')) {
      const root = document.createElement('div');
      root.id = rootId;
      counter += 1;

      if (item.containerDiv) { // r5ageof6paths-0
        item.containerDiv.parentNode?.insertBefore(root, item.containerDiv);

        setTimeout(function(){ console.log('')}, 800);

        const domContainer = documentSub.querySelector(`#${rootId}`);

        const dbUser = await latestUnreadMessagesInformation({ username: item.username_sending });

        const numberOfMessagesFromThisUser = filteredMessageList.filter(item => item.username_sending === dbUser.username).length;
        console.log('numberOfMessagesFromThisUser - ' + dbUser.username, numberOfMessagesFromThisUser);

        if (domContainer) {
          render(<ReplyUserPanel
            dbUser={dbUser}
            numberOfMessagesFromThisUser={numberOfMessagesFromThisUser}
            previousMessageInformation={item}
            containerDiv={item.containerDiv} />, domContainer);
        }
      }
    }
  }

  console.log('filteredMessageList', filteredMessageList);

  const dataPayload: { messages: PopulateReceivedMessagesPayload[] } = { messages: filteredMessageList };
  await populateReceivedMessages(dataPayload);
}

const sendNewMessageLogic = async (containerDiv) => {
  const textArea = containerDiv.querySelector('textarea');
  const author = containerDiv.querySelector('.author');
  const subject = containerDiv.querySelector('.subject-text');
  const dataPayload: SendNewMessageSendPayload = {
    username_sending: 'NeverFapDeluxe',
    username_receiving: author.innerText,
    subject: subject.innerText,
    message: textArea.value,
    send_date: new Date().toString(),
    type: 'reply',
  };

  // await sendNewMessage(dataPayload);
};

const sendNewMessageEventListener = async (pageMessages) => {
  [...pageMessages].forEach(containerDiv => {
    const saveButton = containerDiv.querySelector('.save');
    if (saveButton) {
      saveButton.addEventListener('click', async () => {
        await sendNewMessageLogic(containerDiv);
      });
    }
  });
}

// TODO Latest message from

const main = async () => {
  const mainLogic = async (documentSub, windowSub) => {
    console.log('START: preparing page');

    const pageMessages = documentSub.querySelectorAll('.message');
    if (pageMessages) {
      await saveNewUnreadPageMessages(pageMessages, documentSub);
      await sendNewMessageEventListener(pageMessages);

      windowSub.scrollTo(0,0);
      // iFrame.contentWindow.document.querySelector('.next-button').children[0].click();
      console.log('END: next page');
    }
  }

  console.log('1');
  if (iFrame && !window.location.search.includes('count')) {
    console.log('2');
    if (!window.location.search.includes('true')) {
      console.log('3');

      iFrame.addEventListener("load", async function() {
        await mainLogic(iFrame?.contentWindow?.document, iFrame?.contentWindow);
      });
    }
  } else {
    console.log('4');
    // console.log('check', iFrame?.contentWindow?.document)
    await mainLogic(document, window);
  }
}

main();
