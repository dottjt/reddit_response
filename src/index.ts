import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import logger from 'koa-logger';

import checkUsernames from './routes/checkUsernames';
import populateHistoricSentMessages from './routes/populateHistoricSentMessages';
import populateHistoricReceivedMessages from './routes/populateHistoricReceivedMessages';
import sendNewMessage from './routes/sendNewMessage';

const main = () => {
  const app = new Koa();
  const router = new Router();

  router.post('/checkUsernames', checkUsernames);
  router.post('/populateHistoricSentMessages', populateHistoricSentMessages);
  router.post('/populateHistoricReceivedMessages', populateHistoricReceivedMessages);
  router.post('/sendNewMessage', sendNewMessage);

  app
    .use(bodyParser())
    .use(cors())
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3333);
}

main();
