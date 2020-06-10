import knex from 'knex';
import Koa, { Context, Next } from 'koa';
import Router from '@koa/router';
import { v4 as uuidv4 } from 'uuid';
const bodyParser = require('koa-bodyparser');

import { User, UserInformation, Message } from './types';

const connectDatabase = async () => {
  const db = knex({
    client: 'sqlite3',
    connection: {
      filename: "../db/database.sqlite"
    }
  });

  return db;
};

const addNewUser = async (db: any, userInformation: UserInformation): Promise<void> => {
  const doesUserExist = await db.table('users').first('id');

  if (!doesUserExist) {
    db.table('users').insert({
      id: uuidv4(),
      username: userInformation.username
    });
  }
};

const sendUserMessage = async (db: any) => {

}

const main = () => {
  const app = new Koa();
  const router = new Router();
  app.use(bodyParser());

  const db = connectDatabase();

  router.get('/', (ctx: Context, next: Next) => {
    // ctx.router available
  });

  router.get('/users/:id', async (ctx: Context, next: Next) => {
    // Check if user exists
    addNewUser(db, ctx.params.id);

    ctx.body = 'woah';
  });

  app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000);
}

main();
