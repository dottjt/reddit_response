import { config } from 'dotenv';
config();

import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from 'koa-body';
import logger from 'koa-logger';

import checkUsernamesRoute from './routes/checkUsernamesRoute';
import populateHistoricSentMessagesRoute from './routes/populateSentMessagesRoute';
import populateReceivedMessagesRoute from './routes/populateReceivedMessagesRoute';
import latestUnreadMessagesInformationRoute from './routes/latestUnreadMessagesInformationRoute';
import sendNewMessageRoute from './routes/sendNewMessageRoute';

import customBundler from './tampermonkey/customBundler';

const main = () => {
  const app = new Koa();
  const router = new Router();

  customBundler();

  router.post('/checkUsernames', checkUsernamesRoute);
  router.post('/populateHistoricSentMessages', populateHistoricSentMessagesRoute);
  router.post('/populateReceivedMessages', populateReceivedMessagesRoute);
  router.post('/latestUnreadMessagesInformation', latestUnreadMessagesInformationRoute);
  router.post('/sendNewMessage', sendNewMessageRoute);

  app
    .use(bodyParser())
    .use(cors())
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3333);
}

main();
