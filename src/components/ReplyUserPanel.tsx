import { createElement } from 'inferno-create-element';

import { CompiledFullUserObject, PopulateReceivedMessagesPayload } from '../types/tamperMonkeyTypes';
import {
  middleWrittenGuide,
  middleGuideNoWorries,
  middleGuideLinkYou,
  middleGuideMeditationAdvice,
} from '../util/responses/middle';

import {
  finalJoinSubreddit,
  finalFantastic,
  finalHardTime,
  finalShareResources
} from '../util/responses/final';

import { PreviousMessageInformation, UserInformation, SendUserNoteForm, MarkUserHostileButton, MarkUserChattedButton, SetLastInboxMessageUsernameButton } from './ComponentsUtil';
import { SendMessageType } from '../types/serverTypes';
import { populateMessageAndSend } from '../util/sendMessageUtils';

const createReplyMessageLink = (
  messageType: SendMessageType,
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
  isUserLastMessagedUser: boolean;
  userRemainingMessages: string[];
  userReplyMessage: string;
}

const ReplyUserPanel = ({
  dbUser,
  containerDiv,
  previousMessageInformation,
  numberOfMessagesFromThisUser,
  isUserLastMessagedUser,
  userRemainingMessages,
  userReplyMessage
}: ReplyUserPanelProps) => {
  return (
    <div>
      {isUserLastMessagedUser && (
        <p style={{ 'font-size': '1rem', 'padding-top': '1.2rem', 'padding-bottom': '1.2rem', 'padding-left': '0.4rem', 'margin-right': '0.4rem', 'background': 'mediumpurple', 'color': 'white' }}>Last Messaged User</p>
      )}

      <UserInformation dbUser={dbUser} numberOfMessagesFromThisUser={numberOfMessagesFromThisUser} />
      <div style={{ display: 'flex' }}>
        <SendUserNoteForm username={dbUser.username} />
        <MarkUserChattedButton username={dbUser.username} />
        <MarkUserHostileButton username={dbUser.username} />
        <SetLastInboxMessageUsernameButton username={dbUser.username} message='' />
      </div>
      <PreviousMessageInformation dbUser={dbUser} />

      <div id='cake' style={{ display: 'flex', 'margin-top': '1rem', 'margin-bottom': '1rem' }}>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          {!dbUser?.lastSentMessage?.type.includes('middle') && (
            <div>
              <h4>Send</h4>
              {createReplyMessageLink(SendMessageType.MiddleGuideIfYouWouldLikeToLearnMore, 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation, false)}
              {createReplyMessageLink(SendMessageType.MiddleGuideNoWorries, 'purple', dbUser.username, middleGuideNoWorries, containerDiv, previousMessageInformation, false)}
              {createReplyMessageLink(SendMessageType.MiddleGuideLinkYou, 'purple', dbUser.username, middleGuideLinkYou, containerDiv, previousMessageInformation, false)}
              {createReplyMessageLink(SendMessageType.MiddleGuideMeditationAdvice, 'purple', dbUser.username, middleGuideMeditationAdvice, containerDiv, previousMessageInformation, false)}
            </div>
          )}
          <h4 style={{ 'margin-top': '0.3rem', 'margin-left': '0.4rem', 'margin-right': '0.4rem' }}>Final</h4>
          {createReplyMessageLink(SendMessageType.FinalJoinSubreddit, 'purple', dbUser.username, finalJoinSubreddit, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink(SendMessageType.FinalHardTime, 'purple', dbUser.username, finalHardTime, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink(SendMessageType.FinalFantastic, 'purple', dbUser.username, finalFantastic, containerDiv, previousMessageInformation, false)}
          {createReplyMessageLink(SendMessageType.FinalShareResources, 'purple', dbUser.username, finalShareResources, containerDiv, previousMessageInformation, false)}
          <h4 style={{ 'margin-top': '0.3rem', 'margin-left': '0.4rem', 'margin-right': '0.4rem' }}>Custom</h4>
          {createReplyMessageLink(SendMessageType.NFDCustomSend, 'purple', dbUser.username, '', containerDiv, previousMessageInformation, false)}
        </div>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          {!dbUser?.lastSentMessage?.type.includes('middle') && (
            <div>
              <h4>Send Immediate</h4>
              {createReplyMessageLink(SendMessageType.MiddleGuideIfYouWouldLikeToLearnMore, 'purple', dbUser.username, middleWrittenGuide, containerDiv, previousMessageInformation, true)}
              {createReplyMessageLink(SendMessageType.MiddleGuideNoWorries, 'purple', dbUser.username, middleGuideNoWorries, containerDiv, previousMessageInformation, true)}
              {createReplyMessageLink(SendMessageType.MiddleGuideLinkYou, 'purple', dbUser.username, middleGuideLinkYou, containerDiv, previousMessageInformation, true)}
              {createReplyMessageLink(SendMessageType.MiddleGuideMeditationAdvice, 'purple', dbUser.username, middleGuideMeditationAdvice, containerDiv, previousMessageInformation, true)}
            </div>
          )}
          <h4 style={{ 'margin-top': '0.3rem', 'margin-left': '0.4rem', 'margin-right': '0.4rem' }}>Final Immediate</h4>
          {createReplyMessageLink(SendMessageType.FinalJoinSubreddit, 'purple', dbUser.username, finalJoinSubreddit, containerDiv, previousMessageInformation, true)}
          {createReplyMessageLink(SendMessageType.FinalHardTime, 'purple', dbUser.username, finalHardTime, containerDiv, previousMessageInformation, true)}
          {createReplyMessageLink(SendMessageType.FinalFantastic, 'purple', dbUser.username, finalFantastic, containerDiv, previousMessageInformation, true)}
          {createReplyMessageLink(SendMessageType.FinalShareResources, 'purple', dbUser.username, finalShareResources, containerDiv, previousMessageInformation, true)}
        </div>
      </div>

      <div style={{ 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: 'black' }}>
        {numberOfMessagesFromThisUser && `Message count: ${numberOfMessagesFromThisUser}`}
      </div>

      {dbUser?.lastSentMessage?.type.includes('start') && (
        <p style={{ 'font-size': '1rem', 'padding-top': '1.2rem', 'padding-bottom': '1.2rem', 'padding-left': '0.4rem', 'margin-right': '0.4rem', 'background': 'yellow', 'color': 'black' }}>SEND MIDDLE</p>
      )}

      {dbUser?.lastSentMessage?.type.includes('middle') && (
        <p style={{ 'font-size': '1rem', 'padding-top': '1.2rem', 'padding-bottom': '1.2rem', 'padding-left': '0.4rem', 'margin-right': '0.4rem', 'background': 'orange', 'color': 'black' }}>SEND FINAL</p>
      )}

      {dbUser?.lastSentMessage?.type.includes('final') && (
        <p style={{ 'font-size': '1rem', 'padding-top': '1.2rem', 'padding-bottom': '1.2rem', 'padding-left': '0.4rem', 'margin-right': '0.4rem', 'background': 'red', 'color': 'black' }}>DONE</p>
      )}

      {dbUser?.lastSentMessage?.type.includes('follow') && (
        <p style={{ 'font-size': '1rem', 'padding-top': '1.2rem', 'padding-bottom': '1.2rem', 'padding-left': '0.4rem', 'margin-right': '0.4rem', 'background': 'purple', 'color': 'white' }}>FOLLOW: SEND MIDDLE</p>
      )}

      {userRemainingMessages && (
        <div>
          {userRemainingMessages.map(message => (
            <p style={{ 'font-size': '1rem', 'padding-top': '1.2rem', 'padding-bottom': '1.2rem', 'padding-left': '0.4rem', 'margin-right': '0.4rem', 'border': '1px solid black' }}>
              {message}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReplyUserPanel;
