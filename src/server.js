require('module-alias/register');
const path = require('path');
const express = require('express');
const setupMiddlewares = require('./middlewares/index');
const errorHandler = require('./middlewares/errorHandler');
const { PORT, svgFolder } = require('@config');
const { apiRouter } = require('./routes/apiRouter');
const { mainRouter } = require('./routes/mainRouter');
const upgradeWs = require('./ws');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

setupMiddlewares(app);

// смотри на файлы в папке static и если url совпадает с путем файла в папке  static,
// то сразу отдавай егоhome
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/files', express.static(svgFolder));

app.use('/api', apiRouter);
app.use('/', mainRouter);

app.use(errorHandler);

const httpServer = app.listen(PORT, () =>
    console.log(`server started on port ${ PORT }`)
);

upgradeWs(httpServer);