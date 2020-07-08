import { createElement } from 'inferno-create-element';

import {
  straightToGuide,
  startAdvice,
  startAgainAdvice,
  generalAdvice,
  relapseAdvice,
  struggleAdvice,
  noReasonToRelapse,
  accountabilityPartner,
  flatlineAdvice,
  abstainingHelpAdvice,

  wetdreamAdvice,
  pornBlockersAdvice,
  isWatchingPornRelapseAdvice,
  // mentalhealthNotExerciseAdvice,
  // amIAddictedAdvice,
  // biggestDifference,
  // sorryToHearYouRelapsed,
} from '../util/responses/start';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { UserType } from '../types/serverTypes';
import { PreviousMessageInformation, UserInformation, MarkUserHostileButton, SetMarkerButton, MarkUserChattedButton } from './ComponentsUtil';
import { ConfigType } from '../util/config';
// import ReactTooltip from 'react-tooltip';

const increaseDelayTimer = () => {
  const delayTimer = window.localStorage.getItem('delayTimer') as string;
  const delayTimerNumber = parseInt(delayTimer) + 20000;
  window.localStorage.setItem('delayTimer', delayTimerNumber.toString());
}

const openNewLink = (prelimUrl: string, messageType: string) => {
  let url = `${prelimUrl}`;
  if (messageType !== 'custom') {
    const delayTimer = window.localStorage.getItem('delayTimer');
    url = url + `&timer=${delayTimer}`;
    increaseDelayTimer();
  }

  window.open(url, '_blank');
}

const createStartMessageLink = (
  messageType: string,
  color: string,
  toUsername: string,
  messageText: string,
) => {
  const prelimUrl = `https://www.reddit.com/message/compose/?to=${toUsername}&subject=Hey&message=${encodeURIComponent(messageText)}&type=${messageType}`;

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
      }} onclick={() => openNewLink(prelimUrl, messageType)}>
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
  usernameConfig: ConfigType;
}

const UserPanel = ({ dbUser, usernameConfig }: UserPanelProps) => {
  return (
    <div>
      {dbUser.userType !== UserType.FreshUser && (
        <PreviousMessageInformation dbUser={dbUser} />
      )}
      <div style={{ display: 'flex' }}>
        <SetMarkerButton username={dbUser.username} usernameConfig={usernameConfig} />
        <MarkUserChattedButton username={dbUser.username} />
        <MarkUserHostileButton username={dbUser.username} />
      </div>
      <UserInformation dbUser={dbUser} usernameConfig={usernameConfig} />

      <div style={{ display: 'flex', 'justify-content': 'space-between', 'margin-top': '1rem', 'margin-bottom': '1rem' }}>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          {createStartMessageLink('custom', 'purple', dbUser.username, '')}
          {createStartMessageLink('advice:start', 'purple', dbUser.username, startAdvice(usernameConfig.usernameType))}
          {createStartMessageLink('advice:startAgain', 'purple', dbUser.username, startAgainAdvice(usernameConfig.usernameType))}
          {createStartMessageLink('advice:general', 'purple', dbUser.username, generalAdvice(usernameConfig.usernameType))}
          {createStartMessageLink('advice:relapse', 'purple', dbUser.username, relapseAdvice(usernameConfig.usernameType))}
        </div>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          {createStartMessageLink('advice:struggle', 'purple', dbUser.username, struggleAdvice(usernameConfig.usernameType))}
          {createStartMessageLink('advice:abstain', 'purple', dbUser.username, abstainingHelpAdvice(usernameConfig.usernameType))}
          {createStartMessageLink('advice:flatline', 'purple', dbUser.username, flatlineAdvice(usernameConfig.usernameType))}
          {createStartMessageLink('advice:wetdreamAdvice', 'purple', dbUser.username, wetdreamAdvice(usernameConfig.usernameType))}
          {createStartMessageLink('advice:pornBlockersAdvice', 'purple', dbUser.username, pornBlockersAdvice(usernameConfig.usernameType))}
          {createStartMessageLink('advice:isWatchingPornRelapseAdvice', 'purple', dbUser.username, isWatchingPornRelapseAdvice(usernameConfig.usernameType))}

          {createStartMessageLink('noReasonToRelapse', 'purple', dbUser.username, noReasonToRelapse(usernameConfig.usernameType))}
          {createStartMessageLink('accountabilityPartner', 'purple', dbUser.username, accountabilityPartner(usernameConfig.usernameType))}
          {createStartMessageLink('straightToGuide', 'purple', dbUser.username, straightToGuide(usernameConfig.usernameType))}
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
