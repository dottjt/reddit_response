import { v4 as uuidv4 } from 'uuid';
import knex from '../util/knex';

import { User } from '../types/serverTypes';
import { CompiledFullUserObject } from '../types/tamperMonkeyTypes';

import getFullUser from './getFullUser';

const validateUser = async (username: string, is_historic: boolean): Promise<CompiledFullUserObject> => {
  try {
    const usernameExists: User | undefined = await knex<User>('users').where({ username }).first('username');
    if (!usernameExists) {
      await knex<User>('users').insert({ id: uuidv4(), username, is_historic });
      
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
