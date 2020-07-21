import { v4 as uuidv4 } from 'uuid';
import knex from '../util/knex';

import { User, UserForumType } from '../types/serverTypes';
import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

import getFullUser from './getFullUser';

const validateUser = async (username: string, is_historic: boolean, forum_type: UserForumType): Promise<CompiledFullUserObject> => {
  try {
    const usernameExists: User | undefined = await knex<User>('users').where({ username, forum_type }).first('username');
    if (!usernameExists) {
      await knex<User>('users').insert({ id: uuidv4(), username, is_historic, forum_type });

      const newUser: CompiledFullUserObject = await getFullUser(username);
      return newUser;
    } else {
      const existingUser = await getFullUser(username);
      return existingUser;
    }
  } catch (error) {
    throw new Error(`validateUser -${error}`)
  }
};

export default validateUser;
