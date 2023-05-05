const db = require('../../entities/Database');

module.exports = (req, res, next) => {
    const svgId = req.params.id;

    if (db.findOne(svgId) === null) {
        return res.sendStatus({ status: 404 });
    }

    next();
};