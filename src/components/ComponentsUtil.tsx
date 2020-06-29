import { createElement } from 'inferno-create-element';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { sendNewUserNote, markUserHostile, setMarker } from '../util/httpResponses';
import { Component } from 'inferno';

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

export const UserInformation = ({ dbUser, markerUsername }: { dbUser: CompiledFullUserObject, markerUsername: string }) => (
  <div style={{ 'margin-top': '1rem', 'margin-bottom': '1rem' }} >
    <span style={{ 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: dbUser.userColor }}>
      {dbUser.username} {markerUsername && markerUsername === dbUser.username ? '(Marker)' : ''} |
    </span>
    <span style={{ 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: dbUser.userColor }}>Type: {dbUser.userType} |</span>
    <span style={{ 'font-size': '20px', 'margin-left': '0.4rem', 'margin-right': '0.4rem', color: 'blue' }}>Sent: {dbUser.sentCount}</span>
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

export const SetMarkerButton = ({ username }: { username: string })  => {
  return (
    <button
      style={{ border: '1px solid black' }}
      onclick={async () => {
        await setMarker({ username });
      }}>
      Set Marker
    </button>
  )
}