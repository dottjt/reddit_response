import { v4 as uuidv4 } from 'uuid';
import knex from '../knex';

import {
  User,
  Message,

  PopulateHistoricMessagePayload
} from '../../types';

import {
  calculateUserStatistics,
  toMelbourneDateString
} from '../util';

import getFullUser from './getFullUser';

const validateUser = async (username: string, is_historic: boolean): Promise<User> => {
  const usernameExists =
    await knex('users').where({ username }).first('username');
  if (!usernameExists) {
      await knex('users').insert({ id: uuidv4(), username, is_historic });
    const newUser: User = await getFullUser(username);
    return newUser;
  } else {
    const existingUser = await getFullUser(username);
    return existingUser;
  }
};

export default validateUser;
