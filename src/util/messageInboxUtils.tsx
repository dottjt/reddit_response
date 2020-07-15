// message compose
import { render } from 'inferno';
import { createElement } from 'inferno-create-element';

import { latestUnreadMessagesInformation } from './httpResponses';
import { INBOX_LAST_MESSAGE_USER } from './config';
import { PopulateReceivedMessagesPayload, PopulateReceivedMessagesPayloadEXTREME, CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { SendMessageType } from '../types/serverTypes';
import { populateMessageAndSend } from './sendMessageUtils';
import ReplyUserPanel from '../components/ReplyUserPanel';

// messageInboxScriptPre.tsx

export const generateReplyMessageList = (pageMessages): PopulateReceivedMessagesPayload[] => (
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
      type: SendMessageType.UserReplyCustom // NOTE: This will be overwritten at a later stage.
    }
  })
);

export const filterReplyMessageList = (messageList) => messageList.filter(
  message => message.date &&
  !message.subjectReplyToTitle.includes("Tips to") &&
  !message.subjectReplyToTitle.includes("Tips for") &&
  !message.subjectReplyToTitle.includes("comment reply") &&
  !message.subjectReplyToTitle.includes("post reply") &&
  !message.subjectReplyToTitle.includes("Welcome to") &&
  !message.subjectReplyToTitle.includes("Snoosletter")
);

export const compileReplyMessageList = async (filteredMessageList: PopulateReceivedMessagesPayload[]): Promise<PopulateReceivedMessagesPayloadEXTREME[]> => {
  let finalMessageList: PopulateReceivedMessagesPayloadEXTREME[] = [];

  for (const item of filteredMessageList) {
    const compiledUser: CompiledFullUserObject = await latestUnreadMessagesInformation({ username: item.username_sending });
    const isUserLastMessagedUser: boolean = INBOX_LAST_MESSAGE_USER === compiledUser.username;

    // TODO it would be cool to figure out if this message is above or below the other message, would probably have to use a reduce function for this.
    const userRemainingMessages: string[] = filteredMessageList
      .filter(messageItem => messageItem.username_sending === compiledUser.username && messageItem.message !== item.message)
      .map(messageItem => messageItem.message);

    // TODO the type needs to be dependent upon the last message sent by NeverFapDeluxe
    // so if it was middle, it would be user:reply:middle etc.

    const numberOfMessagesFromThisUser: number = filteredMessageList.filter(item => item.username_sending === compiledUser.username).length;
    const userReplyMessage: string = (item?.containerDiv?.querySelector('.md')?.children[0] as HTMLElement)?.innerText;

    finalMessageList.push({
      ...item,
      // type: TODO
      compiledUser,
      isUserLastMessagedUser,
      userRemainingMessages,
      numberOfMessagesFromThisUser,
      userReplyMessage,
    })
  }

  return finalMessageList;
}

export const messageInboxAutomatedMessageSend = async (item: PopulateReceivedMessagesPayloadEXTREME, messageText: string, messageType: SendMessageType): Promise<void> => {
  const replyDelay = localStorage.getItem('replyDelay');
  const replyDelayNumber = Number(replyDelay);
  localStorage.setItem('replyDelay', (replyDelayNumber + 1100).toString());

  setTimeout(async function() {
    console.log(`send automatically - ${item.compiledUser.username} - ${messageType} - delay: ${replyDelayNumber}`);
    await populateMessageAndSend(
      messageText,
      item,
      item.containerDiv,
      item.compiledUser.username,
      messageType,
      true,
    );
  }, replyDelayNumber);
}

export const renderReplyUserPanel = (
  item: PopulateReceivedMessagesPayloadEXTREME,
  documentSub: any,
  counter: number
) => {
  console.log(`no match - ${item.compiledUser.username}`);
  
  const rootId = `r${item.username_sending}-${counter}`;
  if (!rootId.includes('[')) {
    const root = document.createElement('div');
    root.id = rootId;

    item.containerDiv.parentNode?.insertBefore(root, item.containerDiv);
    const domContainer = documentSub.querySelector(`#${rootId}`);

    if (domContainer) {
      render(<ReplyUserPanel
        dbUser={item.compiledUser}
        previousMessageInformation={item}
        userRemainingMessages={item.userRemainingMessages}
        numberOfMessagesFromThisUser={item.numberOfMessagesFromThisUser}
        isUserLastMessagedUser={item.isUserLastMessagedUser}
        userReplyMessage={item.userReplyMessage}
        containerDiv={item.containerDiv} />, domContainer);
    }
  }
}

// NOTE: This is from messageInboxScriptPre, likely an older implementation when I was doing it manually.

// const sendNewMessageLogic = async (containerDiv) => {
//   const textArea = containerDiv.querySelector('textarea');
//   const author = containerDiv.querySelector('.author');
//   const subject = containerDiv.querySelector('.subject-text');
//   const dataPayload: SendNewMessageSendPayload = {
//     username_sending: 'NeverFapDeluxe',
//     username_receiving: author.innerText,
//     subject: subject.innerText,
//     message: textArea.value,
//     send_date: new Date().toString(),
//     type: SendMessageType.NFDCustomSend,
//   };

//   // await sendNewMessage(dataPayload);
// };

// const sendNewMessageEventListener = async (pageMessages) => {
//   [...pageMessages].forEach(containerDiv => {
//     const saveButton = containerDiv.querySelector('.save');
//     console.log('saveButton', saveButton)
//     if (saveButton) {
//       saveButton.addEventListener('click', async () => {
//         await sendNewMessageLogic(containerDiv);
//       });
//     }
//   });
// }

// await sendNewMessageEventListener(pageMessages);