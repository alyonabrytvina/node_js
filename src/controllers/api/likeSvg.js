const db = require('@models/Database');

module.exports = (req, res) => {
    const svgId = req.params.id;
    const isLiked = req.body.isLiked;
    db.setLiked(svgId, isLiked);

    return res.json({ isLiked });
};
