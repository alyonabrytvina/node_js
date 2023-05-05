const db = require('../../entities/Database');

module.exports = (req, res) => {
    const svgId = req.params.id;

    return res.json(db.findOne(svgId).toPublicJSON());
}
