const Router = require('koa-router');
const themeController = require('./controller');

const themes = new Router();

const handler = (ctx, next) => {
    ctx.body = `${ctx.request.method} ${ctx.request.path}`;
};

themes.get('/', handler);

themes.post('/', themeController.create);

themes.delete('/', handler);

themes.put('/', handler);

themes.patch('/', handler);

module.exports = themes;