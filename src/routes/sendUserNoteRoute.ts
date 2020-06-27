import { Context, Next } from 'koa';
import { addNewUserNote } from '../util/db/validateUser';

const sendUserNoteRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;

  const username = body?.data?.username;
  const userNote = body?.data?.userNote;

  await addNewUserNote(username, userNote);

  ctx.body = { data: { message: 'userNote sent!' } };
}

export default sendUserNoteRoute;
