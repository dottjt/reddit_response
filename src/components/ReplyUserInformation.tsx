import React from 'react';
import ReactTooltip from 'react-tooltip';

import { CompiledFullUserObject, PopulateReceivedMessagesPayload } from '../types/tamperMonkeyTypes';
import { openReplyLink } from '../tampermonkey/util/commonUtils';
import { sendNewMessage } from '../tampermonkey/util/httpResponses';
import {
  middleWrittenGuide,
  middleWrittenGuideTwo
} from '../tampermonkey/util/responses/middle';

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
      console.log('dataPayload', dataPayload);
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
): React.Element => {
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

type ReplyUserInformationProps = {
  dbUser: CompiledFullUserObject;
  previousMessageInformation: PopulateReceivedMessagesPayload;
  containerDiv: Element;
}

const ReplyUserInformation = ({ dbUser, containerDiv, previousMessageInformation }: ReplyUserInformationProps): React.FC<ReplyUserInformationProps> => {
  return (
    <div>
      <div>
        <b style={{ fontWeight: 900 }}>NFD Sent</b>
        {dbUser.lastSentMessage ? (
          <p style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}>{dbUser.lastSentMessage.text}</p>
        ) : 'NA'}
        <b style={{ fontWeight: 900 }}>{dbUser.username} Sent</b>
        {dbUser.lastReceivedMessage ? (
          <p style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}>{dbUser.lastReceivedMessage.text}</p>
        ) : 'NA'}
      </div>

      <div className='reade-user-information-top'>
        <span style={{ fontSize: '20px', marginLeft: '0.4rem', marginRight: '0.4rem', color: dbUser.userColor }}>{dbUser.username}</span>
        <span>|</span>
        <span style={{ fontSize: '20px', marginLeft: '0.4rem', marginRight: '0.4rem', color: dbUser.userColor }}>Type: {dbUser.userType}</span>
        <span>|</span>
        <span style={{ fontSize: '20px', marginLeft: '0.4rem', marginRight: '0.4rem', color: 'blue' }}>Sent: {dbUser.sentCount}</span>
        <p>{dbUser && dbUser.messageTypesSent?.map((item: any) => <span style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}>{item.type}</span>)}</p>
      </div>

      {/* TODO I need one column to send it immediately, the other not to.  */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }} className='reade-user-information-messages'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {createReplyMessageLink('middleWrittenGuide', 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation)}
          {createReplyMessageLink('middleWrittenGuideTwo', 'purple', dbUser.username, middleWrittenGuideTwo, containerDiv, previousMessageInformation)}
        </div>
        {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
          {createReplyMessageLink('middleWrittenGuide', 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation)}
          {createReplyMessageLink('middleWrittenGuideTwo', 'purple', dbUser.username, middleWrittenGuideTwo, containerDiv, previousMessageInformation)}
        </div> */}
      </div>
    </div>
  );
}

export default ReplyUserInformation;
