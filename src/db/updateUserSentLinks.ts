import knex from '../util/knex';

import { User } from '../types/serverTypes';

const decideWhichLinksHaveBeenSent = (fullUserLinksSent: any, message: string) => {
  if (message.includes('https://neverfapdeluxe.com')) {
    fullUserLinksSent.website_homepage_link_sent = true;
  }

  if (message.includes('r/NeverFapDeluxe')) {
    fullUserLinksSent.subreddit_link_sent = true;
  }

  if (message.includes('https://discord')) {
    fullUserLinksSent.discord_link_sent = true;
  }

  if (
    message.includes('https://castbox.fm')
    || message.includes('https://podcasts.apple.com')
    || message.includes('https://open.spotify.com')
  ) {
    fullUserLinksSent.podcast_link_sent = true;
  }

  return fullUserLinksSent;
}

type UpdateUserSentLinksProps = {
  username_receiving: string;
  message: string;
}

const updateUserSentLinks = async ({
  username_receiving,
  message
}: UpdateUserSentLinksProps): Promise<void> => {

  const fullUserLinksSent = await knex<User>('users').where({
    username: username_receiving
  }).first([
    'website_homepage_link_sent',
    'subreddit_link_sent',
    'discord_link_sent',
    'podcast_link_sent',
  ]);

  if (fullUserLinksSent) {
    const updateObject = decideWhichLinksHaveBeenSent(fullUserLinksSent, message)
    console.log('fullUserLinksSentObject', updateObject);

    await knex<User>('users').where({
      username: username_receiving
    })
    .update(updateObject);
  }
}

export default updateUserSentLinks;
