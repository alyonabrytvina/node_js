const { Router } = require('express');
const { home } = require('@controllers/api');
const notFound = require('@controllers/pages/notFound');
const ping = require('@controllers/ping');
const mainRouter = new Router();

mainRouter.get('/ping', ping);
// mainRouter.get('/svg/:id', svg);
mainRouter.get('/', home);

mainRouter.use(notFound);

exports.mainRouter = mainRouter;