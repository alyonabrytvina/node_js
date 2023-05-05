// здесь навешиваются middleware через которые пройдут все запросы сервера
const { json } = require('express');
const disablePoweredBy = require('./disablePoweredBy');
const requestId = require('./requestId');
const routesLogger = require('./routesLogger');

module.exports = (app) => {
    // для post запросов в формате json, parse body and return object;
    // express.json() возвращает функцию которая называется middleware;
    // когда зайдет сюда увидит что запрос имеет contentType: application JSON
    // и пойдет его искать. Дальше выполниться  app.post(....)
    app.use(json());

    // удаляет PowerByExpress в хедере
    app.use(disablePoweredBy);

    // каждому запросу дает уникальный айди, чтобы когда происходила ошибка
    // пользователь в респонсе получал айди и было проще отстедить ошибку
    app.use(requestId);

    // чтобы каждый запрос к серверу логировался, можно реализвать самостоятельно
    // или с помощью нпм-модуля морган. Морган позволяет задать структуру логирования
    // и как эти запросы будут логироваться на сервере.
    app.use(routesLogger);
};