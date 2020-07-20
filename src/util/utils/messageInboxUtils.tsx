// message compose
import { render } from 'inferno';
import { createElement } from 'inferno-create-element';

import { latestUnreadMessagesInformation, populateReceivedMessage } from './httpResponses';
import { INBOX_LAST_MESSAGE_USER } from './config';
import { PopulateReceivedMessagePayload, PopulateReceivedMessagePayloadEXTREME, CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { SendMessageType } from '../types/serverTypes';
import { populateMessageAndSend } from './sendMessageUtils';
import ReplyUserPanel from '../components/ReplyUserPanel';

// messageInboxScriptPre.tsx

export const generateReplyMessageList = (pageMessages): PopulateReceivedMessagePayload[] => (
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

const retrieveUserResponseType = (NFDResponseTypeString: string): SendMessageType => {
  switch (NFDResponseTypeString) {
    case 'start': return SendMessageType.UserReplyStart;
    case 'middle': return SendMessageType.UserReplyMiddle;
    case 'final': return SendMessageType.UserReplyFinal;
    case 'follow': return SendMessageType.UserReplyFollow;
    default: return SendMessageType.UserReplyCustom;
  }
}

export const compileReplyMessageList = async (filteredMessageList: PopulateReceivedMessagePayload[]): Promise<PopulateReceivedMessagePayloadEXTREME[]> => {
  let finalMessageList: PopulateReceivedMessagePayloadEXTREME[] = [];

  for (const item of filteredMessageList) {
    const compiledUser: CompiledFullUserObject = await latestUnreadMessagesInformation({ username: item.username_sending });
    const isUserLastMessagedUser: boolean = INBOX_LAST_MESSAGE_USER === compiledUser.username;

    const otherUserMessages: { message: string, order: string }[] = filteredMessageList
      .filter(messageItem => messageItem.username_sending === compiledUser.username && messageItem.message !== item.message)
      .reduce((acc, messageItem, index) => {
        const itemIndex: number = filteredMessageList.findIndex(innerItem => innerItem.message === item.message);
        const filterItemIndex: number = filteredMessageList.findIndex(innerItem => innerItem.message === messageItem.message);
        const order: string = itemIndex < filterItemIndex ? 'below' : 'above';

        return acc.concat({
          order,
          message: messageItem.message
        })
      }, [] as { message: string, order: string }[]);

    const NFDResponseTypeString: string = compiledUser?.lastSentMessage?.type?.split(':')[0] as string; // i.e. start, middle, final, follow
    const userResponseType: SendMessageType = retrieveUserResponseType(NFDResponseTypeString);

    const numberOfMessagesFromThisUser: number = filteredMessageList.filter(item => item.username_sending === compiledUser.username).length;
    const userReplyMessage: string = (item?.containerDiv?.querySelector('.md')?.children[0] as HTMLElement)?.innerText;

    const updatedItem = {
      ...item,
      type: userResponseType,
    }

    const updatedCompiledUser = await populateReceivedMessage({ message: updatedItem });

    finalMessageList.push({
      ...updatedItem,
      compiledUser: updatedCompiledUser,
      isUserLastMessagedUser,
      otherUserMessages,
      numberOfMessagesFromThisUser,
      userReplyMessage,
    })
  }

  return finalMessageList;
}

export const messageInboxAutomatedMessageSend = async (item: PopulateReceivedMessagePayloadEXTREME, messageText: string, messageType: SendMessageType): Promise<void> => {
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
  item: PopulateReceivedMessagePayloadEXTREME,
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
        otherUserMessages={item.otherUserMessages}
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



// was for messageInboxScriptPre.ts

// const setIntervalFunction = (interval) => {
//   return setInterval(function() {
//     const delayTimer = window.localStorage.getItem('delayTimer');
//     const delayTimerNumber = Number(delayTimer);

//     if (delayTimerNumber > 10000) {
//       console.log('delayTimerNumber', delayTimerNumber);

//       const delayTimerNumberLessOne = delayTimerNumber - 1000;
//       window.localStorage.setItem('delayTimer', delayTimerNumberLessOne.toString());

//       clearInterval(interval);
//       interval = setInterval(interval);
//     }
//   }, 2000);
// }

// let interval;

// interval = setIntervalFunction(interval);