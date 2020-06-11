import { Context, Next } from 'koa';
import { addHistoricSentMessage } from '../util/db';

import {
  // User,
  // Message,
  PopulateHistoricMessagePayload
} from '../util/types';

const populateHistoricMessage = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const messages: PopulateHistoricMessagePayload[] = body.data.messages;

  for (const message of messages) {
    await addHistoricReceivedMessage(message);
  }

  ctx.body = { data: { message: 'received messages successfully added' } };
}

export default populateHistoricMessage;