const db = require('@models/Database');

module.exports = (req, res, next) => {
    try {
        const allSvgs = db.find().map((svg) => svg.toPublicJSON());
        const likedSvgs = db.find(true).map((svg) => svg.toPublicJSON());
        return res.json({
            allSvgs, likedSvgs
        });
    } catch (e) {
        next(e);
    }
};