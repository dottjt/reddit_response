
export const getAllNoFapNewUsernamesForum = (): string[] => {
  const discussionListItems = document.querySelectorAll('.discussionListItem');
  const usernames = [...discussionListItems as any].map(tag => tag.attributes['data-author'].value);
  return usernames;
}

export const createPrelimContainerForum = (): void => {
  const prelimContainer = document.createElement('div');
  prelimContainer.id = 'reade-automate-container';
  const firstElementContainer = document.querySelectorAll('.sectionHeaders')[2];

  // TODO Test this.
  firstElementContainer?.parentNode?.insertBefore(prelimContainer, firstElementContainer)
}