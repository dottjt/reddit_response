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

  // console.log(document.querySelector('iframe')?.contentWindow?.document.children[0].children[1])

  // document.querySelectorAll('iframe')[1].contentWindow.document.body.innerHTML = '<p>cake</p>'


  (document.querySelectorAll('.primary')[0] as HTMLInputElement)?.click();
  // https://forum.nofap.com/index.php?conversations/add&title=Hey&to=Krishna108&message=Hey%2C%20I%20saw%20your%20post.%20I%27m%20sorry%20to%20hear%20you%27re%20struggling.%0A%0AThe%20main%20thing%20with%20recovery%20is%20to%20focus%20on%20your%20mental%20health.%20Fundamentally%2C%20it%27s%20about%20developing%20the%20awareness%20to%20change%20your%20behaviours%20so%20you%20can%20learn%20to%20develop%20control%20over%20your%20mind.%20Of%20course%2C%20that%27s%20a%20lot%20easier%20said%20than%20done%2C%20which%20is%20why%20it%20requires%20A%20LOT%20of%20practice.%0A%0ADo%20you%20do%20much%20for%20your%20mental%20health%3F%20Like%20meditate%2C%20and%20stuff%3F%20Personally%20I%20do%2010%20minutes%20of%20meditation%20each%20day%20and%20that%27s%20enough%20for%20me.%20I%27ve%20also%20created%20a%20website%20which%20explains%20the%20whole%20process%20of%20overcoming%20porn%20addiction%2C%20if%20you%27re%20interested.%0A&type=start:advice:struggle&timer=10000

  // https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome


  // if (toInput && subjectInput && messageInput && type && timer) {
  //   await randomMessageDelay(timer);

  //   await sendMessage({
  //     toInput, subjectInput, messageInput, type, timer
  //   });
  // }
  // I need to input this.
  // document.querySelector('.redactor_MessageEditor').contentWindow.document.children[0].children[1]

  // document.querySelectorAll('iframe')[1].contentWindow.document

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

