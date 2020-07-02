import { Context, Next } from 'koa';

const checkServerRunningRoute = async (ctx: Context, next: Next) => {
  ctx.body = { data: { isRunning: true } };
}

export default checkServerRunningRoute;
