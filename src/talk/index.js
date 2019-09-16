const Router = require('koa-router');

const themeAPI = new Router();
const themes = require('./theme/index');

themeAPI.use('/theme', themes.routes());

module.exports = themeAPI;