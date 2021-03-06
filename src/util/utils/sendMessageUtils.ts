import { SendMessageType, UserForumType } from '../../types/serverTypes';
import { PopulateReceivedMessagePayload } from '../../types/tamperMonkeyTypes';
import { sendNewMessage } from '../httpResponses';
import { ConfigType } from '../config';
import { MatchRegExpResponse } from '../filter/regex/regexUtil';
import { highlightSyntax } from '../filter/regex/highlightSyntax';

export const openReplyLink = async (containerDiv) => {
  const entry = containerDiv.children[4];
  const replyLink = getReplyLink(entry)

  if (replyLink) {
    const replyALink = replyLink.children[0];
    console.log(replyALink);

    replyALink.click();
  }
};

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

export const generatePrelimUrl = (toUsername: string, messageText: string, messageType: SendMessageType, usernameConfig?: ConfigType) => {
  if (usernameConfig) {
    return `https://www.reddit.com/message/compose/?to=${toUsername}&subject=Hey&message=${encodeURIComponent(messageText)}&type=${messageType}`;
  }

  return `https://forum.nofap.com/index.php?conversations/add&title=Hey&to=${toUsername}&message=${encodeURIComponent(messageText)}&type=${messageType}`;
};

export const populateMessageAndSend = async (
  messageText: string,
  previousMessageInformation: PopulateReceivedMessagePayload,
  containerDiv: Element,
  toUsername: string,
  messageType: SendMessageType,
  messageMatch: MatchRegExpResponse[] | undefined,
  sendImmediate: boolean
) => {
  openReplyLink(containerDiv);

  const replyBox = containerDiv.querySelector('.md');

  if (replyBox && messageMatch) {
    [...replyBox.children as any].forEach(ele => {
      const replyText = ele.textContent;

      const highlightArray = highlightSyntax(replyText, messageMatch, false);

      console.log('highlightArray', highlightArray);
      ele.innerHTML = highlightArray.join(' ');
    });
  }

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
        forum_type: UserForumType.Reddit
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
            forum_type: UserForumType.Reddit
          }
          await sendNewMessage(dataPayload);
        }
      });
    }
  } else {
    console.log('cannot find textArea or submitButton')
  }
}

// https://stackoverflow.com/questions/45163512/text-to-html-conversion-in-node-js
// export const textToHTML = (text: string) => (
//   '<p>' + text.replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br>") + '</p>'
// );
