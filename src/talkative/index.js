const Router = require('koa-router');

const talkative = new Router();
const controller = require('./controller');

talkative.get('/', controller.list);
talkative.post('/', controller.create);
talkative.delete('/', controller.delete);
talkative.put('/', controller.replace);
talkative.patch('/', controller.update);

module.exports = talkative;