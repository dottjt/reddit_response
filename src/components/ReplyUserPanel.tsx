import { createElement } from 'inferno-create-element';

import { CompiledFullUserObject, PopulateReceivedMessagesPayload } from '../types/tamperMonkeyTypes';
import { openReplyLink } from '../util/commonUtils';
import { sendNewMessage } from '../util/httpResponses';
import {
  middleWrittenGuide,
  middleWrittenGuideTwo,
  joinSubreddit
} from '../util/responses/middle';
import { PreviousMessageInformation, UserInformation, SendUserNoteForm, UserIsHostileButton } from './ComponentsUtil';

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
    if (textArea.value.length > 0) {

      const dataPayload = {
        username_sending: 'NeverFapDeluxe',
        username_receiving: toUsername,
        subject: previousMessageInformation.subjectReplyToTitle,
        message: messageText,
        send_date: new Date().toString(),
        type: messageType,
      }

      await sendNewMessage(dataPayload);
      if (sendImmediate) {
        submitButton?.click();
      }

      // TODO: So instead of sending the message straight away once the reply link has been opened, it should wait for the submitButton?.click() THEN go and send it. Otherwise the messages aren't correct
    }
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
}

const ReplyUserPanel = ({ dbUser, containerDiv, previousMessageInformation }: ReplyUserPanelProps) => {
  return (
    <div>
      <PreviousMessageInformation dbUser={dbUser} />
      <UserInformation dbUser={dbUser} />
      <div style={{ display: 'flex' }}>
        <UserIsHostileButton username={dbUser.username} />
        <SendUserNoteForm username={dbUser.username} />
      </div>

      <div style={{ display: 'flex', 'justify-content': 'space-between' }}>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          <h4>Send</h4>
          {createReplyMessageLink('middleWrittenGuide', 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink('middleWrittenGuideTwo', 'purple', dbUser.username, middleWrittenGuideTwo, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink('joinSubreddit', 'purple', dbUser.username, joinSubreddit, containerDiv, previousMessageInformation, false)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h4>Send Immediate</h4>
          {createReplyMessageLink('middleWrittenGuide', 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation, true)}
          {createReplyMessageLink('middleWrittenGuideTwo', 'purple', dbUser.username, middleWrittenGuideTwo, containerDiv, previousMessageInformation, true)}
          {createReplyMessageLink('joinSubreddit', 'purple', dbUser.username, joinSubreddit, containerDiv, previousMessageInformation, true)}
        </div>
      </div>
    </div>
  );
}

export default ReplyUserPanel;
