import { v4 as uuidv4 } from 'uuid';
import knex from '../util/knex';

import { User } from '../types/serverTypes';

const decideWhichLinksHaveBeenSent = (fullUserLinksSent: any, message: string) => {
  if (message.includes('https://neverfapdeluxe.com')) {

  }

  return
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
    console.log('fullUserLinksSent', fullUserLinksSent);
    // const updateObject = decideWhichLinksHaveBeenSent(fullUserLinksSent, message)

    // await knex<User>('users').where({
    //   username: username_receiving
    // })
    // .update(updateObject);
  }
}

export default updateUserSentLinks;
