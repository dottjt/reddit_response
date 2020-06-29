import { Context, Next } from 'koa';
import addNewUserNote from '../db/addNewUserNote';
import { SendUserNotePayload } from '../types/tamperMonkeyTypes';


const sendUserNoteRoute = async (ctx: Context, next: Next) => {
  const body = ctx.request.body;
  const data: SendUserNotePayload | undefined = body?.data;
  console.log(body?.data);
  if (data) {
    const username = data.username;
    const message = data.message;

    console.log(`sendUserNoteRoute - ${username} - ${message}`)

    await addNewUserNote({
      username,
      message,
    });

    ctx.body = { data: { message: 'success!' } };
  }
}

export default sendUserNoteRoute;
