const Router = require('koa-router');
const themeController = require('./controller');

const talkRouter = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

talkRouter.get('/', themeController.list);

talkRouter.post('/', themeController.create);

talkRouter.delete('/', handler);

talkRouter.put('/', handler);

talkRouter.patch('/', handler);

module.exports = talkRouter;