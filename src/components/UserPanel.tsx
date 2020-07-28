import { Component } from 'inferno';
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
  didIJustRelapseAdvice,
  whenDoesItGetEasierAdvice,
  // mentalhealthNotExerciseAdvice,
  // amIAddictedAdvice,
  // biggestDifference,
  // sorryToHearYouRelapsed,
} from '../util/responses/start';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { UserType, SendMessageType } from '../types/serverTypes';
import { PreviousMessageInformation, UserInformation, MarkUserHostileButton, SetMarkerButton, MarkUserChattedButton } from './ComponentsUtil';
import { ConfigType, fakeConfigType } from '../util/config';
import { openNewLink, generatePrelimUrl } from '../util/utils/sendMessageUtils';
import { followRelapseAdvice, followMeditationAdvice, followStruggleAdvice, followNotSmoothlyAdvice } from '../util/responses/follow';

// import ReactTooltip from 'react-tooltip';

const createStartMessageLink = (
  messageType: SendMessageType,
  color: string,
  toUsername: string,
  messageText: string,
  usernameConfig?: ConfigType
) => {

  const prelimUrl = generatePrelimUrl(toUsername, messageText, messageType, usernameConfig);

  // https://forum.nofap.com/index.php?conversations/add&to=YoungRockLee&title=hey

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
  usernameConfig?: ConfigType;
  hoursAgoText?: string
}

export class UserPanel extends Component<UserPanelProps, { borderClass: string }> {
  constructor(props) {
    super(props);
    this.state = {
      borderClass: '3px solid white'
    };
  }

  render() {
    const {
      dbUser, usernameConfig, hoursAgoText
    } = this.props;

    return (
      <div style={{ border: this.state?.borderClass, padding: '1rem' }} onclick={() => this.setState({ borderClass: '3px solid red' })}>
        {dbUser.userType !== UserType.FreshUser && (
          <PreviousMessageInformation dbUser={dbUser} />
        )}
        <div style={{ display: 'flex' }}>
          {usernameConfig && hoursAgoText && (
            <SetMarkerButton username={dbUser.username} usernameConfig={usernameConfig} hoursAgoText={hoursAgoText} />
          )}
          <MarkUserChattedButton username={dbUser.username} />
          <MarkUserHostileButton username={dbUser.username} />
        </div>
        <UserInformation dbUser={dbUser} usernameConfig={usernameConfig} />

        <div style={{ display: 'flex', 'justify-content': 'space-between', 'margin-top': '1rem', 'margin-bottom': '1rem' }}>
          <div style={{ display: 'flex', 'flex-direction': 'column' }}>
            {createStartMessageLink(SendMessageType.NFDCustomSend, 'purple', dbUser.username, '', fakeConfigType)}
            {createStartMessageLink(SendMessageType.StartAdviceStart, 'purple', dbUser.username, startAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartAdviceStartAgain, 'purple', dbUser.username, startAgainAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartAdviceGeneral, 'purple', dbUser.username, generalAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartAdviceRelapse, 'purple', dbUser.username, relapseAdvice(usernameConfig?.forumType), usernameConfig)}
            <h4>Custom</h4>
            {createStartMessageLink(SendMessageType.StartAdviceAge, 'purple', dbUser.username, ageAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartDealingWithUrgesAdvice, 'purple', dbUser.username, dealingWithUrgesAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartMasturbateWithoutPornAdvice, 'purple', dbUser.username, masturbateWithoutPornAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartBiggestBenefitPostAddictionAdvice, 'purple', dbUser.username, biggestBenefitPostAddictionAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartPartnerAdvice, 'purple', dbUser.username, partnerAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartDidIJustRelapseAdvice, 'purple', dbUser.username, didIJustRelapseAdvice(usernameConfig?.forumType), usernameConfig)}
          </div>
          <div style={{ display: 'flex', 'flex-direction': 'column' }}>
            {createStartMessageLink(SendMessageType.StartAdviceStruggle, 'purple', dbUser.username, struggleAdvice(usernameConfig?.forumType), usernameConfig)}
            {/* {createStartMessageLink(SendMessageType.StartAdviceAbstain, 'purple', dbUser.username, abstainingHelpAdvice(usernameConfig?.forumType), usernameConfig)} */}
            {createStartMessageLink(SendMessageType.StartAdviceFlatline, 'purple', dbUser.username, flatlineAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartAdviceWetdreamAdvice, 'purple', dbUser.username, wetdreamAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartAdvicePornBlockersAdvice, 'purple', dbUser.username, pornBlockersAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartAdviceIsWatchingPornRelapseAdvice, 'purple', dbUser.username, isWatchingPornRelapseAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartWhenDoesItGetEasierAdvice, 'purple', dbUser.username, whenDoesItGetEasierAdvice(usernameConfig?.forumType), usernameConfig)}

            {createStartMessageLink(SendMessageType.StartNoReasonToRelapseAdvice, 'purple', dbUser.username, noReasonToRelapseAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.StartAccountabilityPartner, 'purple', dbUser.username, accountabilityPartner(usernameConfig?.forumType), usernameConfig)}
            <h4>Follow</h4>
            {createStartMessageLink(SendMessageType.FollowRelapseAdvice, 'purple', dbUser.username, followRelapseAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.FollowMeditationAdvice, 'purple', dbUser.username, followMeditationAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.FollowStruggleAdvice, 'purple', dbUser.username, followStruggleAdvice(usernameConfig?.forumType), usernameConfig)}
            {createStartMessageLink(SendMessageType.FollowNotSmoothlyAdvice, 'purple', dbUser.username, followNotSmoothlyAdvice(usernameConfig?.forumType), usernameConfig)}
          </div>
        </div>
      </div>
    )
  }
}

export default UserPanel;

// {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
// </div> */}
// {/* {createStartMessageLink('advice:exerciseVsMH', 'purple', dbUser.username, mentalhealthNotExerciseAdvice)}
// {createStartMessageLink('advice:amIAddicted?', 'purple', dbUser.username, amIAddictedAdvice)}
// {createStartMessageLink('advice:flatline', 'purple', dbUser.username, flatlineAdvice)} */}
// {/* {createStartMessageLink('biggestDifference', 'purple', dbUser.username, biggestDifference)} */}
// {/* {createStartMessageLink('sorryToHearYouRelapsed', 'purple', dbUser.username, sorryToHearYouRelapsed)} */}
