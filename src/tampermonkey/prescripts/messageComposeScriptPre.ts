import { sendPostRequest } from '../util/httpResponses';
import { getTypeQueryString, randomMessageDelay } from '../util/commonUtils';

'use strict';

const iFrame = document.querySelector('iframe');

const checkIfFieldsAreFull = async (toInput, subjectInput, messageInput, type) => {
  console.log(toInput, subjectInput, messageInput, type)

  if (toInput && subjectInput && messageInput) {
    await randomMessageDelay();

    const dataPayload = { to: toInput, subject: subjectInput, message: messageInput, type };
    await sendPostRequest(dataPayload, '/sendNewMessage');

    // document.querySelector('#send').click();
    console.log('message sent to server');
  } else {
    console.log('some fields empty');
  }
};

if (iFrame && !window.location.search.includes('embedded')) {
  iFrame.addEventListener("load", async function() {
    console.log('START: preparing message');

    const toInput = (<HTMLInputElement>iFrame.contentWindow?.document?.querySelector('input[name=to]')).value;
    const subjectInput = (<HTMLInputElement>iFrame.contentWindow?.document?.querySelector('input[name=subject]')).value;
    const messageInput = (<HTMLInputElement>iFrame.contentWindow?.document?.querySelectorAll('textarea[name=text]')[1]).value;
    const type = getTypeQueryString(window.location.search);

    await checkIfFieldsAreFull(toInput, subjectInput, messageInput, type);

    console.log('END: script complete');
  });
}

