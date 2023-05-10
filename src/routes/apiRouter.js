const express = require('express');
const api = require('@controllers/api');
const svgExists = require('@validators/middlewares/svgExists');
const apiRouter = new express.Router();

apiRouter.get('/svgs', api.getSvgs);
apiRouter.get('/svgs/:id', svgExists, api.getSvg);
apiRouter.post('/svgs', api.addSvg);
apiRouter.put('/svgs/:id', svgExists, api.likeSvg);
apiRouter.delete('/svgs/:id', api.deleteSvg);

exports.apiRouter = apiRouter;
