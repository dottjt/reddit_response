import { Component } from 'inferno';
import { createElement } from 'inferno-create-element';

import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';
import { SendMessageType } from '../types/serverTypes';
import { MatchRegExpResponse } from '../util/filter/regex/regexUtil';
import { openNewLink } from '../util/utils/sendMessageUtils';
import { highlightSyntax } from '../util/filter/regex/highlightSyntax';

type CreatePrelimLinkProps = {
  dbUser: CompiledFullUserObject;
  titleText: string;
  messageText: string;
  flairText: string;
  aLinkHref: string;
  prelimUrl: string;
  index: number;
  sendMessageType: SendMessageType;
  prelimContainer: any; // FUTURE to change
  messageMatch: MatchRegExpResponse[]
}

export class CreatePrelimLink extends Component<CreatePrelimLinkProps, { borderClass: string }> {
  constructor(props) {
    super(props)
    this.state = {
      borderClass: '1px solid black'
    }
  }

  render () {
    const {
      dbUser,
      titleText,
      messageText,
      flairText,
      aLinkHref,
      prelimUrl,
      index,
      sendMessageType,
      prelimContainer,
      messageMatch,
    } = this.props;

    return (
      <div>
        <a
          style={{ display: 'block', background: 'white', color: 'black', padding: '1rem', 'margin-top': '0.6rem', 'margin-bottom': '0.6rem', cursor: 'pointer', border: this.state?.borderClass as string }}
          onclick={() => {
            this.setState({ borderClass: '1px solid red' })
            openNewLink(prelimUrl, SendMessageType.NA)
          }}
        >
          <p style={{ 'margin-bottom': '0.5rem', 'margin-right': '0.5rem', color: 'purple' }}>{dbUser.username} - {sendMessageType}</p>
          <p style={{ 'margin-bottom': '0.5rem', 'line-height': '1.4rem' }}>
            <b style={{ 'font-weight': 900, 'margin-right': '0.3rem' }}>Title:</b>
            {highlightSyntax(titleText, messageMatch, true).map(element => element)}
          </p>
          <p style={{ 'margin-bottom': '0.5rem', 'line-height': '1.4rem' }}>
            <b style={{ 'font-weight': 900, 'margin-right': '0.3rem' }}>Message:</b>
            {highlightSyntax(messageText, messageMatch, true).map(element => element)}
          </p>
          <p style={{ 'margin-bottom': '0.5rem', 'line-height': '1.4rem' }}>
            <b style={{ 'font-weight': 900, 'margin-right': '0.3rem' }}>Flair:</b>
            {highlightSyntax(flairText, messageMatch, true).map(element => element)}
          </p>
        </a>
        <a data-click-id='body' href={`${aLinkHref}`}>Show Post</a>
      </div>
    );
  }
}
