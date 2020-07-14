import { createElement } from 'inferno-create-element';

import {
  startAdvice,
  startAgainAdvice,
  generalAdvice,
  relapseAdvice,
  struggleAdvice,
  noReasonToRelapseAdvice,
  accountabilityPartner,
  flatlineAdvice,
  // abstainingHelpAdvice,

  wetdreamAdvice,
  pornBlockersAdvice,
  isWatchingPornRelapseAdvice,
  ageAdvice,
  partnerAdvice,
  masturbateWithoutPornAdvice,
  biggestBenefitPostAddictionAdvice,
  dealingWithUrgesAdvice,
  // mentalhealthNotExerciseAdvice,
  // amIAddictedAdvice,
  // biggestDifference,
  // sorryToHearYouRelapsed,
} from '../util/responses/start';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { UserType, SendMessageType } from '../types/serverTypes';
import { PreviousMessageInformation, UserInformation, MarkUserHostileButton, SetMarkerButton, MarkUserChattedButton } from './ComponentsUtil';
import { ConfigType } from '../util/config';
import { openNewLink, generatePrelimUrl } from '../util/sendMessageUtils';
import { followRelapseAdvice, followMeditationAdvice, followStruggleAdvice } from '../util/responses/follow';
// import ReactTooltip from 'react-tooltip';

const createStartMessageLink = (
  messageType: SendMessageType,
  color: string,
  toUsername: string,
  messageText: string,
) => {
  const prelimUrl = generatePrelimUrl(toUsername, messageText, messageType);

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
          {createStartMessageLink(SendMessageType.NFDCustomSend, 'purple', dbUser.username, '')}
          {createStartMessageLink(SendMessageType.StartAdviceStart, 'purple', dbUser.username, startAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartAdviceStartAgain, 'purple', dbUser.username, startAgainAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartAdviceGeneral, 'purple', dbUser.username, generalAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartAdviceRelapse, 'purple', dbUser.username, relapseAdvice(usernameConfig.forumType))}
          <h4>Custom</h4>
          {createStartMessageLink(SendMessageType.StartAdviceAge, 'purple', dbUser.username, ageAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartDealingWithUrgesAdvice, 'purple', dbUser.username, dealingWithUrgesAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartMasturbateWithoutPornAdvice, 'purple', dbUser.username, masturbateWithoutPornAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartBiggestBenefitPostAddictionAdvice, 'purple', dbUser.username, biggestBenefitPostAddictionAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartPartnerAdvice, 'purple', dbUser.username, partnerAdvice(usernameConfig.forumType))}
        </div>
        <div style={{ display: 'flex', 'flex-direction': 'column' }}>
          {createStartMessageLink(SendMessageType.StartAdviceStruggle, 'purple', dbUser.username, struggleAdvice(usernameConfig.forumType))}
          {/* {createStartMessageLink(SendMessageType.StartAdviceAbstain, 'purple', dbUser.username, abstainingHelpAdvice(usernameConfig.forumType))} */}
          {createStartMessageLink(SendMessageType.StartAdviceFlatline, 'purple', dbUser.username, flatlineAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartAdviceWetdreamAdvice, 'purple', dbUser.username, wetdreamAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartAdvicePornBlockersAdvice, 'purple', dbUser.username, pornBlockersAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartAdviceIsWatchingPornRelapseAdvice, 'purple', dbUser.username, isWatchingPornRelapseAdvice(usernameConfig.forumType))}

          {createStartMessageLink(SendMessageType.StartNoReasonToRelapseAdvice, 'purple', dbUser.username, noReasonToRelapseAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.StartAccountabilityPartner, 'purple', dbUser.username, accountabilityPartner(usernameConfig.forumType))}
          <h4>Follow</h4>
          {createStartMessageLink(SendMessageType.FollowRelapseAdvice, 'purple', dbUser.username, followRelapseAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.FollowMeditationAdvice, 'purple', dbUser.username, followMeditationAdvice(usernameConfig.forumType))}
          {createStartMessageLink(SendMessageType.FollowStruggleAdvice, 'purple', dbUser.username, followStruggleAdvice(usernameConfig.forumType))}
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
