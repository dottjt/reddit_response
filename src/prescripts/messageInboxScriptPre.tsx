import { render } from 'inferno';
import { createElement } from 'inferno-create-element';

import { populateReceivedMessages, latestUnreadMessagesInformation } from '../util/httpResponses.js';
import { PopulateReceivedMessagesPayload, SendNewMessageSendPayload, CompiledFullUserObject } from '../types/tamperMonkeyTypes.js';
// import { sendNewMessage } from '../util/httpResponses';
import ReplyUserPanel from '../components/ReplyUserPanel';
import { SendMessageType } from '../types/serverTypes.js';
import { filterRedditInboxMessages } from '../util/noFapFilterUtils.js';
import { populateMessageAndSend } from '../util/sendMessageUtils.js';
// import { populateMessageAndSend } from '../util/sendMessageUtils.js';

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
      type: SendMessageType.NFDCustomSend
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
  // probably need localhost delay for this so it's not all at once.

    const dbUser: CompiledFullUserObject = await latestUnreadMessagesInformation({ username: item.username_sending });

    const {
      messageText,
      messageType,
    } = filterRedditInboxMessages(item, dbUser);

    if (messageText && messageType) {
      const replyDelay = localStorage.getItem('replyDelay');
      const replyDelayNumber = Number(replyDelay);
      localStorage.setItem('replyDelay', (replyDelayNumber + 1100).toString());
      setTimeout(async function() {
        console.log(`send automatically - ${dbUser.username} - ${messageType} - delay: ${replyDelayNumber}`);
        if (item.containerDiv) {
          await populateMessageAndSend(
            messageText,
            item,
            item.containerDiv,
            dbUser.username,
            messageType,
            true,
          );
        }
      }, replyDelayNumber);
    }

    if (!messageText) {
      console.log(`no match - ${dbUser.username}`)
      const rootId = `r${item.username_sending}-${counter}`;
      if (!rootId.includes('[')) {
        const root = document.createElement('div');
        root.id = rootId;
        counter += 1;

        if (item.containerDiv) { // r5ageof6paths-0
          item.containerDiv.parentNode?.insertBefore(root, item.containerDiv);

          setTimeout(function(){}, 800);

          const domContainer = documentSub.querySelector(`#${rootId}`);

          const numberOfMessagesFromThisUser = filteredMessageList.filter(item => item.username_sending === dbUser.username).length;

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
  }

  // console.log('filteredMessageList', filteredMessageList);

  const dataPayload: { messages: PopulateReceivedMessagesPayload[] } = { messages: filteredMessageList };
  await populateReceivedMessages(dataPayload);

  console.log(document.querySelectorAll('#cake'));
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
    type: SendMessageType.UserReplySend,
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

    localStorage.setItem('replyDelay', '1100');

    setTimeout(async function() {
      const pageMessages = documentSub.querySelectorAll('.message');
      if (pageMessages) {
        await saveNewUnreadPageMessages(pageMessages, documentSub);
        await sendNewMessageEventListener(pageMessages);

        windowSub.scrollTo(0,0);
        // iFrame.contentWindow.document.querySelector('.next-button').children[0].click();
        console.log('END: next page');
      }
    }, 400);
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
