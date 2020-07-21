import { sendNewMessage } from '../util/httpResponses';
import {
  getTypeQueryString,
  randomMessageDelay,
  getTimerQueryString,
  closeTabAfterDelay,
  getMessageQueryString
} from '../util/utils/messageComposeUtils';
import { SendNewMessageSendPayload } from '../types/tamperMonkeyTypes';
import { SendMessageType, UserForumType } from '../types/serverTypes';

'use strict';

const iFrame = document.querySelector('iframe');

type SendMessageProps = {
  toInput: string | undefined;
  subjectInput: string | undefined;
  messageInput: string | undefined;
  type: SendMessageType | undefined;
  timer: string | undefined;
}

const sendMessage = async ({
  toInput, subjectInput, messageInput, type, timer
}: SendMessageProps): Promise<void> => {
  console.log(toInput, subjectInput, messageInput, type, timer);

  if (toInput && subjectInput && messageInput && type) {
    (iFrame?.contentWindow?.document.querySelector('#send') as HTMLElement).click();

    const dataPayload: SendNewMessageSendPayload = {
      username_sending: 'NeverFapDeluxe',
      username_receiving: toInput,
      subject: subjectInput,
      message: messageInput,
      send_date: new Date().toString(),
      forum_type: UserForumType.Reddit,
      type
    };

    await sendNewMessage(dataPayload);
    console.log('message sent to server');

    await randomMessageDelay('1');

    const messageInputAgain: string | undefined = (<HTMLInputElement>iFrame?.contentWindow?.document?.querySelectorAll('textarea[name=text]')[1]).value;
    if (messageInputAgain === '') {
      await closeTabAfterDelay(3000, window);
    }
  } else {
    console.log('some fields empty - set click event listener');
    iFrame?.contentWindow?.document.querySelector('#send')?.addEventListener('click', () => {
      main();
    });
  }
};

const main = async () => {
  console.log('START: preparing message');

  const toInput: string | undefined = (<HTMLInputElement>document.querySelector('input[name=recipients]')).value;
  const subjectInput: string | undefined = (<HTMLInputElement>document.querySelector('input[name=title]')).value;
  const messageInput: string | undefined = getMessageQueryString(window.location.search);
  const type: SendMessageType | undefined = getTypeQueryString(window.location.search) as SendMessageType;
  const timer: string | undefined = getTimerQueryString(window.location.search);

  console.log('toInput', toInput);
  console.log('subjectInput', subjectInput);
  console.log('messageInput', decodeURI(messageInput).replace(/%2C/g, ',').replace(/%3F/g, '?'));
  console.log('type', type);
  console.log('timer', timer);


  // if (toInput && subjectInput && messageInput && type && timer) {
  //   await randomMessageDelay(timer);

  //   await sendMessage({
  //     toInput, subjectInput, messageInput, type, timer
  //   });
  // }
  // I need to input this.
  // document.querySelector('.redactor_MessageEditor').contentWindow.document.children[0].children[1]

  // TODO
  // if (!timer) {
  //   iFrame?.contentWindow?.document.querySelector('#send')?.addEventListener('click', () => {
  //     main();
  //   });
  // }

  console.log('END: script complete');
}


if (iFrame && !window.location.search.includes('embedded')) {
  iFrame.addEventListener("load", async function() {
    setTimeout(function() {
      main(); //
    }, 1500);
  });
}
