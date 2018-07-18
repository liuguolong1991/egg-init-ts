import { Application } from 'egg';
export default (app:Application) => {
  app.on('error', (err, ctx) => {
    //记录错误日志
    ctx.logger.error(err);
  });
  app.beforeStart(async () => {
    //启动前执行的操作
  });
};
