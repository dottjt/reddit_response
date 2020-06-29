import { v4 as uuidv4 } from 'uuid';
import knex from '../util/knex';

import { UserNote } from '../types/serverTypes';

import validateUser from './validateUser';

type AddNewUserNoteProps = {
  username: string;
  message: string;
}

const addNewUserNote = async ({
  username,
  message,
}: AddNewUserNoteProps): Promise<void> => {
  await validateUser(username, false);

  await knex<UserNote>('user_notes').insert({
    id: uuidv4(),
    username,
    message,
  });
}

export default addNewUserNote;
