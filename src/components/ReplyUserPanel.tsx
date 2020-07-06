import { createElement } from 'inferno-create-element';

import { CompiledFullUserObject, PopulateReceivedMessagesPayload } from '../types/tamperMonkeyTypes';
import { openReplyLink } from '../util/commonUtils';
import { sendNewMessage } from '../util/httpResponses';
import {
  middleWrittenGuide,
  middleWrittenGuideTwo,
  joinSubreddit,
  thatsFantastic,
  hardTime
} from '../util/responses/middle';
import { PreviousMessageInformation, UserInformation, SendUserNoteForm, MarkUserHostileButton, MarkUserChattedButton } from './ComponentsUtil';

const populateMessageAndSend = async (
  messageText: string,
  previousMessageInformation: PopulateReceivedMessagesPayload,
  containerDiv: Element,
  toUsername: string,
  messageType: string,
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

const createReplyMessageLink = (
  messageType: string,
  color: string,
  toUsername: string,
  messageText: string,
  containerDiv: Element,
  previousMessageInformation: PopulateReceivedMessagesPayload,
  sendImmediate: boolean,
) => {
  const style = {
    color: color || 'black',
    'margin-top': '0.2rem',
    'margin-bottom': '0.2rem',
    'margin-left': '0.3rem',
    'margin-right': '0.3rem',
    'font-size': '12px',
    display: 'inline-block',
  };

  const dataTipId = `${messageType}-${toUsername}`;

  return (
    <div>
      <a data-tip data-for={dataTipId} style={style} onclick={async () => {
        await populateMessageAndSend(
          messageText,
          previousMessageInformation,
          containerDiv,
          toUsername,
          messageType,
          sendImmediate
        )
      }} target='_blank'>
        {messageType}
      </a>
      {/* <ReactTooltip className='react-tool-tip-custom' id={dataTipId} type='error'>
        <span>{messageText.split("\n").map((i,key) => (
          <div key={key} style={{ marginBottom: '0.6rem' }}>{i}</div>
        ))}</span>
      </ReactTooltip> */}
    </div>
  );
}

type ReplyUserPanelProps = {
  dbUser: CompiledFullUserObject;
  previousMessageInformation: PopulateReceivedMessagesPayload;
  containerDiv: Element;
  numberOfMessagesFromThisUser: number;
}

const ReplyUserPanel = ({
  dbUser,
  containerDiv,
  previousMessageInformation,
  numberOfMessagesFromThisUser
}: ReplyUserPanelProps) => {
  return (
    <div>
      <UserInformation dbUser={dbUser} numberOfMessagesFromThisUser={numberOfMessagesFromThisUser} />
      <PreviousMessageInformation dbUser={dbUser} />
      <div style={{ display: 'flex' }}>
        <SendUserNoteForm username={dbUser.username} />
        <MarkUserChattedButton username={dbUser.username} />
        <MarkUserHostileButton username={dbUser.username} />
      </div>

      <div style={{ display: 'flex', 'margin-top': '1rem', 'margin-bottom': '1rem' }}>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          <h4>Send</h4>
          {createReplyMessageLink('middleWrittenGuide', 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink('middleWrittenGuideTwo', 'purple', dbUser.username, middleWrittenGuideTwo, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink('joinSubreddit', 'purple', dbUser.username, joinSubreddit, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink('hardTime', 'purple', dbUser.username, hardTime, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink('thatsFantastic', 'purple', dbUser.username, thatsFantastic, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink('customReply', 'purple', dbUser.username, '', containerDiv, previousMessageInformation, false)}
        </div>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          <h4>Send Immediate</h4>
          {createReplyMessageLink('middleWrittenGuide', 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation, true)}
          {createReplyMessageLink('middleWrittenGuideTwo', 'purple', dbUser.username, middleWrittenGuideTwo, containerDiv, previousMessageInformation, true)}
          {createReplyMessageLink('joinSubreddit', 'purple', dbUser.username, joinSubreddit, containerDiv, previousMessageInformation, true)}
          {createReplyMessageLink('hardTime', 'purple', dbUser.username, hardTime, containerDiv, previousMessageInformation, true)}
          {createReplyMessageLink('thatsFantastic', 'purple', dbUser.username, thatsFantastic, containerDiv, previousMessageInformation, true)}
        </div>
      </div>
    </div>
  );
}

export default ReplyUserPanel;
