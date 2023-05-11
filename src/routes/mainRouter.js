const { Router } = require('express');
const notFound = require('@controllers/pages/notFound');
const { home, svg, logs } = require('@controllers/pages');
const ping = require('@controllers/ping');
const mainRouter = new Router();

mainRouter.get('/ping', ping);
mainRouter.get('/svg/:id', svg);
mainRouter.get('/', home);
mainRouter.get('/logs', logs);
mainRouter.use(notFound);

exports.mainRouter = mainRouter;