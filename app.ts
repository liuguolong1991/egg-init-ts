import { Application } from 'egg';
export default ( app: Application ) => {
  app.on('error', (err, ctx) => {
    ctx.logger.error(err); // 记录错误日志
  });
  app.beforeStart(async () => {
     // 启动前执行的操作
  });
};
