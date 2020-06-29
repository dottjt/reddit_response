import React from 'react';
// import ReactTooltip from 'react-tooltip';

import {
  straightToGuide,
  startAdvice,
  generalAdvice,
  struggleBasics,
  noReasonToRelapse,
  accountabilityPartner,

  // mentalhealthNotExerciseAdvice,
  // amIAddictedAdvice,
  // flatlineAdvice,
  // biggestDifference,
  // sorryToHearYouRelapsed,
} from '../util/responses/start';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { UserType } from '../types/serverTypes';
import { PreviousMessageInformation, UserInformation, UserIsHostileButton } from './ComponentsUtil';
// import ReactTooltip from 'react-tooltip';

const increaseDelayTimer = () => {
  const delayTimer = window.localStorage.getItem('delayTimer') as string;
  const delayTimerNumber = parseInt(delayTimer) + 5000;
  window.localStorage.setItem('delayTimer', delayTimerNumber.toString());
}

const openNewLink = (prelimUrl) => {
  const delayTimer = window.localStorage.getItem('delayTimer');
  const url = `${prelimUrl}&timer=${delayTimer}`; //
  increaseDelayTimer();
  window.open(url, '_blank');
}

const createStartMessageLink = (
  messageType: string,
  color: string,
  toUsername: string,
  messageText: string,
): React.FC => {
  const prelimUrl = `https://www.reddit.com/message/compose/?to=${toUsername}&subject=Hey&message=${encodeURIComponent(messageText)}&type=${messageType}`;
  const dataTipId = `${messageType}-${toUsername}`;

  return (
    <>
      <a data-tip data-for={dataTipId} style={{
        color: color || 'black',
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
        marginLeft: '0.3rem',
        marginRight: '0.3rem',
        fontSize: '12px',
        display: 'inline-block',
      }} onClick={() => openNewLink(prelimUrl)}>
        {messageType}
      </a>
      {/* <ReactTooltip className='react-tool-tip-custom' id={dataTipId} type='error'>
        <span>{messageText.split("\n").map((i,key) => (
          <div key={key} style={{ marginBottom: '0.6rem' }}>{i}</div>
        ))}</span>
      </ReactTooltip> */}
    </>
  );
}

type UserPanelProps = {
  dbUser: CompiledFullUserObject;
}

const UserPanel = ({ dbUser }: UserPanelProps): React.FC<UserPanelProps> => {
  return (
    <div>
      {dbUser.userType !== UserType.FreshUser && (
        <PreviousMessageInformation dbUser={dbUser} />
      )}
      <UserIsHostileButton username={dbUser.username} />
      <UserInformation dbUser={dbUser} />

      <div style={{ display: 'flex', justifyContent: 'space-between' }} className='reade-user-information-messages'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {createStartMessageLink('custom', 'purple', dbUser.username, '')}
          {createStartMessageLink('straightToGuide', 'purple', dbUser.username, straightToGuide)}
          {createStartMessageLink('advice:start', 'purple', dbUser.username, startAdvice)}
          {createStartMessageLink('advice:general', 'purple', dbUser.username, generalAdvice)}
          {createStartMessageLink('struggle:basics', 'purple', dbUser.username, struggleBasics)}
          {createStartMessageLink('noReasonToRelapse', 'purple', dbUser.username, noReasonToRelapse)}
          {createStartMessageLink('accountabilityPartner', 'purple', dbUser.username, accountabilityPartner)}
        </div>
      </div>
    </div>
  );
}

export default UserPanel;

// {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
// </div> */}
// {/* {createStartMessageLink('advice:exerciseVsMH', 'purple', dbUser.username, mentalhealthNotExerciseAdvice)}
// {createStartMessageLink('advice:amIAddicted?', 'purple', dbUser.username, amIAddictedAdvice)}
// {createStartMessageLink('advice:flatline', 'purple', dbUser.username, flatlineAdvice)} */}
// {/* {createStartMessageLink('biggestDifference', 'purple', dbUser.username, biggestDifference)} */}
// {/* {createStartMessageLink('sorryToHearYouRelapsed', 'purple', dbUser.username, sorryToHearYouRelapsed)} */}
