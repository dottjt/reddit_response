import Koa, { Context, Next } from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import logger from 'koa-logger';

import { connectDatabase, addNewUser } from './util/db';
import checkUsernames from './routes/checkUsernames';
import populateHistoricMessage from './routes/populateHistoricMessage';

const main = () => {
  const app = new Koa();
  const router = new Router();

  const db = connectDatabase();

  router.post('/checkUsernames', checkUsernames(db));
  router.get('/populateHistoricMessage', populateHistoricMessage(db));

  app
    .use(bodyParser())
    .use(cors())
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3333);
}

main();
