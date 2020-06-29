import React, { useState } from 'react';
import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { sendNewUserNote, markUserHostile } from '../util/httpResponses';

export const PreviousMessageInformation = ({ dbUser }): React.FC<CompiledFullUserObject> => (
  <div>
    <p><b style={{ fontWeight: 900 }}>NFD Sent</b></p>
    {dbUser.lastSentMessage ? (
      <p style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}>{dbUser.lastSentMessage.text}</p>
    ) : <p>NA</p>}
    <p><b style={{ fontWeight: 900 }}>{dbUser.username} Sent</b></p>
    {dbUser.lastReceivedMessage ? (
      <p style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}>{dbUser.lastReceivedMessage.text}</p>
    ) : <p>NA</p>}
  </div>
);

export const UserInformation = ({ dbUser }): React.FC<CompiledFullUserObject> => (
  <div className='reade-user-information-top'>
    <span style={{ fontSize: '20px', marginLeft: '0.4rem', marginRight: '0.4rem', color: dbUser.userColor }}>{dbUser.username} |</span>
    <span style={{ fontSize: '20px', marginLeft: '0.4rem', marginRight: '0.4rem', color: dbUser.userColor }}>Type: {dbUser.userType} |</span>
    <span style={{ fontSize: '20px', marginLeft: '0.4rem', marginRight: '0.4rem', color: 'blue' }}>Sent: {dbUser.sentCount}</span>
    {/* {dbUser && dbUser.messageTypesSent?.map((item: any) => <span style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem' }}>{item.type}</span>)} */}
  </div>
);

export const SendUserNoteForm = ({ username }): React.FC => {
  const [message, setMessage] = useState();

  return (
    <div>
      <input value={message} onChange={e => setMessage(e.target.value)}/>
      <button onClick={async () => {
        await sendNewUserNote({ username, message });
        setMessage('');
      }}>
        Send Note
      </button>
    </div>
  );
};

export const UserIsHostileButton = ({ username }): React.FC => {
  return (
    <button onClick={async () => {
      await markUserHostile({ username });
    }}>
      Mark User Hostile
    </button>
  )
}