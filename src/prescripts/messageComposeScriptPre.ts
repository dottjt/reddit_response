import { sendNewMessage } from '../util/httpResponses';
import {
  getTypeQueryString,
  randomMessageDelay,
  getTimerQueryString,
  closeTabAfterThreeSecondDelay
} from '../util/commonUtils';
import { SendNewMessageSendPayload } from '../types/tamperMonkeyTypes';

'use strict';

const iFrame = document.querySelector('iframe');

type CheckIfFieldsAreFullProps = {
  toInput: string | undefined;
  subjectInput: string | undefined;
  messageInput: string | undefined;
  type: string | undefined;
  timer: string | undefined;
}

const checkIfFieldsAreFull = async ({
  toInput, subjectInput, messageInput, type, timer
}: CheckIfFieldsAreFullProps): Promise<void> => {
  console.log(toInput, subjectInput, messageInput, type, timer);

  // TODO So it seems that if I want to send any ol' message it won't track it, because it won't have any of the above in it.
  if (toInput && subjectInput && messageInput && type && timer) {
    await randomMessageDelay(timer);

    const dataPayload: SendNewMessageSendPayload = {
      username_sending: 'NeverFapDeluxe',
      username_receiving: toInput,
      subject: subjectInput,
      message: messageInput,
      send_date: new Date().toString(),
      type
    };
    await sendNewMessage(dataPayload);

    (iFrame?.contentWindow?.document.querySelector('#send') as HTMLElement).click();

    closeTabAfterThreeSecondDelay();

    console.log('message sent to server');
  } else {
    console.log('some fields empty - set event listener');
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

  await checkIfFieldsAreFull({
    toInput, subjectInput, messageInput, type, timer
  });

  console.log('END: script complete');
}


if (iFrame && !window.location.search.includes('embedded')) {
  iFrame.addEventListener("load", async function() {
    setTimeout(function() {
      main(); //
    }, 1500);
  });
}

