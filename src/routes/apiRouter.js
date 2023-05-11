const express = require('express');
const api = require('@controllers/api');
const apiRouter = new express.Router();

apiRouter.get('/svgs', api.getSvgs);
apiRouter.get('/svgs/:id', api.getSvg);
apiRouter.post('/svgs', api.addSvg);
apiRouter.put('/svgs/:id', api.likeSvg);
apiRouter.delete('/svgs/:id', api.deleteSvg);

exports.apiRouter = apiRouter;
