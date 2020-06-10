import knex from 'knex';
import Koa, { Context, Next } from 'koa';
import Router from '@koa/router';
import { v4 as uuidv4 } from 'uuid';

import { User, Message } from './types';

const connectDatabase = async () => {
  const db = knex({
    client: 'sqlite3',
    connection: {
      filename: "../db/dmydb.sqlite"
    }
  });

  return db;
}

const addNewUser = async (db: any, userInformation: ): Promise<void> => {
  const doesUserExist = await db.table('users').first('id');

  if (!doesUserExist) {
    db.table('users').insert({
      id: uuidv4(),

    })
  }
};

const main = () => {
  const app = new Koa();
  const router = new Router();

  const db = connectDatabase();

  router
    .get('/', (ctx: Context, next: Next) => {

      // ctx.router available
    })
    .get('/users/:id', (ctx: Context, next: Next) => {

      // ctx.router available
    })

  app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000);
}

main();
