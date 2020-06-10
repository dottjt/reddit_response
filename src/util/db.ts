import knex from 'knex';
import { v4 as uuidv4 } from 'uuid';

import { UserInformation } from '../util/types';

export const connectDatabase = async () => knex({
  client: 'sqlite3',
  connection: {
    filename: "../db/database.sqlite"
  }
});

export const addNewUser = async (db: any, userInformation: UserInformation): Promise<void> => {
  const doesUserExist = await db.table('users').first('id');

  if (!doesUserExist) {
    db.table('users').insert({
      id: uuidv4(),
      username: userInformation.username
    });
  }
};

export const checkUser = async (db: any) => {

}
