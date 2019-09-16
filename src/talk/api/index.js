const Router = require('koa-router');

const api = new Router();
const controller = require('./controller');

api.get('/', controller.list);
api.post('/', controller.create);
api.delete('/', controller.delete);
api.put('/', controller.replace);
api.patch('/', controller.update);

module.exports = api;