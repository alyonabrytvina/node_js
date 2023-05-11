const db = require('@models/Database');

module.exports = (req, res, next) => {
    try {
        const svgId = req.params.id;
        return res.json(db.findOne(svgId).toPublicJSON());
    } catch (e) {
        next(e);
    }
};
