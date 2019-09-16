const Router = require('koa-router');

const talkativeAPI = new Router();
const themes = require('./api/themes');

talkativeAPI.use('/themes', themes.routes());

module.exports = talkativeAPI;