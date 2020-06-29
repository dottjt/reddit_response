import { createElement } from 'inferno-create-element';

import {
  straightToGuide,
  startAdvice,
  generalAdvice,
  struggleBasics,
  noReasonToRelapse,
  accountabilityPartner,
  flatlineAdvice,

  // mentalhealthNotExerciseAdvice,
  // amIAddictedAdvice,
  // biggestDifference,
  // sorryToHearYouRelapsed,
} from '../util/responses/start';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { UserType } from '../types/serverTypes';
import { PreviousMessageInformation, UserInformation, MarkUserHostileButton, SetMarkerButton } from './ComponentsUtil';
// import ReactTooltip from 'react-tooltip';

const increaseDelayTimer = () => {
  const delayTimer = window.localStorage.getItem('delayTimer') as string;
  const delayTimerNumber = parseInt(delayTimer) + 9000;
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
) => {
  const prelimUrl = `https://www.reddit.com/message/compose/?to=${toUsername}&subject=Hey&message=${encodeURIComponent(messageText)}&type=${messageType}`;
  const dataTipId = `${messageType}-${toUsername}`;

  return (
    <div>
      <a style={{
        color: color || 'black',
        'margin-top': '0.2rem',
        'margin-bottom': '0.2rem',
        'margin-left': '0.3rem',
        'margin-right': '0.3rem',
        'font-size': '12px',
        display: 'inline-block',
      }} onclick={() => openNewLink(prelimUrl)}>
        {messageType}
      </a>
      {/* <ReactTooltip className='react-tool-tip-custom' id={dataTipId} type='error'>
        <span>{messageText.split('\n').map((i,key) => (
          <div key={key} style={{ marginBottom: '0.6rem' }}>{i}</div>
        ))}</span>
      </ReactTooltip> */}
    </div>
  );
}

type UserPanelProps = {
  dbUser: CompiledFullUserObject;
  markerUsername: string;
}

const UserPanel = ({ dbUser, markerUsername }: UserPanelProps) => {
  return (
    <div>
      {dbUser.userType !== UserType.FreshUser && (
        <PreviousMessageInformation dbUser={dbUser} />
      )}
      <div style={{ display: 'flex' }}>
        <SetMarkerButton username={dbUser.username}/>
        <MarkUserHostileButton username={dbUser.username} />
      </div>
      <UserInformation dbUser={dbUser} markerUsername={markerUsername} />

      <div style={{ display: 'flex', 'justify-content': 'space-between', 'margin-top': '1rem', 'margin-bottom': '1rem' }}>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          {createStartMessageLink('custom', 'purple', dbUser.username, '')}
          {createStartMessageLink('straightToGuide', 'purple', dbUser.username, straightToGuide)}
          {createStartMessageLink('advice:start', 'purple', dbUser.username, startAdvice)}
          {createStartMessageLink('advice:general', 'purple', dbUser.username, generalAdvice)}
        </div>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          {createStartMessageLink('struggle:basics', 'purple', dbUser.username, struggleBasics)}
          {createStartMessageLink('noReasonToRelapse', 'purple', dbUser.username, noReasonToRelapse)}
          {createStartMessageLink('accountabilityPartner', 'purple', dbUser.username, accountabilityPartner)}
          {createStartMessageLink('advice:flatline', 'purple', dbUser.username, flatlineAdvice)}

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
