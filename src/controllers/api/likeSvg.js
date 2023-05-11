const db = require('@models/Database');

module.exports = (req, res, next) => {
    try {
        const svgId = req.params.id;
        const isLiked = req.body.isLiked;
        db.setLiked(svgId, isLiked);
        return res.json({ isLiked });
    } catch (e) {
        next(e);
    }
};
