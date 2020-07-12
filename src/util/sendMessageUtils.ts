import { SendMessageType } from '../types/serverTypes';
import { PopulateReceivedMessagesPayload } from '../types/tamperMonkeyTypes';
import { openReplyLink } from './commonUtils';
import { sendNewMessage } from './httpResponses';

const increaseDelayTimer = () => {
  const delayTimer = window.localStorage.getItem('delayTimer') as string;
  const delayTimerNumber = parseInt(delayTimer) + 26000;
  window.localStorage.setItem('delayTimer', delayTimerNumber.toString());
}

export const openNewLink = (prelimUrl: string, messageType: string) => {
  let url = `${prelimUrl}`;
  if (messageType !== 'custom') {
    const delayTimer = window.localStorage.getItem('delayTimer');
    url = url + `&timer=${delayTimer}`;
    increaseDelayTimer();
  }

  window.open(url, '_blank');
}

export const generatePrelimUrlWithTimer = (prelimUrl: string, messageType: string) => {
  let url = `${prelimUrl}`;
  if (messageType !== 'custom') {
    const delayTimer = window.localStorage.getItem('delayTimer');
    url = url + `&timer=${delayTimer}`;
    increaseDelayTimer();
  }
  return url;
}

export const generatePrelimUrl = (toUsername: string, messageText: string, messageType: SendMessageType) => (
  `https://www.reddit.com/message/compose/?to=${toUsername}&subject=Hey&message=${encodeURIComponent(messageText)}&type=${messageType}`
);

export const populateMessageAndSend = async (
  messageText: string,
  previousMessageInformation: PopulateReceivedMessagesPayload,
  containerDiv: Element,
  toUsername: string,
  messageType: SendMessageType,
  sendImmediate: boolean
) => {
  openReplyLink(containerDiv);
  const textArea = containerDiv.querySelector('textarea');
  const submitButton = containerDiv.querySelector('.save') as HTMLInputElement;

  if (textArea && submitButton) {
    textArea.value = messageText;

    if (sendImmediate) {
      const dataPayload = {
        username_sending: 'NeverFapDeluxe',
        username_receiving: toUsername,
        subject: previousMessageInformation.subjectReplyToTitle,
        message: textArea.value,
        send_date: new Date().toString(),
        type: messageType,
      }
      await sendNewMessage(dataPayload);
      submitButton.click();
    } else {
      submitButton.addEventListener('click', async () => {
        const textArea = containerDiv.querySelector('textarea');
        if (textArea) {
          const dataPayload = {
            username_sending: 'NeverFapDeluxe',
            username_receiving: toUsername,
            subject: previousMessageInformation.subjectReplyToTitle,
            message: textArea.value,
            send_date: new Date().toString(),
            type: messageType,
          }
          await sendNewMessage(dataPayload);
        }
      });
    }
  } else {
    console.log('cannot find textArea or submitButton')
  }
}
