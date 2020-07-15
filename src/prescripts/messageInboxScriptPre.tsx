import { populateReceivedMessages } from '../util/httpResponses.js';
import { PopulateReceivedMessagesPayload, PopulateReceivedMessagesPayloadEXTREME } from '../types/tamperMonkeyTypes.js';
import { filterRedditInboxMessages } from '../util/filter/filterIndex.js';
import {
  filterReplyMessageList,
  generateReplyMessageList,
  compileReplyMessageList,
  messageInboxAutomatedMessageSend,
  renderReplyUserPanel
} from '../util/messageInboxUtils.js';

'use strict';

const iFrame = document.querySelector('iframe');

const saveNewUnreadPageMessages = async (
  pageMessages: NodeListOf<Element>, documentSub
) => {
  const messageList: PopulateReceivedMessagesPayload[] = generateReplyMessageList(pageMessages);
  const filteredMessageList: PopulateReceivedMessagesPayload[] = filterReplyMessageList(messageList);
  const finalMessageList: PopulateReceivedMessagesPayloadEXTREME[] = await compileReplyMessageList(filteredMessageList);

  let counter = 0;
  for (const item of finalMessageList) {
    const { messageText, messageType } = filterRedditInboxMessages(item, item.compiledUser);
    console.log('result', item.compiledUser.username, messageText, messageType);
    if (messageText && messageType) {
      await messageInboxAutomatedMessageSend(item, messageText, messageType);
    }

    if (!messageText) {
      counter += 1;
      renderReplyUserPanel(item, documentSub, counter);
    }
  }

  await populateReceivedMessages({ messages: finalMessageList });
}

const main = async () => {
  const mainLogic = async (documentSub, windowSub) => {
    console.log('START: preparing page');

    localStorage.setItem('replyDelay', '1100');

    setTimeout(async function() {
      const pageMessages = documentSub.querySelectorAll('.message');
      if (pageMessages) {
        await saveNewUnreadPageMessages(pageMessages, documentSub);

        windowSub.scrollTo(0,0);
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
