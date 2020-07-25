import { PopulateReceivedMessagePayload, PopulateReceivedMessagePayloadEXTREME } from '../types/tamperMonkeyTypes.js';
import { toInboxFilter } from '../util/filter/toInboxFilter.js';
import {
  filterReplyMessageList,
  generateReplyMessageList,
  compileReplyMessageList,
  messageInboxAutomatedMessageSend,
  renderReplyUserPanel
} from '../util/utils/messageInboxUtils.js';

'use strict';

const iFrame = document.querySelector('iframe');

const saveNewUnreadPageMessages = async (
  pageMessages: NodeListOf<Element>, documentSub
) => {
  const messageList: PopulateReceivedMessagePayload[] = generateReplyMessageList(pageMessages);
  const filteredMessageList: PopulateReceivedMessagePayload[] = filterReplyMessageList(messageList);
  const finalMessageList: PopulateReceivedMessagePayloadEXTREME[] = await compileReplyMessageList(filteredMessageList);

  console.log('finalMessageList', finalMessageList);

  let counter = 0;

  for (const item of finalMessageList) {
    const moreThanOneMessage: boolean = finalMessageList.filter(msgItem => msgItem.username_sending === item.username_sending).length > 1;

    const { messageText, messageType, messageMatch } = toInboxFilter(item, moreThanOneMessage);

    if (messageText && messageType && messageMatch) {
      await messageInboxAutomatedMessageSend(item, messageText, messageType, messageMatch);
    }

    if (!messageText && !messageType) {
      counter += 1;
      renderReplyUserPanel(item, documentSub, counter);
    }
  }
}

const main = async () => {
  const mainLogic = async (documentSub, windowSub) => {
    console.log('START: preparing page');

    localStorage.setItem('replyDelay', '1100');

    setTimeout(async function() {
      const pageMessages = documentSub.querySelectorAll('.message');
      if (pageMessages) {
        await saveNewUnreadPageMessages(pageMessages, documentSub);

        // so I start at the bottom of the page now :)
        // windowSub.scrollTo(0,0);

        // click button to next page
        // iFrame.contentWindow.document.querySelector('.next-button').children[0].click();
        console.log('END: next page');
      }
    }, 400);
  }

  if (iFrame && !window.location.search.includes('count')) {
    if (!window.location.search.includes('true')) {
      console.log('In iFrame');
      iFrame.addEventListener("load", async function() {
        await mainLogic(iFrame?.contentWindow?.document, iFrame?.contentWindow);
      });
    }
  } else {
    console.log('Not in iFrame');
    await mainLogic(document, window);
  }
}

main();
