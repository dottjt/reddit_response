import { render } from 'inferno';
import { createElement } from 'inferno-create-element';

import UserPanel from '../../components/UserPanel';

export const getAllNoFapNewUsernamesForum = (): string[] => {
  const discussionListItems = document.querySelectorAll('.discussionListItem');
  const usernames = [...discussionListItems as any].map(tag => tag.attributes['data-author'].value);
  return usernames;
}

export const createPrelimContainerForum = (): void => {
  const prelimContainer = document.createElement('div');
  prelimContainer.id = 'reade-automate-container';
  const firstElementContainer = document.querySelectorAll('.sectionHeaders')[2];

  firstElementContainer?.parentNode?.insertBefore(prelimContainer, firstElementContainer)
}

export const renderUserPanelForum = ({
  tag, tagUsername, index, dbUser, usernameConfig
}) => {
  const tagUsernameFiltered =
    tagUsername
      .replace('\'','')
      .replace('&','');

  const rootId = `r${tagUsernameFiltered}-${index}`;
  const root = document.createElement('div');
  root.id = rootId;
  tag.parentNode.insertBefore(root, tag);
  // tag.remove();

  const domContainer = document.querySelector(`#${rootId}`);
  if (domContainer) {
    render(<UserPanel
      dbUser={dbUser}
      usernameConfig={usernameConfig}/>, domContainer);
  }
}
