import React from 'react';
import ReactTooltip from 'react-tooltip';

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
  messageType: string
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

      // submitButton?.click();
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
): React.FC => {
  const style = {
    color: color || 'black',
    marginTop: '0.2rem',
    marginBottom: '0.2rem',
    marginLeft: '0.3rem',
    marginRight: '0.3rem',
    fontSize: '12px',
    display: 'inline-block',
  };

  const dataTipId = `${messageType}-${toUsername}`;

  return (
    <>
      <a data-tip data-for={dataTipId} style={style} onClick={async () => {
        await populateMessageAndSend(
          messageText,
          previousMessageInformation,
          containerDiv,
          toUsername,
          messageType
        )
      }} target='_blank'>
        {messageType}
      </a>
      <ReactTooltip className='react-tool-tip-custom' id={dataTipId} type='error'>
        <span>{messageText.split("\n").map((i,key) => (
          <div key={key} style={{ marginBottom: '0.6rem' }}>{i}</div>
        ))}</span>
      </ReactTooltip>
    </>
  );
}

type ReplyUserPanelProps = {
  dbUser: CompiledFullUserObject;
  previousMessageInformation: PopulateReceivedMessagesPayload;
  containerDiv: Element;
}

const ReplyUserPanel = ({ dbUser, containerDiv, previousMessageInformation }: ReplyUserPanelProps): React.FC<ReplyUserPanelProps> => {
  return (
    <div>
      <PreviousMessageInformation dbUser={dbUser} />
      <UserInformation dbUser={dbUser} />
      <UserIsHostileButton username={dbUser.username} />
      <SendUserNoteForm username={dbUser.username} />

      {/* TODO I need one column to send it immediately, the other not to.  */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }} className='reade-user-information-messages'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {createReplyMessageLink('middleWrittenGuide', 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation)}
          {createReplyMessageLink('middleWrittenGuideTwo', 'purple', dbUser.username, middleWrittenGuideTwo, containerDiv, previousMessageInformation)}
          {createReplyMessageLink('joinSubreddit', 'purple', dbUser.username, joinSubreddit, containerDiv, previousMessageInformation)}
        </div>
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
          {createReplyMessageLink('middleWrittenGuide', 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation)}
          {createReplyMessageLink('middleWrittenGuideTwo', 'purple', dbUser.username, middleWrittenGuideTwo, containerDiv, previousMessageInformation)}
        </div> */}
      </div>
    </div>
  );
}

export default ReplyUserPanel;
