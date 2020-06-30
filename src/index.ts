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
import sendUserNoteRoute from './routes/sendUserNoteRoute';
import markUserHostileRoute from './routes/markUserHostileRoute';
import markUserChattedRoute from './routes/markUserChattedRoute';
import setMarkerRoute from './routes/setMarkerRoute';

const main = () => {
  const app = new Koa();
  const router = new Router();

  router.post('/checkUsernames', checkUsernamesRoute);
  router.post('/populateHistoricSentMessages', populateHistoricSentMessagesRoute);
  router.post('/populateReceivedMessages', populateReceivedMessagesRoute);
  router.post('/latestUnreadMessagesInformation', latestUnreadMessagesInformationRoute);
  router.post('/sendNewMessage', sendNewMessageRoute);
  router.post('/sendNewUserNote', sendUserNoteRoute);
  router.post('/markUserHostile', markUserHostileRoute);
  router.post('/markUserChatted', markUserChattedRoute);
  router.post('/setMarker', setMarkerRoute);

  app
    .use(bodyParser())
    .use(cors())
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3333);
}

main();
