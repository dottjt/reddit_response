import { v4 as uuidv4 } from 'uuid';
import knex from '../util/knex';

import { UserNote, UserForumType } from '../types/serverTypes';

import validateUser from './validateUser';

type AddNewUserNoteProps = {
  username: string;
  message: string;
  forum_type: UserForumType;
}

const addNewUserNote = async ({
  username,
  message,
  forum_type,
}: AddNewUserNoteProps): Promise<void> => {
  await validateUser(username, false, forum_type);

  await knex<UserNote>('user_notes').insert({
    id: uuidv4(),
    username,
    message,
  });
}

export default addNewUserNote;
