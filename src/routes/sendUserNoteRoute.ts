import { Context, Next } from 'koa';
import addNewUserNote from '../db/addNewUserNote';
import { SendUserNotePayload } from '../types/tamperMonkeyTypes';
import { UserForumType } from '../types/serverTypes';


const sendUserNoteRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SendUserNotePayload | undefined = body?.data;
  console.log(body?.data);
  if (data) {
    const username = data.username;
    const message = data.message;
    const forum_type: UserForumType = data.forum_type as UserForumType;

    console.log(`sendUserNoteRoute - ${username} - ${message}`)

    await addNewUserNote({
      forum_type,
      username,
      message,
    });

    ctx.body = { data: { message: 'success!' } };
  }
}

export default sendUserNoteRoute;
