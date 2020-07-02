import { sendNewMessage } from '../util/httpResponses';
import {
  getTypeQueryString,
  randomMessageDelay,
  getTimerQueryString,
  closeTabAfterDelay
} from '../util/commonUtils';
import { SendNewMessageSendPayload } from '../types/tamperMonkeyTypes';

'use strict';

const iFrame = document.querySelector('iframe');

type SendMessageProps = {
  toInput: string | undefined;
  subjectInput: string | undefined;
  messageInput: string | undefined;
  type: string | undefined;
  timer: string | undefined;
}

const sendMessage = async ({
  toInput, subjectInput, messageInput, type, timer
}: SendMessageProps): Promise<void> => {
  console.log(toInput, subjectInput, messageInput, type, timer);

  if (toInput && subjectInput && messageInput && type) {
    // TODO this is in a different iFrame, so I have literally no idea what I can do.
    // const status = iFrame?.contentWindow?.document.querySelector('.status');
    // if (status.inner)

    (iFrame?.contentWindow?.document.querySelector('#send') as HTMLElement).click();

    const dataPayload: SendNewMessageSendPayload = {
      username_sending: 'NeverFapDeluxe',
      username_receiving: toInput,
      subject: subjectInput,
      message: messageInput,
      send_date: new Date().toString(),
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

  const toInput: string | undefined = (<HTMLInputElement>iFrame?.contentWindow?.document?.querySelector('input[name=to]')).value;
  const subjectInput: string | undefined = (<HTMLInputElement>iFrame?.contentWindow?.document?.querySelector('input[name=subject]')).value;
  const messageInput: string | undefined = (<HTMLInputElement>iFrame?.contentWindow?.document?.querySelectorAll('textarea[name=text]')[1]).value;
  const type: string | undefined = getTypeQueryString(window.location.search);
  const timer: string | undefined = getTimerQueryString(window.location.search);

  if (toInput && subjectInput && messageInput && type && timer) {
    await randomMessageDelay(timer);

    await sendMessage({
      toInput, subjectInput, messageInput, type, timer
    });
  }

  if (!timer) {
    iFrame?.contentWindow?.document.querySelector('#send')?.addEventListener('click', () => {
      main();
    });
  }

  console.log('END: script complete');
}


if (iFrame && !window.location.search.includes('embedded')) {
  iFrame.addEventListener("load", async function() {
    setTimeout(function() {
      main(); //
    }, 1500);
  });
}

