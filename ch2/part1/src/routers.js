const { Router } = require('express');
const {
    getSvgs, getSvg,
    addSvg, deleteSvg,
    likeSvgs, home, ping
} = require('./controllers/api');
const notFound = require('./controllers/pages/notFound');
const api = require('./controllers/api');
const express = require('express');
const svgExists = require('./validators/middlewares/svgExists');
//тоже middleware (req, res) => res.json({ ping: 'pong' }) also home, ping ....

const apiRouter = new express.Router();

apiRouter.get('/svgs', api.getSvgs);
apiRouter.get('/svgs/:id', svgExists, api.getSvg);
apiRouter.post('/svgs', api.addSvg);
apiRouter.put('/svgs/:id', svgExists, api.likeSvg);
apiRouter.delete('/svgs/:id', api.deleteSvg);

exports.apiRouter = apiRouter;
const mainRouter = new Router();

mainRouter.get('/ping', ping);
// mainRouter.get('/svg/:id', svg);
mainRouter.get('/', home);

mainRouter.use(notFound);

exports.mainRouter = mainRouter;
