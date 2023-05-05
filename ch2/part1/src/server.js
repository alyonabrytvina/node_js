const path = require('path');
const express = require('express');
const { PORT, svgFolder } = require('./config');
const errorHandler = require('./middlewares/errorHandler');
const {
    ping, getSvgs,
    getSvg, addSvg,
    deleteSvg, home
} = require('./controllers/api');
const setupMiddlewares = require('./middlewares');
const { apiRouter, mainRouter } = require('./routers');

const app = express();

// говорим экспрессу, что шаблонизатор будет pug
// и где искать вьюхи(шаблоны), которые будут рендериться
// __dirname в текущей директории поищи папку views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

setupMiddlewares(app);

// смотри на файлы в папке static и если url совпадает с путем файла в папке  static,
// то сразу отдавай егоhome
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/files', express.static(svgFolder));

app.use('/api', apiRouter);

// main routes
app.use('/', mainRouter);
app.use(errorHandler);
app.listen(PORT, () => console.log(`server started on port ${ PORT }`));
