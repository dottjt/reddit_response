import React, { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

import {
  straightToGuide,
  startAdvice,
  generalAdvice,
  mentalhealthNotExerciseAdvice,
  amIAddictedAdvice,
  flatlineAdvice,
  struggleBasics,
  biggestDifference,
  noReasonToRelapse,
  accountabilityPartner,
  sorryToHearYouRelapsed,
} from '../responses/start';

import { CompiledFullUserObject } from '../../../types/tamperMonkeyTypes';

const createStartMessageLink = (
  messageType: string,
  color: string,
  toUsername: string,
  messageText: string,
): React.Element => {
  const url = `https://www.reddit.com/message/compose/?to=${toUsername}&subject=Hey&message=${messageText}&type=${messageType}`;

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
      <a data-tip data-for={dataTipId} style={style} href={url} target='_blank'>
        {messageType}
      </a>
      <ReactTooltip className='react-tool-tip-custom' id={dataTipId} type='error'>
        <span>{messageText}</span>
      </ReactTooltip>
    </>
  );
}

type UserInformationProps = {
  dbUser: CompiledFullUserObject;
}

const UserInformation = ({ dbUser }): React.FC<UserInformationProps> => {
  console.log(startAdvice)
  return (
    <div>
      <div className='reade-user-information-top'>
        <span style={{ fontSize: '20px', marginRight: '0.4rem', color: dbUser.userColor }}>{dbUser.username}</span>
        <span style={{ fontSize: '20px', marginRight: '0.4rem', color: dbUser.userColor }}>Type: {dbUser.userType}</span>
        <span style={{ fontSize: '20px', marginRight: '0.4rem', color: 'blue' }}>Sent: {dbUser.sentCount}</span>
        <p>{dbUser.messageTypesSent.map((item: string) => <span>{item}</span>)}</p>
      </div>

      {/* flexWrap: 'wrap',  */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }} className='reade-user-information-messages'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {createStartMessageLink('custom', 'purple', dbUser.username, '')}
          {createStartMessageLink('straightToGuide', 'purple', dbUser.username, straightToGuide)}
          {createStartMessageLink('advice:start', 'purple', dbUser.username, startAdvice)}
          {createStartMessageLink('advice:general', 'purple', dbUser.username, generalAdvice)}
          {createStartMessageLink('advice:exerciseVsMH', 'purple', dbUser.username, mentalhealthNotExerciseAdvice)}
          {createStartMessageLink('advice:amIAddicted?', 'purple', dbUser.username, amIAddictedAdvice)}
          {createStartMessageLink('advice:flatline', 'purple', dbUser.username, flatlineAdvice)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {createStartMessageLink('struggle:basics', 'purple', dbUser.username, struggleBasics)}
          {createStartMessageLink('biggestDifference', 'purple', dbUser.username, biggestDifference)}
          {createStartMessageLink('noReasonToRelapse', 'purple', dbUser.username, noReasonToRelapse)}
          {createStartMessageLink('accountabilityPartner', 'purple', dbUser.username, accountabilityPartner)}
          {createStartMessageLink('sorryToHearYouRelapsed', 'purple', dbUser.username, sorryToHearYouRelapsed)}
        </div>
      </div>
    </div>
  );
}

export default UserInformation;
