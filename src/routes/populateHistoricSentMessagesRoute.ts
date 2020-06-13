import { Context, Next } from 'koa';
import { addHistoricSentMessage } from '../util/db';

import {
  // User,
  // Message,
  PopulateHistoricMessagePayload
} from '../util/types';

const populateHistoricSentMessages = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const messages: PopulateHistoricMessagePayload[] = body.data.messages;

  for (const message of messages) {
    await addHistoricSentMessage(message);
  }

  ctx.body = { data: { message: 'sent messages successfully added' } };
}

export default populateHistoricSentMessages;