import { createElement } from 'inferno-create-element';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { sendNewUserNote, markUserHostile, setMarker, markUserChatted, setLastInboxMessageUsername } from '../util/httpResponses';
import { Component } from 'inferno';
import { ForumType, ConfigType } from '../util/config';
import { timeSince } from '../util/commonUtils';

export const PreviousMessageInformation = ({ dbUser }: { dbUser: CompiledFullUserObject }) => (
  <div>
    <p><b style={{ 'font-weight': 900 }}>NFD Sent</b></p>
    {dbUser.lastSentMessage ? (
      <p style={{ 'padding-top': '0.2rem', 'padding-bottom': '0.2rem' }}>{dbUser.lastSentMessage.text}</p>
    ) : <p>NA</p>}
    <p><b style={{ 'font-weight': 900 }}>{dbUser.username} Sent</b></p>
    {dbUser.lastReceivedMessage ? (
      <p style={{ 'padding-top': '0.2rem', 'padding-bottom': '0.2rem' }}>{dbUser.lastReceivedMessage.text}</p>
    ) : <p>NA</p>}
  </div>
);

type UserInformationProps = {
  numberOfMessagesFromThisUser?: number;
  dbUser: CompiledFullUserObject;
  usernameConfig?: ConfigType;
}

export const UserInformation = ({
  dbUser,
  usernameConfig,
}: UserInformationProps) => (
  <div style={{ 'margin-top': '1rem', 'margin-bottom': '1rem' }} >
    {usernameConfig?.usernameValue === dbUser.username ? <h1 id='last-user-reade' style={{ 'font-size': '4.5rem' }}>LASTUSER</h1> : ''}
    <span style={{ 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: dbUser.userColor }}>
      {dbUser.username} | {dbUser.user_chat_function_utilised ? <span style={{ color: 'black' }}>(Chatted)</span> : ''}
    </span>
    <span style={{ 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: dbUser.userColor }}>Type: {dbUser.userType} |</span>
    <span style={{ 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: 'blue' }}>Sent: {dbUser.sentCount}</span>
    <br/>
    <span style={{ 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: 'black', 'margin-top': '0.6rem' }}>
      {dbUser.lastReceivedMessage && `${timeSince(new Date(dbUser.lastReceivedMessage.send_date))} since last received message.`}
    </span>
    <span style={{ 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: 'black', 'margin-top': '0.6rem' }}>
      {dbUser.lastSentMessage && `${timeSince(new Date(dbUser.lastSentMessage.send_date))} since last sent message.`}
    </span>


    {/* FUTURE: Display user note, not a huge deal */}
    {/* {dbUser && dbUser.messageTypesSent?.map((item: any) => <span style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}>{item.type}</span>)} */}
  </div>
);

export class SendUserNoteForm extends Component<{ username: string }, { message: string }> {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state?.message}
          onChange={e => this.setState({ message: e.target.value })}
          style={{ 'margin-right': '1rem' }}
        />
        <button onclick={async () => {
          await sendNewUserNote({ username: this.props.username, message: this.state?.message as string });
          this.setState({ message: '' });
        }}>
          Send Note
        </button>
      </div>
    );
  }
};

export const MarkUserHostileButton = ({ username }: { username: string })  => {
  return (
    <button
      style={{ border: '1px solid black' }}
      onclick={async () => {
        await markUserHostile({ username });
      }}>
      Mark User Hostile
    </button>
  )
}

export const MarkUserChattedButton = ({ username }: { username: string })  => {
  return (
    <button
      style={{ border: '1px solid black','margin-right': '0.4rem' }}
      onclick={async () => {
        await markUserChatted({ username });
      }}>
      Mark User Chatted
    </button>
  )
}

export const SetMarkerButton = ({ username, usernameConfig }: { username: string, usernameConfig: ConfigType })  => {
  return (
    <button
      style={{ border: '1px solid black','margin-right': '0.4rem' }}
      onclick={async () => {
        await setMarker({ username, usernameConfig });
      }}>
      Set Marker
    </button>
  )
}

export const SetLastInboxMessageUsernameButton = ({ username, message }: { username: string, message: string })  => {
  return (
    <button
      style={{ border: '1px solid black','margin-right': '0.4rem' }}
      onclick={async () => {
        await setLastInboxMessageUsername({ username, message });
      }}>
      Set Last Inbox Message
    </button>
  )
}
