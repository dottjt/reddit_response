import { Context, Next } from 'koa';
import { addReceivedMessage } from '../util/db/validateUser';

import {
  // User,
  // Message,
  PopulateHistoricMessagePayload
} from '../types';

const populateReceivedInboxMessages = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const messages: PopulateHistoricMessagePayload[] = body.data.messages;

  for (const message of messages) {
    await addReceivedMessage(message, false);
  }

  ctx.body = { data: { message: 'received messages successfully added' } };
}

export default populateReceivedInboxMessages;
